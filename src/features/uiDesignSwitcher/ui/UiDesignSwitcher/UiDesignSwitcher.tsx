import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UiDesignSwitcher.module.scss';
import { memo, useMemo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const items = useMemo(
    () => [
      {
        content: t('Новый'),
        value: 'new',
      },
      {
        content: t('Старый'),
        value: 'old',
      },
    ],
    [t],
  );

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          newFeatures: {
            isAppRedesigned: value === 'new' ? true : false,
          },
          userId: authData.id,
        }),
      ).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <HStack
      gap="16"
      max
    >
      <Text
        title="Вариант интерфейса"
        nowrap
        size="s"
      />
      {isLoading ? (
        <Skeleton
          width={'100%'}
          height={24}
        />
      ) : (
        <ListBox
          className={classNames(cls.UiDesignSwitcher, {}, [className])}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          onChange={onChange}
        />
      )}
    </HStack>
  );
});

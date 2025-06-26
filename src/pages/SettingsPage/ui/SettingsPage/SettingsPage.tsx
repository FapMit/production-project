import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SettingsPage.module.scss';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.SettingsPage, {}, [className])}>
      <VStack
        max
        gap="16"
      >
        <Text
          title="Настройки пользователя"
          size="xl"
        />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;

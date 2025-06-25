import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);

    const dispath = useAppDispatch();

    const onEdit = useCallback(() => {
      dispath(profileActions.setReadonly(false));
    }, [dispath]);

    const onCancelEdit = useCallback(() => {
      dispath(profileActions.cancelEdit());
    }, [dispath]);

    const onSave = useCallback(() => {
      dispath(updateProfileData());
    }, [dispath]);

    console.log(profileData);

    if (!profileData) return null;

    return (
      <HStack
        justify="between"
        gap="16"
        max
        className={classNames('', {}, [className])}
      >
        <Text title={t('Профиль')} />
        {canEdit && (
          <>
            {readonly ? (
              <ButtonDeprecated
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('Редактировать')}
              </ButtonDeprecated>
            ) : (
              <HStack gap="8">
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Отменить')}
                </ButtonDeprecated>
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE_GREEN}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Сохранить')}
                </ButtonDeprecated>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  },
);

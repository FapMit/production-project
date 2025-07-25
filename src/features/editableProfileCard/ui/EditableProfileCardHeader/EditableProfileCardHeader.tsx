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
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            max
            padding="16"
          >
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
                    <Button
                      variant="outline"
                      rounded
                      onClick={onEdit}
                      data-testid="EditableProfileCardHeader.EditButton"
                    >
                      {t('Редактировать')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        variant="danger"
                        rounded
                        onClick={onCancelEdit}
                        data-testid="EditableProfileCardHeader.CancelButton"
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        variant="success"
                        rounded
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton"
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
                </>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            justify="between"
            gap="16"
            max
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t('Профиль')} />
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
        }
      />
    );
  },
);

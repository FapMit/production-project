import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);

  const dispath = useAppDispatch();

  const onEdit = useCallback(() => {
    dispath(profileActions.setReadonly(false));
  }, [dispath])

  const onCancelEdit = useCallback(() => {
    dispath(profileActions.cancelEdit());
  }, [dispath])

  const onSave = useCallback(() => {
    dispath(updateProfileData());
  }, [dispath])


  return (
    <HStack 
      justify="between" 
      gap="16"
      max
      className={classNames('', {}, [className])}
    >
      <Text title={t("Профиль")} />
      {canEdit && (
        <>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t("Редактировать")}
              </Button>
            )
            : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t("Отменить")}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE_GREEN}
                  onClick={onSave}
                >
                  {t("Сохранить")}
                </Button>
              </HStack>
            )
          }
        </>
      )}
    </HStack>
  );
}
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { getUserAuthData } from "entities/User";

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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
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
              <div className={classNames(cls.btns, {}, [])}>
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

              </div>
            )
          }
        </>
      )}
    </div>
  );
}
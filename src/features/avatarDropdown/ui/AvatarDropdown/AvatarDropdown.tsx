import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Dropdown } from "@/shared/ui/Popups";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) return null;

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"

      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin_panel
        }] : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id
        },
        {
          content: t('Выйти'),
          onClick: onLogout
        }
      ]}

      trigger={
        <Avatar circle size={32}
          alt={authData.email}
          src={authData.avatar}
        />
      }
    />
  );
});
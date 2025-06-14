import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { DropDownDirection } from '@/shared/types/ui';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
  dropdownDir?: DropDownDirection;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className, dropdownDir = 'bottom left' } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) return null;

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction={dropdownDir}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Админка'),
                href: getRouteAdminPanel(),
              },
            ]
          : []),
        {
          content: t('Профиль'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={
        <Avatar
          circle
          size={32}
          alt={authData.email}
          src={authData.avatar}
        />
      }
    />
  );
});

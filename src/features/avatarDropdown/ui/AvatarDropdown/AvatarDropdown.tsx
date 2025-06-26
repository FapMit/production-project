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
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { DropDownDirection } from '@/shared/types/ui';
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

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

  const items = [
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
      content: t('Настройки'),
      href: getRouteSettings(),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          direction={dropdownDir}
          items={items}
          trigger={
            <Avatar
              circle
              size={40}
              alt={authData.email}
              src={authData.avatar}
            />
          }
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          direction={dropdownDir}
          items={items}
          trigger={
            <AvatarDeprecated
              circle
              size={32}
              alt={authData.email}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
});

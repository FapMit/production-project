import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Text } from "shared/ui/Text/Text";
import cls from './Navbar.module.scss';


interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text title={t('Сервис новостей')} className={cls.AppName} />
        <AppLink
          to={RoutePath.article_create}
          className={cls.createdLink}
          theme={AppLinkTheme.INVERTED}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
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
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text title={t('Сервис новостей')} className={cls.AppName} />
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShow}
        className={cls.link}
      >
        {t('Войти')}
      </Button>

      <LoginModal
        isOpen={isAuthModal}
        onClose={onClose}
      />
    </header>
  );
});
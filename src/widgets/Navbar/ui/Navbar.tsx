import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack
              gap="16"
              className={cls.actions}
            >
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
              title={t('Сервис новостей')}
              className={cls.AppName}
            />
            {/* <AppLink
          to={getRouteArticleCreate()}
          className={cls.createdLink}
          theme={AppLinkTheme.INVERTED}
        >
          {t('Создать статью')}
        </AppLink> */}
            <HStack
              gap="16"
              className={cls.actions}
            >
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text
        title={t('Сервис новостей')}
        className={cls.AppName}
      />
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

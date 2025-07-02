import { NotificationList } from '@/entities/Notification';
import { getUserAuthData } from '@/entities/User';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useSelector } from 'react-redux';
import NotificationsIconDeprecated from '@/shared/assets/icons/notifications.svg';
import NotificationsIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import cls from './NotificationButton.module.scss';
import { DropDownDirection } from '@/shared/types/ui';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
  className?: string;
  dropdownDir?: DropDownDirection;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className, dropdownDir = 'bottom left' } = props;

  const authData = useSelector(getUserAuthData);

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Icon
          Svg={NotificationsIcon}
          width={32}
          height={32}
          clickable
          onClick={onOpenDrawer}
        />
      }
      off={
        <ButtonDeprecated onClick={onOpenDrawer}>
          <IconDeprecated
            Svg={NotificationsIconDeprecated}
            className={cls.icon}
            width={32}
            height={32}
          />
        </ButtonDeprecated>
      }
    />
  );

  if (!authData) {
    return null;
  }

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Popover
              className={classNames(cls.NotificationButton, {}, [className])}
              trigger={trigger}
              direction={dropdownDir}
            >
              <NotificationList
                id={authData.id}
                className={cls.notificationsRedesigned}
              />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames(cls.NotificationButton, {}, [className])}
              trigger={trigger}
              direction={dropdownDir}
            >
              <NotificationList
                id={authData.id}
                className={cls.notifications}
              />
            </PopoverDeprecated>
          }
        />
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer
          isOpen={isOpen}
          onClose={onCloseDrawer}
          lazy
        >
          <NotificationList id={authData.id} />
        </Drawer>
      </MobileView>
    </>
  );
});

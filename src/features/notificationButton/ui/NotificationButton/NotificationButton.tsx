import { NotificationList } from '@/entities/Notification';
import { getUserAuthData } from '@/entities/User';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useSelector } from 'react-redux';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import { DropDownDirection } from '@/shared/types/ui';

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
    <Button onClick={onOpenDrawer}>
      <Icon
        Svg={NotificationsIcon}
        className={cls.icon}
        width={32}
        height={32}
      />
    </Button>
  );

  if (!authData) {
    return null;
  }

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          trigger={trigger}
          direction={dropdownDir}>
          <NotificationList
            id={authData.id}
            className={cls.notifications}
          />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer
          isOpen={isOpen}
          onClose={onCloseDrawer}
          lazy>
          <NotificationList id={authData.id} />
        </Drawer>
      </MobileView>
    </>
  );
});

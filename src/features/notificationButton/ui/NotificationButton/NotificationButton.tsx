import { NotificationList } from "entities/Notification";
import { getUserAuthData } from "entities/User";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
import NotificationsIcon from "shared/assets/icons/notifications.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popups";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const authData = useSelector(getUserAuthData);

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger =
    <Button onClick={onOpenDrawer} >
      <Icon Svg={NotificationsIcon} className={cls.icon} />
    </Button>

  if (!authData) {
    return null;
  }

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          trigger={trigger}
          direction="bottom left"
        >
          <NotificationList id={authData.id} className={cls.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer} >
          <NotificationList id={authData.id} />
        </Drawer >
      </MobileView>
    </>
  );


});
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { Popover } from "shared/ui/Popups";
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { NotificationList } from "entities/Notification";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import NotificationsIcon from "shared/assets/icons/notifications.svg";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return null;
  }

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      trigger={
        <Button>
          <Icon Svg={NotificationsIcon} className={cls.icon} />
        </Button>
      }
      direction="bottom left"
    >
      <NotificationList id={authData.id} className={cls.notifications} />
    </Popover>
  );


});
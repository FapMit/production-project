import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          variant="outlined"
          className={classNames(cls.NotificationItem, {}, [className])}
          padding="16"
          max
        >
          <Text
            title={item.title}
            text={item.description}
            size="s"
            className={cls.text}
          />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeprecated
            title={item.title}
            text={item.description}
            size={TextSize.S}
            className={cls.text}
          />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return content;
});

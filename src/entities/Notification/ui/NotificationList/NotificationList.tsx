import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
  id: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const { data: notifications, isLoading } = useNotifications(id, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton
          height={80}
          width={'100%'}
          borderRadius={'8px'}
        />
        <Skeleton
          height={80}
          width={'100%'}
          borderRadius={'8px'}
        />
        <Skeleton
          height={80}
          width={'100%'}
          borderRadius={'8px'}
        />
      </VStack>
    );
  }

  if (!notifications || notifications.length === 0) {
    return (
      <div className={classNames(cls.NotificationList, {}, [className])}>
        <Text text={t('У вас нет уведомлений')} />
      </div>
    );
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifications?.map((n) => (
        <NotificationItem
          key={n.id}
          item={n}
        />
      ))}
    </VStack>
  );
});

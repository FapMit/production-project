import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap="16"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        data-testid="CommentCard.Loading"
      >
        <div className={cls.header}>
          <Skeleton
            maxWidth={30}
            width={30}
            height={30}
            borderRadius={'50%'}
          />
          <Skeleton
            maxWidth={300}
            width={300}
            height={16}
          />
        </div>
        <Skeleton
          maxWidth={'none'}
          height={50}
        />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      max
      gap="8"
      className={classNames(cls.CommentCard, {}, [className])}
      data-testid="CommentCard.Content"
    >
      <AppLink
        className={cls.header}
        to={getRouteProfile(comment.user.id)}
      >
        <Avatar
          size={30}
          circle
          alt={comment.user.email}
          src={comment.user.avatar}
        />
        <Text
          title={comment.user.email}
          size={TextSize.S}
        />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});

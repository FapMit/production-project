import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <VStack
            max
            gap="16"
            className={classNames(cls.CommentCard, {}, [
              className,
              cls.loading,
            ])}
            data-testid="CommentCard.Loading"
          >
            <div className={cls.header}>
              <SkeletonDeprecated
                maxWidth={30}
                width={30}
                height={30}
                borderRadius={'50%'}
              />
              <SkeletonDeprecated
                maxWidth={300}
                width={300}
                height={16}
              />
            </div>
            <SkeletonDeprecated
              maxWidth={'none'}
              height={50}
            />
          </VStack>
        }
        on={
          <HStack
            max
            gap="16"
            className={classNames(cls.CommentCard, {}, [
              className,
              cls.loading,
            ])}
            data-testid="CommentCard.Loading"
          >
            <Skeleton
              maxWidth={30}
              width={30}
              height={30}
              borderRadius={'50%'}
            />
            <Skeleton
              maxWidth={'none'}
              height={50}
            />
          </HStack>
        }
      />
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          max
          gap="16"
          className={classNames(cls.CommentCardRedesigned, {}, [className])}
          data-testid="CommentCard.Content"
          align="start"
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
          </AppLink>
          <Text text={comment.text} />
        </HStack>
      }
      off={
        <VStack
          max
          gap="8"
          className={classNames(cls.CommentCard, {}, [className])}
          data-testid="CommentCard.Content"
        >
          <AppLinkDeprecated
            className={cls.header}
            to={getRouteProfile(comment.user.id)}
          >
            <AvatarDeprecated
              size={30}
              circle
              alt={comment.user.email}
              src={comment.user.avatar}
            />
            <TextDeprecated
              title={comment.user.email}
              size={TextSize.S}
            />
          </AppLinkDeprecated>
          <TextDeprecated text={comment.text} />
        </VStack>
      }
    />
  );
});

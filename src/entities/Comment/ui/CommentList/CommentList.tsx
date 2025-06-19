import { Comment } from '../../model/types/comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/deprecated/Stack';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('comments');

  if (isLoading) {
    return (
      <VStack
        max
        gap='16'
        className={classNames('', {}, [className])}>
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap='16'
      className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            comment={comment}
            isLoading={isLoading}
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </VStack>
  );
});

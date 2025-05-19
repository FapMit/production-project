import { CommentForm, CommentList } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useAddArticleComment, useArticleComments } from '../../api/articleCommentsApi';
import cls from './ArticleComments.module.scss';

interface ArticleCommentsProps {
  className?: string;
  id: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('comments');

  const { isLoading, data: comments, refetch } = useArticleComments(id);
  const [addArticleComment, { }] = useAddArticleComment();
  const userData = useSelector(getUserAuthData);

  const onSendComment = useCallback((text: string) => {
    const commentInfo = {articleId: id, userId: userData?.id, text}
    addArticleComment(commentInfo).then(() => refetch())
  }, [addArticleComment, id, refetch, userData?.id])

  if (isLoading) {
    return null;
  }

  return (
    <VStack max gap='16' className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Комментарии')}
        className={cls.commentTitle}
      />
      <CommentForm onSendComment={onSendComment} isLoading={isLoading || false} />
      {comments && <CommentList isLoading={isLoading} comments={comments} className={cls.commentList} />}
    </VStack>
  );
});
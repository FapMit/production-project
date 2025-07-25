import { CommentForm, CommentList } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import {
  useAddArticleComment,
  useArticleComments,
} from '../../api/articleCommentsApi';
import cls from './ArticleComments.module.scss';
import { getArticleDetailsIsLoading } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('comments');

  const { isLoading, data: comments, refetch } = useArticleComments(id);
  const [addArticleComment, {}] = useAddArticleComment();
  const userData = useSelector(getUserAuthData);
  const isPageLoading = useSelector(getArticleDetailsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      const commentInfo = { articleId: id, userId: userData?.id, text };
      addArticleComment(commentInfo).then(() => refetch());
    },
    [addArticleComment, id, refetch, userData?.id],
  );

  if (isPageLoading) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack
          max
          gap="16"
          className={classNames('', {}, [className])}
        >
          <Text
            size="l"
            title={t('Комментарии')}
            className={cls.commentTitle}
          />
          <Suspense fallback={'Загрузка'}>
            <CommentForm
              onSendComment={onSendComment}
              isLoading={isLoading || false}
            />
          </Suspense>

          {comments && (
            <CommentList
              isLoading={isLoading}
              comments={comments}
              className={cls.commentList}
            />
          )}
        </VStack>
      }
      off={
        <VStack
          max
          gap="16"
          className={classNames('', {}, [className])}
        >
          <TextDeprecated
            size={TextSize.L}
            title={t('Комментарии')}
            className={cls.commentTitle}
          />
          <Suspense fallback={'Загрузка'}>
            <CommentForm
              onSendComment={onSendComment}
              isLoading={isLoading || false}
            />
          </Suspense>

          {comments && (
            <CommentList
              isLoading={isLoading}
              comments={comments}
              className={cls.commentList}
            />
          )}
        </VStack>
      }
    />
  );
});

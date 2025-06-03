import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from '@/entities/Article';

export interface ArticleRatingProps {
  className?: string;
  articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('article-details');
  const userData = useSelector(getUserAuthData);

  const isPageLoading = useSelector(getArticleDetailsIsLoading);

  const { data } = useArticleRating({
    articleId: articleId ?? '',
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation, { }] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId: articleId ?? '',
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle])


  if (isPageLoading) return null;

  const rating = data?.[0];

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье, это поможет нам улучшить качество')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});

export default ArticleRating;
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const {data: articles, isLoading, error} = useArticleRecommendationsList(6);

  if (isLoading || error || !articles) {
    return null
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендации')}
      />
      <ArticleList
        className={cls.recommendations}
        articles={articles}
        target={'_blank'}
      />
    </VStack>
  );
});
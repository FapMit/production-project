import { ArticleList, getArticleDetailsIsLoading } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import cls from './ArticleRecommendationsList.module.scss';
import { useSelector } from 'react-redux';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    const { data: articles, error } = useArticleRecommendationsList(6);

    const isPageLoading = useSelector(getArticleDetailsIsLoading);

    if (isPageLoading || error || !articles) {
      return null;
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            gap="8"
            className={classNames('', {}, [className])}
            data-testid="ArticleRecommendationsList"
            max
          >
            <Text
              size="l"
              title={t('Рекомендуем')}
            />
            <ArticleList
              className={cls.recommendationsRedesigned}
              articles={articles}
              target={'_blank'}
            />
          </VStack>
        }
        off={
          <VStack
            gap="8"
            className={classNames('', {}, [className])}
            data-testid="ArticleRecommendationsList"
          >
            <TextDeprecated
              size={TextSize.L}
              title={t('Рекомендации')}
            />
            <ArticleList
              className={cls.recommendations}
              articles={articles}
              target={'_blank'}
            />
          </VStack>
        }
      />
    );
  },
);

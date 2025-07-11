import { ArticleDetails } from '@/entities/Article';
import { ArticleComments } from '@/features/articleComments';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
                data-testid="ArticleDetailsPage"
              >
                <DetailsContainer />
                <ToggleFeatures
                  feature="isArticleRatingEnabled"
                  on={<ArticleRating articleId={id} />}
                  off={
                    <Card>
                      <Text
                        align="center"
                        title="Оценить статью пока нельзя"
                      />
                    </Card>
                  }
                />
                <ArticleRecommendationsList />
                <ArticleComments id={id} />
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page
            className={classNames(cls.ArticleDetailsPage, {}, [className])}
            data-testid="ArticleDetailsPage"
          >
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ToggleFeatures
              feature="isArticleRatingEnabled"
              on={<ArticleRating articleId={id} />}
              off={
                <CardDeprecated>
                  <TextDeprecated
                    align={TextAlign.CENTER}
                    title="Оценить статью пока нельзя"
                  />
                </CardDeprecated>
              }
            />
            <ArticleRecommendationsList />
            <ArticleComments id={id} />
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

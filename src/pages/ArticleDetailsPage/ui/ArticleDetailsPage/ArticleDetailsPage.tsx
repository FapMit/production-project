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
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const rating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => (
      <Card>
        <Text
          align={TextAlign.CENTER}
          title='Оценить статью пока нельзя'
        />
      </Card>
    ),
  });

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
        data-testid='ArticleDetailsPage'>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {rating}
        <ArticleRecommendationsList />
        <ArticleComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

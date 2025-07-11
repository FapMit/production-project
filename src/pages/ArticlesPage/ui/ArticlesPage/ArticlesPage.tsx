import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <Page
              onScrollEnd={onLoadNextPart}
              className={classNames(cls.ArticlesPageRedesigned, {}, [
                className,
              ])}
              data-testid="ArticlesPage"
            >
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </Page>
          }
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
        />
      }
      off={
        <Page
          onScrollEnd={onLoadNextPart}
          className={classNames(cls.ArticlesPage, {}, [className])}
          data-testid="ArticlesPage"
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);

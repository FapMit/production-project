import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getArticlesError, getArticlesIsLoading, getArticlesView } from "../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../model/services/fetchArticleList/fetchArticlesList";
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });


  // const { t } = useTranslation('article');

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        {!isLoading && <ArticleViewSelector view={view} onViewClick={onChangeView} />}
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
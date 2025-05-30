import { ArticleDetails } from "@/entities/Article";
import { ArticleComments } from "@/features/articleComments";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page/Page";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleRating } from "@/features/articleRating";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id}/>
        <ArticleRecommendationsList />
        <ArticleComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
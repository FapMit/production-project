import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  isRecommendations?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView, count: number = 9) => {
  return new Array(view === ArticleView.TILE ? count : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading = false,
    view = ArticleView.TILE,
    isRecommendations = false,
    target
  } = props
  const { t } = useTranslation('articles');

  if (isLoading) {
    const count = isRecommendations ? 4 : 9;
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view,count)}
      </div>
    )
  }

  if (!articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className])}>
        <Text size={TextSize.L} align={TextAlign.CENTER} title={t("Статьи не найдены")} theme={TextTheme.ERROR}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.map(article => (
          <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
          />
        ))
      }
      {isLoading && getSkeletons(view)}
    </div>
  );
});
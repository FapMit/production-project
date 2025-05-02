import { memo } from "react";
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
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.TILE ? 10 : 3)
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
  } = props
  const { t } = useTranslation('articles');

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
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
          />
        ))
      }
      {isLoading && getSkeletons(view)}
    </div>
  );
});
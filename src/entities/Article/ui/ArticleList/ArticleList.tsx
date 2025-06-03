import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../model/consts/articleConsts";
import { Article } from "../../model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TILE,
    target
  } = props;
  const { t } = useTranslation('articles');

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className])}>
        <Text size={TextSize.L} align={TextAlign.CENTER} title={t("Статьи не найдены")} theme={TextTheme.ERROR} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.map((article) => (
          <ArticleListItem
            article={article}
            view={view}
            target={target}
            key={article.id}
          />
        ))
      }
      {isLoading && getSkeletons(view)}
    </div>
  )
});
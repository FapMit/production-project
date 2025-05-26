import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { PAGE_ID } from "widgets/Page/Page";
import { Article } from "../../model/types/Article";
import { ArticleView } from "../../model/consts/articleConsts";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  virtualized?: boolean;
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
    virtualized = true,
    target
  } = props
  const { t } = useTranslation('articles');

  const isBig = view === ArticleView.LIST;

  const itemsPerRow = isBig ? 1 : 4;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
          className={cls.card}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    );
  };

  if (isLoading) {
    const count = virtualized ? 4 : 9;
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view, count)}
      </div>
    )
  }

  if (!articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className])}>
        <Text size={TextSize.L} align={TextAlign.CENTER} title={t("Статьи не найдены")} theme={TextTheme.ERROR} />
      </div>
    )
  }

  if (!virtualized) {
    return (
      <div className={classNames(isBig ? cls.RecomendationList : cls.RecomendationTile, {}, [className])}>
        {
          articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))
        }
      </div>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 315}
            rowRenderer={rowRender}
            width={width ? width : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
            className={cls.customList}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
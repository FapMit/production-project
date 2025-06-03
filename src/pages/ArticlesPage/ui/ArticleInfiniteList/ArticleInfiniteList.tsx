import { ArticleList } from "@/entities/Article";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextTheme } from "@/shared/ui/Text";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('articles');

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);


  if (error) {
    return (
      <Text title={t("Произошла ошибка при загрузке статей")} theme={TextTheme.ERROR} />
    );
  }

  return (
    <ArticleList
      isLoading={isLoading}
      articles={articles}
      view={view}
      className={classNames('', {}, [className])}
    />
  );
};

export default ArticleInfiniteList;
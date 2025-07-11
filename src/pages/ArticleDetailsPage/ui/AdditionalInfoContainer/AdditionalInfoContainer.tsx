import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer = (
  props: AdditionalInfoContainerProps,
) => {
  const { className } = props;

  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();
  const onEditArticle = useCallback(() => {
    if (article) navigate(getRouteArticleEdit(article.id));
  }, [article, navigate]);

  if (!article) return null;

  return (
    <Card padding="24">
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        className={className}
        onEdit={onEditArticle}
      />
    </Card>
  );
};

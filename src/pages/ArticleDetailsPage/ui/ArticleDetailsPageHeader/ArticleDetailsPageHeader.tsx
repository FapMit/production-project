import { getArticleDetailsData } from '@/entities/Article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps,
) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) navigate(getRouteArticleEdit(article.id));
  }, [article, navigate]);

  return (
    <HStack
      justify="between"
      gap="16"
      className={classNames('', {}, [className])}
    >
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={onBackToList}
      >
        {t('Назад к списку') + '>'}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE_GREEN}
          onClick={onEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
};

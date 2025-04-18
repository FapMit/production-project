import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "shared/assets/icons/eye.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "../../model/types/Article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleListItem.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props
  const { t } = useTranslation();

  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = <div className={cls.viewsWrapper}>
    <Text text={String(article.views)} className={cls.views} />
    <Icon Svg={EyeIcon} />
  </div>

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} circle src={article.user.avatar} alt={article.user.email} />
            <Text text={article.user.email} className={cls.email} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img className={cls.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onOpenArticle}
            >
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img} alt={article.title} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
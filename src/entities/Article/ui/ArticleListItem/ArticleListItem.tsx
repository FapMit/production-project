import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { RoutePath } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import { Article, ArticleTextBlock } from "../../model/types/Article";
import { ArticleView } from "../../model/consts/articleConsts";
import { ArticleBlockType } from "../../model/consts/articleConsts";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleListItem.module.scss";
import { HStack } from "@/shared/ui/Stack";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('articles');

  const types = <Text text={article.type.join(', ')}
    className={cls.types} />;
  const views = <HStack gap="8">
    <Text text={String(article.views)}
      className={cls.views} />
    <Icon Svg={EyeIcon} />
  </HStack>

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <AppLink
        target={target}
        to={RoutePath.article_details + article.id}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30}
              circle
              src={article.user.avatar}
              alt={article.user.email} />
            <Text text={article.user.email}
              className={cls.email} />
            <Text text={article.createdAt}
              className={cls.date} />
          </div>
          <Text title={article.title}
            className={cls.title} />
          {types}
          <img className={cls.img}
            src={article.img}
            alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock}
              className={cls.textBlock} />
          )}
          <HStack max
            justify="between">
            <Button
              theme={ButtonTheme.OUTLINE}
            >
              {t('Читать далее...')}
            </Button>
            {views}
          </HStack>
        </Card>
      </AppLink>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.ArticleListItem, {}, [className])}
    >
      <Card 
        className={classNames(cls.card, {}, [className, cls[view]])}
      >
        <div className={cls.imageWrapper}>
          <img src={article.img}
            className={cls.img}
            alt={article.title} />
          <Text text={article.createdAt}
            className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title}
          className={cls.title} />
      </Card>
    </AppLink>
  );
});
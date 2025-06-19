import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/Article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import articleDefaultImg from '@/shared/assets/default/articleDefault.jpg';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const types = (
    <Text
      text={article.type.join(', ')}
      className={cls.types}
    />
  );
  const views = (
    <HStack gap='8'>
      <Text
        text={String(article.views)}
        className={cls.views}
      />
      <Icon Svg={EyeIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <AppLink
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        data-testid='ArticleListItem'>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar
              size={30}
              circle
              src={article.user.avatar}
              alt={article.user.email}
            />
            <Text
              text={article.user.email}
              className={cls.email}
            />
            <Text
              text={article.createdAt}
              className={cls.date}
            />
          </div>
          <Text
            title={article.title}
            className={cls.title}
          />
          {types}
          <AppImage
            fallback={
              <Skeleton
                width={'100%'}
                height={300}
              />
            }
            errorFalback={
              <img
                src={articleDefaultImg}
                alt={article.title}
                width={'100%'}
                height={300}
              />
            }
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <HStack
            max
            justify='between'>
            <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
            {views}
          </HStack>
        </Card>
      </AppLink>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className])}
      data-testid='ArticleListItem'>
      <Card className={classNames(cls.card, {}, [className, cls[view]])}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={
              <Skeleton
                width={230}
                height={230}
              />
            }
            errorFalback={
              <img
                src={articleDefaultImg}
                alt={article.title}
                width={'100%'}
                height={'100%'}
              />
            }
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <Text
            text={article.createdAt}
            className={cls.date}
          />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          text={article.title}
          className={cls.title}
        />
      </Card>
    </AppLink>
  );
});

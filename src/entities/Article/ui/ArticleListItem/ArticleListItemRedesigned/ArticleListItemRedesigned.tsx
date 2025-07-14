import EyeIcon from '@/shared/assets/icons/eyeNew.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/Article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItemRedesigned.module.scss';
import articleDefaultImg from '@/shared/assets/default/articleDefault.jpg';
import { ArticleListItemProps } from '../ArticleListItem';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Button } from '@/shared/ui/redesigned/Button';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} />
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
        data-testid="ArticleListItem"
      >
        <Card
          max
          padding="24"
        >
          <VStack
            max
            gap="16"
          >
            <HStack gap="8">
              <Avatar
                size={32}
                circle
                src={article.user.avatar}
                alt={article.user.email}
              />
              <Text
                text={article.user.email}
                bold
              />
              <Text text={article.createdAt} />
            </HStack>
            <Text
              title={article.title}
              size="l"
              bold
            />
            <Text
              text={article.subtitle}
              size="l"
            />
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
              justify="between"
            >
              <Button
                variant="outline"
                rounded
              >
                {t('Читать далее...')}
              </Button>
              {views}
            </HStack>
          </VStack>
        </Card>
      </AppLink>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <Card
        padding="0"
        max
      >
        <VStack
          max
          gap="8"
        >
          <AppImage
            fallback={
              <Skeleton
                width={'100%'}
                height={140}
              />
            }
            errorFalback={
              <img
                src={articleDefaultImg}
                alt={article.title}
                width={'100%'}
                height={140}
              />
            }
            src={article.img}
            alt={article.title}
            width={'100%'}
            height={140}
          />
          <Text
            title={article.title}
            size="m"
            className={cls.title}
          />
          <HStack
            justify="between"
            gap="4"
            max
            className={cls.infoBlock}
          >
            <Text
              text={article.createdAt}
              size="m"
            />
            {views}
          </HStack>
          <HStack
            gap="4"
            max
            align="center"
            className={cls.userBlock}
          >
            <Avatar
              size={32}
              circle
              src={article.user.avatar}
              alt={article.user.email}
            />
            <Text
              text={article.user.email}
              bold
            />
          </HStack>
        </VStack>
      </Card>
    </AppLink>
  );
});

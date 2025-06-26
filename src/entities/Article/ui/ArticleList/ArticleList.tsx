import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';

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
      <ArticleListItemSkeleton
        key={index}
        view={view}
      />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TILE,
    target,
  } = props;
  const { t } = useTranslation('articles');

  if (!isLoading && !articles.length) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Flex
            className={classNames('', {}, [className])}
            direction="column"
            max
            justify="center"
            align="center"
          >
            <Text
              size="l"
              align="center"
              title={t('Статьи не найдены')}
              variant="error"
            />
          </Flex>
        }
        off={
          <div className={classNames(cls.ArticleList, {}, [className])}>
            <TextDeprecated
              size={TextSize.L}
              align={TextAlign.CENTER}
              title={t('Статьи не найдены')}
              theme={TextTheme.ERROR}
            />
          </div>
        }
      />
    );
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Flex
          className={classNames(cls.ArticleListRedesigned, {}, [
            className,
            // cls[view],
          ])}
          direction="row"
          gap="16"
          wrap="wrap"
          justify="center"
          data-testid="ArticleList"
        >
          {articles.map((article) => (
            <ArticleListItem
              article={article}
              view={view}
              target={target}
              key={article.id}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </Flex>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.map((article) => (
            <ArticleListItem
              article={article}
              view={view}
              target={target}
              key={article.id}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  Text as TextDerecated,
  TextAlign,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import cls from './ArticleDetails.module.scss';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers = {
  articleDetails: articleDetailsReducer,
};

const SkeletonBlockDeprecated = () => {
  return (
    <>
      <SkeletonDeprecated
        className={cls.avatar}
        maxWidth={200}
        height={200}
        borderRadius={'50%'}
      />
      <SkeletonDeprecated
        className={cls.title}
        maxWidth={300}
        height={32}
      />
      <SkeletonDeprecated
        className={cls.skeleton}
        maxWidth={600}
        height={24}
      />
      <SkeletonDeprecated
        className={cls.skeleton}
        maxWidth={'100%'}
        height={200}
      />
      <SkeletonDeprecated
        className={cls.skeleton}
        maxWidth={'100%'}
        height={200}
      />
    </>
  );
};
const SkeletonBlockRedesigned = () => {
  return (
    <VStack gap="16">
      <Skeleton
        maxWidth={200}
        height={32}
      />
      <Skeleton
        maxWidth={300}
        height={32}
      />
      <Skeleton
        maxWidth={'100%'}
        height={420}
      />
      <Skeleton
        className={cls.skeleton}
        maxWidth={'100%'}
        height={200}
      />
    </VStack>
  );
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <div className={cls.avatarWrapper}>
        <AvatarDeprecated
          isArticle
          src={article?.img}
          size={200}
          circle
          className={cls.avatar}
        />
      </div>
      <TextDerecated
        className={cls.title}
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.L}
      />
      <div className={cls.articleInfo}>
        <IconDeprecated
          Svg={EyeIcon}
          className={cls.icon}
        />
        <TextDerecated text={String(article?.views)} />
      </div>
      <div className={cls.articleInfo}>
        <IconDeprecated
          Svg={CalendarIcon}
          className={cls.icon}
        />
        <TextDerecated text={article?.createdAt} />
      </div>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <VStack gap="16">
        <Text
          title={article?.title}
          text={article?.subtitle}
          size="l"
          bold
          className={cls.TitleBlock}
        />
        <AppImage
          src={article?.img}
          className={cls.image}
          fallback={
            <Skeleton
              width={'100%'}
              height={420}
              borderRadius="16px"
            />
          }
        />
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<SkeletonBlockDeprecated />}
        on={<SkeletonBlockRedesigned />}
      />
    );
  } else if (error) {
    content = (
      <TextDerecated
        title={t('Ошибка!')}
        text={t('Произошла ошибка при загрузке статьи.')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<Deprecated />}
        on={<Redesigned />}
      />
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div
        className={classNames(cls.ArticleDetails, {}, [className])}
        data-testid="ArticleDetails"
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";

import { ArticleBlock } from "../../model/types/Article";
import { ArticleBlockType } from "../../model/consts/articleConsts";
import CalendarIcon from "@/shared/assets/icons/calendar.svg";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Icon } from "@/shared/ui/Icon";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
  className?: string;
  id?: string
}

const reducers = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent 
        key={block.id} 
        className={cls.block} 
        block={block} 
      />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent 
        key={block.id} 
        className={cls.block} 
        block={block}
      />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent 
        key={block.id} 
        className={cls.block} 
        block={block} 
      />
    default:
      return null;
    }
  }, []);
  

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar}
          maxWidth={200}
          height={200}
          borderRadius={"50%"} />
        <Skeleton className={cls.title}
          maxWidth={300}
          height={32} />
        <Skeleton className={cls.skeleton}
          maxWidth={600}
          height={24} />
        <Skeleton className={cls.skeleton}
          maxWidth={"100%"}
          height={200} />
        <Skeleton className={cls.skeleton}
          maxWidth={"100%"}
          height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        title={t('Ошибка!')}
        text={t('Произошла ошибка при загрузке статьи.')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar src={article?.img}
            size={200}
            circle
            className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon}
            className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon}
            className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }


  return (
    <DynamicModuleLoader reducers={reducers}
      removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
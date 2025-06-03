import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ArticleView } from "../../model/consts/articleConsts";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton className={cls.avatar} maxWidth={"30px"} height={"30px"} borderRadius="50%" />
            <Skeleton maxWidth={"130px"} height={"16px"} className={cls.email} />
            <Skeleton maxWidth={"100px"} height={"16px"} className={cls.date} />
          </div>
          <Skeleton maxWidth={"130px"} height={"24px"} className={cls.title} />
          <Skeleton maxWidth={"100%"} height={"300px"} className={cls.img}/>
          <div className={cls.footer}>
            <Skeleton maxWidth={"100%"} height={"50px"} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} maxWidth={"200px"} height={"200px"} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton maxWidth={"130px"} height={"16px"} />
        </div>
        <Skeleton maxWidth={"100%"} height={"16px"} className={cls.title} />
      </Card>
    </div>
  );
});
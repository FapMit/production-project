import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleListItemSkeletonDeprecated.module.scss';
import { ArticleView } from '../../../model/consts/articleConsts';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';

export const ArticleListItemSkeletonDeprecated = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <CardDeprecated className={cls.card}>
            <div className={cls.header}>
              <SkeletonDeprecated
                className={cls.avatar}
                maxWidth={'30px'}
                height={'30px'}
                borderRadius="50%"
              />
              <SkeletonDeprecated
                maxWidth={'130px'}
                height={'16px'}
                className={cls.email}
              />
              <SkeletonDeprecated
                maxWidth={'100px'}
                height={'16px'}
                className={cls.date}
              />
            </div>
            <SkeletonDeprecated
              maxWidth={'130px'}
              height={'24px'}
              className={cls.title}
            />
            <SkeletonDeprecated
              maxWidth={'100%'}
              height={'300px'}
              className={cls.img}
            />
            <div className={cls.footer}>
              <SkeletonDeprecated
                maxWidth={'100%'}
                height={'50px'}
              />
            </div>
          </CardDeprecated>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <CardDeprecated className={cls.card}>
          <div className={cls.imageWrapper}>
            <SkeletonDeprecated
              className={cls.img}
              maxWidth={'200px'}
              height={'200px'}
            />
          </div>
          <div className={cls.infoWrapper}>
            <SkeletonDeprecated
              maxWidth={'130px'}
              height={'16px'}
            />
          </div>
          <SkeletonDeprecated
            maxWidth={'100%'}
            height={'16px'}
            className={cls.title}
          />
        </CardDeprecated>
      </div>
    );
  },
);

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './../ArticleListItemRedesigned/ArticleListItemRedesigned.module.scss';
import { ArticleView } from '../../../model/consts/articleConsts';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemSkeletonRedesigned = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItemSkeleton, {}, [
            className,
            cls[view],
          ])}
        >
          <Card
            max
            padding="24"
          >
            <VStack
              max
              gap="16"
            >
              <HStack
                gap="8"
                max
              >
                <Skeleton
                  width={32}
                  height={32}
                  borderRadius="50%"
                />
                <Skeleton
                  width={'10%'}
                  height={24}
                />
                <Skeleton
                  width={'15%'}
                  height={24}
                />
              </HStack>
              <Skeleton
                width={'100%'}
                height={48}
              />
              <Skeleton
                width={'50%'}
                height={24}
              />

              <Skeleton
                width={'100%'}
                height={300}
              />

              <Skeleton
                width={'100%'}
                height={48}
              />
              <HStack
                max
                justify="between"
              >
                <Skeleton
                  width={'30%'}
                  height={24}
                />
                <Skeleton
                  width={'30%'}
                  height={24}
                />
              </HStack>
            </VStack>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItemSkeleton, {}, [
          className,
          cls[view],
        ])}
      >
        <Card padding="0">
          <VStack
            max
            gap="8"
          >
            <Skeleton
              width={'100%'}
              height={140}
            />
            <Skeleton
              width={'100%'}
              height={32}
              className={cls.title}
            />
            <HStack
              justify="between"
              gap="4"
              max
              className={cls.infoBlock}
            >
              <Skeleton
                width={'30%'}
                height={24}
              />
              <Skeleton
                width={'20%'}
                height={24}
              />
            </HStack>
            <HStack
              gap="4"
              max
              align="center"
              className={cls.userBlock}
            >
              <Skeleton
                width={32}
                height={32}
                borderRadius="50%"
              />
              <Skeleton
                width={'40%'}
                height={24}
              />
            </HStack>
          </VStack>
        </Card>
      </div>
    );
  },
);

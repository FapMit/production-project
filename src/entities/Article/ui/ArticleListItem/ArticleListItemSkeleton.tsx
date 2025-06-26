import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { toggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned/ArticleListItemSkeletonRedesigned';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated/ArticleListItemSkeletonDeprecated';

export interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    return toggleFeatures({
      name: 'isAppRedesigned',
      on: () => <ArticleListItemSkeletonRedesigned {...props} />,
      off: () => <ArticleListItemSkeletonDeprecated {...props} />,
    });
  },
);

import { lazy } from 'react';

export const ArticleInfiniteListAsync = lazy(
  () => import('./ArticleInfiniteList'),
);

import type { Meta, StoryObj } from '@storybook/react';

import ArticleInfiniteList from './ArticleInfiniteList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    blocks: [],
    user: { id: '1', email: 'admin' }
  },
  {
    id: '2',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    blocks: [],
    user: { id: '1', email: 'admin' }
  }
]


const meta = {
  title: 'Pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get(`${__API__}/articles`, () => {
          return HttpResponse.json(mockArticles);
        }),
      ],
    },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' }
      },
      articlesPage: {
        isLoading: false,
        error: undefined,
        view: ArticleView.TILE,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
        limit: 9,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
        _inited: false,
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
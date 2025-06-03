import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { Article, ArticleSortField, ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { http, HttpResponse } from 'msw';
import ArticlesPage from './ArticlesPage';

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
  title: 'Pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'fullscreen',
    query: {
      limit: 9,
      sort: ArticleSortField.CREATED,
      order: 'asc',
      search: '',
      type: ArticleType.ALL,
    },
    msw: {
      handlers: [
        http.get(`${__API__}/articles?_expand=user&_limit=9&_page=1&_sort=created&_order=asc`, () => {
          return HttpResponse.json(mockArticles);
        }),
      ],
    },
  },
  decorators: [],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
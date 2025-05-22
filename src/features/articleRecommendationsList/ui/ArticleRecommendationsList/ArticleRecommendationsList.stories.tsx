import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entities/Article';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: { id: '1', email: 'admin' },
  type: [],
  blocks: []
}

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(`${__API__}/articles?_limit=3`, () => {
          return HttpResponse.json([
            { ...article, id: '1' },
            { ...article, id: '2' },
            { ...article, id: '3' },
          ]);
        }),
      ],
    },
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
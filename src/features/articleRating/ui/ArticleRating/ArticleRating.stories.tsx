import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import ArticleRating from './ArticleRating';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' }
      }
    }),
  ],

} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutRate: Story = {
  args: {
  },
};

export const WithRate: Story = {
  args: {
  },
  parameters: {
    msw: {
      handlers: [
        http.get(`${__API__}/article-ratings`, () => {
          return HttpResponse.json([
            { rate: 3, feedback: 'Great article!' },
          ]);
        }),
      ],
    },
  },
};
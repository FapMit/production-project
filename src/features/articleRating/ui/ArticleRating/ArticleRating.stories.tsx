import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    articleId: '1',
  },
};

export const Dark: Story = {
  args: {
    articleId: '1',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
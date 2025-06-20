import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '@/entities/Article';

const meta = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'asc',
  },
};

export const Dark: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'asc',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

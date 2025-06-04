import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleType } from '@/entities/Article';

const meta = {
  title: 'Entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: action('onChangeType'),
  },
};

export const Dark: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: action('onChangeType'),
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
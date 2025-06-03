import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleView } from "../../model/consts/articleConsts";

const meta = {
  title: 'Entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightListSelected: Story = {
  args: {
    view: ArticleView.LIST,
  },
};

export const LightTileSelected: Story = {
  args: {
    view: ArticleView.TILE,
  },
};

export const Dark: Story = {
  args: {
    view: ArticleView.TILE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Pink: Story = {
  args: {
    view: ArticleView.TILE,
  },
  decorators: [ThemeDecorator(Theme.PINK)],
};


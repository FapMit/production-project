import type { Meta, StoryObj } from '@storybook/react';

import { ArticleComments } from './ArticleComments';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'features/ArticleComments',
  component: ArticleComments,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    id: '1',
  },
};

export const Dark: Story = {
  args: {
    id: '1',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Widgets/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleAdditionalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    author: { id: '1', email: 'email' },
    createdAt: '13421',
    views: 123,
    onEdit: () => {},
  },
};

export const Dark: Story = {
  args: {
    author: { id: '1', email: 'email' },
    createdAt: '13421',
    views: 123,
    onEdit: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

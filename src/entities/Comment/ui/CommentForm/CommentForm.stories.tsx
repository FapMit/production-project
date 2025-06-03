import type { Meta, StoryObj } from '@storybook/react';
import { CommentForm } from './CommentForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Entities/Comment/CommentForm',
  component: CommentForm,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isLoading: false,
    onSendComment: () => {}
  },
};

export const Dark: Story = {
  args: {
    isLoading: false,
    onSendComment: () => {}
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
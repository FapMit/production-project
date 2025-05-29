import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Entities/Comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Hello World!',
      user: {
        id: '1',
        email: 'email',
      }
    },
  },
};

export const LightLoading: Story = {
  args: {
    isLoading: true
  },
};

export const Dark: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Hello World!',
      user: {
        id: '1',
        email: 'email',
      }
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Pink: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Hello World!',
      user: {
        id: '1',
        email: 'email',
      }
    },
  },
  decorators: [ThemeDecorator(Theme.PINK)],
};

export const PinkLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.PINK)],
};
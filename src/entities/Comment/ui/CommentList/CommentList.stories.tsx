import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Entities/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hello World!',
        user: {
          id: '1',
          email: 'email',
        }
      },
      {
        id: '2',
        text: 'Hello World 2!',
        user: {
          id: '2',
          email: 'email2',
        }
      },
    ]
  },
};

export const Dark: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hello World!',
        user: {
          id: '1',
          email: 'email',
        }
      },
      {
        id: '2',
        text: 'Hello World 2!',
        user: {
          id: '2',
          email: 'email2',
        }
      },
    ]
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Pink: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hello World!',
        user: {
          id: '1',
          email: 'email',
        }
      },
      {
        id: '2',
        text: 'Hello World 2!',
        user: {
          id: '2',
          email: 'email2',
        }
      },
    ]
  },
  decorators: [ThemeDecorator(Theme.PINK)],
};

export const NoComments: Story = {
  args: {

  },
};

export const Loading: Story = {
  args: {
    isLoading: true
  },
};
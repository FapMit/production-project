import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Entities/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    item: {
      id: '1',
      title: 'Выиграл в лотерею',
      description: 'Выиграл 10000 рублей',
    }
  },
};

export const Dark: Story = {
  args: {
    item: {
      id: '1',
      title: 'Выиграл в лотерею',
      description: 'Выиграл 10000 рублей',
    }
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
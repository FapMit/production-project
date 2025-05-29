import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Entities/NotificationList',
  component: NotificationList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationList>;

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
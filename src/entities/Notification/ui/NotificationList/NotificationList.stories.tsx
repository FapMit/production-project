import type { Meta, StoryObj } from '@storybook/react';

import { delay, http, HttpResponse } from 'msw';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Заголовок 1',
    description: 'Описание'
  },
  {
    id: '2',
    title: 'Заголовок 2',
    description: 'Описание'
  },
]

const meta = {
  title: 'Entities/Notification/NotificationList',
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
  parameters: {
    msw: {
      handlers: [
        http.get(`${__API__}/notifications`,async () => {
          return HttpResponse.json([
            ...mockNotifications
          ]);
        }),
      ],
    },
  },
};

export const LoadingAndNoNotifications: Story = {
  args: {
    id: '1',
  },
  parameters: {
    msw: {
      handlers: [
        http.get(`${__API__}/notifications`,async () => {
          await delay(2000);
        }),
      ],
    },
  },
};
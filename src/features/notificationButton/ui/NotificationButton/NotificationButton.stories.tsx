import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { Notification } from '@/entities/Notification';
import { http, HttpResponse } from 'msw'; 

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
  {
    id: '3',
    title: 'Заголовок 3',
    description: 'Описание'
  },
  {
    id: '4',
    title: 'Заголовок 4',
    description: 'Описание'
  },
]

const meta = {
  title: 'Features/NotificationButton',
  component: NotificationButton,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(`${__API__}/notifications`, async () => {
          return HttpResponse.json([
            ...mockNotifications
          ]);
        }),
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    dropdownDir: 'bottom right'
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1', email: 'admin@admin.ru', roles: [UserRole.USER] },
    },
  })]
};

export const Mobile: Story = {
  args: {
    dropdownDir: 'bottom right'
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1', email: 'admin@admin.ru', roles: [UserRole.USER] },
    },
  })]
};

export const Dark: Story = {
  args: {
    dropdownDir: 'bottom right'
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: { id: '1', email: 'admin@admin.ru', roles: [UserRole.USER] },
      },
    })
  ],
};
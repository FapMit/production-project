import type { Meta, StoryObj } from '@storybook/react';

import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';

const meta = {
  title: 'Features/AvatarDropdown',
  component: AvatarDropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminAndManager: Story = {
  args: {
    dropdownDir: 'bottom right'
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1', email: 'admin@admin.ru', roles: [UserRole.ADMIN] },
    },
  })]
};

export const User: Story = {
  args: {
    dropdownDir: 'bottom right'
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1', email: 'admin@admin.ru', roles: [UserRole.USER] },
    },
  })]
};
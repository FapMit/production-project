import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({
    user: {},
  })],
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
  })],
};

export const AuthLight: Story = {
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: '1',
        email: 'admin',
      },
    },
  })],
};
export const AuthDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
      authData: {
        id: '1',
        email: 'admin',
      },
    },
  })],
};
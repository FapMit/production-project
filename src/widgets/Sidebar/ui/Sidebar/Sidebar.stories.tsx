import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  parameters: {

    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({
    user: {authData: {}}
  })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {authData: {}}
  })],
};

export const Pink: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.PINK), StoreDecorator({
    user: {authData: {}}
  })],
};

export const NoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
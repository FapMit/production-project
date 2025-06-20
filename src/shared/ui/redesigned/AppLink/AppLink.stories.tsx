import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Redesigned/Shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryThemeLight: Story = {
  args: {
    variant: 'primary',
    children: 'Основная ссылка',
  },
};
export const PrimaryThemeDark: Story = {
  args: {
    variant: 'primary',
    children: 'Основная темная ссылка',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const RedThemeLight: Story = {
  args: {
    variant: 'red',
    children: 'Red ссылка',
  },
};
export const RedThemeDark: Story = {
  args: {
    variant: 'red',
    children: 'Red темная ссылка',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

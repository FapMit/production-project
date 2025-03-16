import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    to: '/',
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary link',
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedLight: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'Inverted link',
  },
};
export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'Inverted link',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
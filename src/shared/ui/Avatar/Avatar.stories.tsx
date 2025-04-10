import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Avatar, AvatarSize } from './Avatar';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCircle: Story = {
  args: {
    circle: true,
    size: AvatarSize.L
  },
};

export const DarkCircle: Story = {
  args: {
    circle: true,
    size: AvatarSize.L
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightS: Story = {
  args: {
    size: AvatarSize.S
  },
};

export const LightM: Story = {
  args: {
    size: AvatarSize.M
  },
};

export const LightL: Story = {
  args: {
    size: AvatarSize.L
  },
};

export const LightXL: Story = {
  args: {
    size: AvatarSize.XL
  },
};
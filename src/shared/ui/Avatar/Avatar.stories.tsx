import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Avatar } from './Avatar';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCircle: Story = {
  args: {
    circle: true,
    size: 200,
  },
};

export const DarkCircle: Story = {
  args: {
    circle: true,
    size: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Size300: Story = {
  args: {
    size: 300,
  },
};

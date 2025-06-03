import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    maxWidth: '100%',
    height: 200,
  },
};

export const LightCircle: Story = {
  args: {
    maxWidth: 200,
    height: 200,
    borderRadius: '50%',
  },
};

export const Dark: Story = {
  args: {
    maxWidth: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkCircle: Story = {
  args: {
    maxWidth: 200,
    height: 200,
    borderRadius: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
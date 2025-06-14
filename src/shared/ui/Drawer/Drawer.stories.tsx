import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: 'Any text, blocks',
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children: 'Any text, blocks',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default button',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline button',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline button',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};

export const Clear: Story = {
  args: {
    children: 'Clear button',
    theme: ThemeButton.CLEAR,
  },
};
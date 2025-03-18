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
    children: 'Стандартная',
  },
};

export const Outline: Story = {
  args: {
    children: 'С окантовкой',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'С окантовкой темная',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};

export const Clear: Story = {
  args: {
    children: 'Чистая',
    theme: ThemeButton.CLEAR,
  },
};
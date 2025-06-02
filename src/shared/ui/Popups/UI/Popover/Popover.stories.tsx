/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '../../../Button/Button';

const meta = {
  title: 'Shared/Popups/Popover',
  component: Popover,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: 'Popover content',
  },
};

export const Dark: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: 'Popover content',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
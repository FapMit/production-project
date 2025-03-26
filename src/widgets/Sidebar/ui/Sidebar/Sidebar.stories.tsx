import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
  // args: {
  //   children: 'Default button',
  // },
};
export const Dark: Story = {
  // args: {
  //   children: 'Default button',
  // },
  decorators: [ThemeDecorator(Theme.DARK)],
};
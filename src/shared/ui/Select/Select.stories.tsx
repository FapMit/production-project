import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta = {
  title: 'Shared/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '1', content: 'First' },
      { value: '2', content: 'Second' },
      { value: '3', content: 'Third' },
    ],
  },
};

export const Dark: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '1', content: 'First' },
      { value: '2', content: 'Second' },
      { value: '3', content: 'Third' },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

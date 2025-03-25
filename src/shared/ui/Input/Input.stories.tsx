import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithValue: Story = {
  args: {
    placeholder: 'Placeholder',
    autoFocus: true,
    value: '123',
  },
};

export const WithoutValue: Story = {
  args: {
    placeholder: 'Placeholder',
    autoFocus: true,
  },
};
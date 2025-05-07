import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 2'
      }
    ],
    defaultValue: 'value 2',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 2'
      }
    ],
    defaultValue: 'value 2',
    onChange: () => {},
    readonly: true
  },
};

export const WithLabel: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 2'
      }
    ],
    defaultValue: 'value 2',
    onChange: () => {},
    label: 'Label',
  },
};

export const Dark: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 2'
      }
    ],
    defaultValue: 'value 2',
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
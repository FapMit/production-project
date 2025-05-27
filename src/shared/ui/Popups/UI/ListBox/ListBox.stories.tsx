import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => <div style={{padding: '100px'}}><Story/></div>
  ]
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

export const BottomRight: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 212412412412441241'
      }
    ],
    defaultValue: 'value 2',
    direction: 'bottom right',
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BottomLeft: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 212412412412441241'
      }
    ],
    defaultValue: 'value 2',
    direction: 'bottom left',
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TopRight: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 212412412412441241'
      }
    ],
    defaultValue: 'value 2',
    direction: 'top right',
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TopLeft: Story = {
  args: {
    items: [
      {
        value: 'value 1',
        content: 'value 1'
      },
      {
        value: 'value 2',
        content: 'value 212412412412441241'
      }
    ],
    defaultValue: 'value 2',
    direction: 'top left',
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
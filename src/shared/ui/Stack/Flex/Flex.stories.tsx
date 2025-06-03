import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';

const meta = {
  title: 'Shared/Stack/Flex',
  component: Flex,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const child = <><div>11111</div><div>2222222</div><div>3333333</div></>

export const Row: Story = {
  args: {
    children: child,
    direction: 'row',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RowGap4: Story = {
  args: {
    children: child,
    direction: 'row',
    gap: '4'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RowGap8: Story = {
  args: {
    children: child,
    direction: 'row',
    gap: '8'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RowGap16: Story = {
  args: {
    children: child,
    direction: 'row',
    gap: '16'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RowGap32: Story = {
  args: {
    children: child,
    direction: 'row',
    gap: '32'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const rowJustifyBetween: Story = {
  args: {
    children: child,
    direction: 'row',
    justify: 'between',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const rowJustifyAround: Story = {
  args: {
    children: child,
    direction: 'row',
    justify: 'around',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const rowJustifyCenter: Story = {
  args: {
    children: child,
    direction: 'row',
    justify: 'center'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const rowJustifyStart: Story = {
  args: {
    children: child,
    direction: 'row',
    justify: 'start'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const rowJustifyEnd: Story = {
  args: {
    children: child,
    direction: 'row',
    justify: 'end'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Column: Story = {
  args: {
    children: child,
    direction: 'column',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ColumnGap32: Story = {
  args: {
    children: child,
    direction: 'column',
    gap: '32'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const columnAlignStart: Story = {
  args: {
    children: child,
    direction: 'column',
    align: 'start',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const columnAlignEnd: Story = {
  args: {
    children: child,
    direction: 'column',
    align: 'end',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const columnAlignCenter: Story = {
  args: {
    children: child,
    direction: 'column',
    align: 'center'
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
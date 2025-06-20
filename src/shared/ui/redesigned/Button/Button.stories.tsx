import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Redesigned/Shared/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'Текст',
    variant: 'clear',
  },
};

export const DefaultS: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: 's',
  },
};

export const DefaultM: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: 'm',
  },
};

export const DefaultL: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: 'l',
  },
};

export const DefaultXL: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: 'xl',
  },
};

export const Outline: Story = {
  args: {
    children: 'Кнопка обводка',
    variant: 'outline',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Кнопка обводка темная',
    variant: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareS: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 's',
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'm',
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'l',
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Дисаблет',
    size: 'l',
    disabled: true,
  },
};

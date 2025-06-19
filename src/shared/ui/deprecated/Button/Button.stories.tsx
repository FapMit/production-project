import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Button',
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
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Текст',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const DefaultS: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: ButtonSize.S,
  },
};

export const DefaultM: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: ButtonSize.M,
  },
};

export const DefaultL: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: ButtonSize.L,
  },
};

export const DefaultXL: Story = {
  args: {
    children: 'Стандартная кнопка',
    size: ButtonSize.XL,
  },
};

export const Outline: Story = {
  args: {
    children: 'Кнопка обводка',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Кнопка обводка темная',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Нормал',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Инверт',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.S,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.XL,
  },
};

export const SquareDarkS: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
  },
};

export const SquareDarkM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareDarkL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareDarkXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Дисаблет',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    disabled: true,
  },
};

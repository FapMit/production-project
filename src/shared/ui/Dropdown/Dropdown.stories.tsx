import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from '../Button/Button';

const meta = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    items: [
      {
        content: 'Первый элемент'
      },
      {
        content: 'Второй элемент',
        disabled: true
      },
      {
        content: 'Третий элемент'
      }
    ],
    trigger: <Button theme={ButtonTheme.BACKGROUND}>{'Выпадающее меню'}</Button>
  },
};

export const Dark: Story = {
  args: {
    items: [
      {
        content: 'Первый элемент'
      },
      {
        content: 'Второй элемент',
        disabled: true
      },
      {
        content: 'Третий элемент'
      }
    ],
    trigger: <Button theme={ButtonTheme.BACKGROUND}>{'Выпадающее меню'}</Button>
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};
export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
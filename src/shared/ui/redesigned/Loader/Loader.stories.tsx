import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightS: Story = {
  args: {
    size: 's',
  },
};

export const LightM: Story = {
  args: {
    size: 'm',
  },
};

export const LightL: Story = {
  args: {
    size: 'l',
  },
};

export const LightXL: Story = {
  args: {
    size: 'xl',
  },
};

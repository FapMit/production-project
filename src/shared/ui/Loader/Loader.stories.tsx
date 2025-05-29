import type { Meta, StoryObj } from '@storybook/react';

import { Loader, LoaderSize } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'Shared/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
} satisfies Meta<typeof Loader>;

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

export const LightS: Story = {
  args: {
    size: LoaderSize.S
  },
};

export const LightM: Story = {
  args: {
    size: LoaderSize.M
  },
};

export const LightL: Story = {
  args: {
    size: LoaderSize.L
  },
};

export const LightXL: Story = {
  args: {
    size: LoaderSize.XL
  },
};
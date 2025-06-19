import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleAndDescriptionLight: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
  },
};

export const TitleAndDescriptionDark: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorLight: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    theme: TextTheme.ERROR,
  },
};
export const ErrorDark: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleLight: Story = {
  args: {
    title: 'Title title title',
  },
};

export const onlyTitleDark: Story = {
  args: {
    title: 'Title title title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyDescriptionLight: Story = {
  args: {
    text: 'Text text text',
  },
};

export const onlyDescriptionDark: Story = {
  args: {
    text: 'Text text text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: TextSize.S,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: TextSize.L,
  },
};

export const SizeXL: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: TextSize.XL,
  },
};

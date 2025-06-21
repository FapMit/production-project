import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from './Text';

const meta = {
  title: 'Redesigned/Shared/Text',
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

export const AccentLight: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    variant: 'accent',
  },
};

export const AccentDark: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    variant: 'accent',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorLight: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    variant: 'error',
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    variant: 'error',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: 's',
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: 'l',
  },
};

export const SizeXL: Story = {
  args: {
    title: 'Title title title',
    text: 'Text text text',
    size: 'xl',
  },
};

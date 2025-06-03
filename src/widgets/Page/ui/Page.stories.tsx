import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import i18n from '@/shared/config/i18n/i18n';

const meta = {
  title: 'Shared/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <div>{i18n.t('Page content')}</div>
  },
};

export const Dark: Story = {
  args: {
    children: <div>{i18n.t('Page content')}</div>
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const profileData = {
  email: 'admin@admin.admin',
  age: 22,
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.USD,
  firstname: 'Admin',
  lastname: 'Adminov',
}

export const Light: Story = {
  args: {
    data: profileData,
  },
};

export const Dark: Story = {
  args: {
    data: profileData,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithoutData: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CanChange: Story = {
  args: {
    data: profileData,
    readonly: false
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
  args: {
    error: 'error',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
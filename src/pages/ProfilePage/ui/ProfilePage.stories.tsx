import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  email: 'admin@admin.admin',
  age: 22,
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.USD,
  firstname: 'Admin',
  lastname: 'Adminov',
};

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: data,
        readonly: true,
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: data,
        readonly: true,
      },
    }),
  ],
};

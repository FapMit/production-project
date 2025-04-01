import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  parameters: {

    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSuccess: () => { }
  },
  decorators: [StoreDecorator({
    loginForm: { email: 'admin', password: '123' }
  })]
};

export const withError: Story = {
  args: {
    onSuccess: () => { }
  },
  decorators: [StoreDecorator({
    loginForm: { email: 'admin', password: '123', error: 'Ошибка' }
  })]
};

export const loading: Story = {
  args: {
    onSuccess: () => { }
  },
  decorators: [StoreDecorator({
    loginForm: { email: 'admin', password: '123', isLoading: true }
  })]
};
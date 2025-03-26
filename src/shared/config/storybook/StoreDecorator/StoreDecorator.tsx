import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StorePorvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story: () => StoryFn) => {
  return (
    <StorePorvider initialState={state}>
      {story()}
    </StorePorvider>
  )
};
import { StoryFn } from '@storybook/react';
import { StateSchema, StorePorvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (story: () => StoryFn) => {
  return (
    <StorePorvider initialState={state} asyncReducers={{...defaultAsyncReducer, ...asyncReducers}}>
      {story()}
    </StorePorvider>
  )
};
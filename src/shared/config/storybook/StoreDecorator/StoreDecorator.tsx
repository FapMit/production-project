import { StoryFn } from '@storybook/react';
import { StateSchema, StorePorvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
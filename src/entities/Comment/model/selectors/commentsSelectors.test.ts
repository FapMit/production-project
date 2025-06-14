import { StateSchema } from '@/app/providers/StoreProvider';
import { getCommentError, getCommentText } from './commentsSelectors';

describe('articleCommentsSelectors', () => {
  test('getCommentText', () => {
    const state: DeepPartial<StateSchema> = {
      comments: {
        text: 'test comment',
      },
    };
    expect(getCommentText(state as StateSchema)).toEqual('test comment');
  });

  test('getCommentError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentError(state as StateSchema)).toEqual(undefined);
  });
});

import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormText, getAddCommentFormError } from "./addCommentFormSelectors";

describe('addCommentFormSelectors', () => {
  test('getAddCommentFormText', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'test comment'
      }
    }
    expect(getAddCommentFormText(state as StateSchema)).toEqual('test comment');
  })

  test('getAddCommentFormError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  })
});
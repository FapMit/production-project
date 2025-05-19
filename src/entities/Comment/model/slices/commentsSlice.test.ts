import { CommentsSchema } from "../types/commentsSchema";
import { commentActions, commentReducer } from "./commentsSlice";

describe('commentsSlice', () => {
  test('test set text', () => {
    const state: DeepPartial<CommentsSchema> = { text: 'text 1' };
    expect(commentReducer(
      state as CommentsSchema,
      commentActions.setText('change text')
    )).toEqual({ text: 'change text' })
  })
});
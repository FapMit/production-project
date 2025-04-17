import { AddCommentFormSchema } from "../types/addCommentFormSchema";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";

describe('addCommentFormSlice', () => {
  test('test set text', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'text 1' };
    expect(addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setText('change text')
    )).toEqual({ text: 'change text' })
  })
});
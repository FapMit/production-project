import { buildSlice } from "@/shared/lib/store";
import { PayloadAction } from "@reduxjs/toolkit";
import { CommentsSchema } from "../types/commentsSchema";

const initialState: CommentsSchema = {
  text: "",
}

export const commentSlice = buildSlice({
  name: "Comment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: commentActions, reducer: commentReducer, useActions: useCommentActions } = commentSlice;
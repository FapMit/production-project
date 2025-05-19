import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentsSchema } from "../types/commentsSchema";

const initialState: CommentsSchema = {
  text: "",
}

export const commentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
import { StateSchema } from "@/app/providers/StoreProvider";
import { buildSelector } from "@/shared/lib/store";

export const [useCommentText, getCommentText] = buildSelector((state: StateSchema) => state.comments?.text ?? '')
export const [useCommentError, getCommentError] = buildSelector((state: StateSchema) => state.comments?.error)

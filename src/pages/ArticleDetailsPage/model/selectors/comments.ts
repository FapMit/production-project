import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.coments.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.coments.error;
import { rtkApi } from '@/shared/api/rtkApi';

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleComments: build.query({
      query: (articleId) => ({
        url: '/comments',
        params: {
          articleId,
          _expand: 'user'
        }
      }),
    }),
    addArticleComment: build.mutation({
      query: (body) => ({
        url: '/comments',
        method: 'POST',
        body
      })
    })
  })
})

export const useArticleComments = commentsApi.useGetArticleCommentsQuery;
export const useAddArticleComment = commentsApi.useAddArticleCommentMutation;

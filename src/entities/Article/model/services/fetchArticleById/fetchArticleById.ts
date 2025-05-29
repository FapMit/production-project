import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18n';
import { Article } from '../../types/Article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>(
  'articles/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      if (!articleId) throw new Error('');
      
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(i18n.t('error'));
    }
  }
)
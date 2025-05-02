import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType } from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkAPI) => {
      const { rejectWithValue, extra, getState } = thunkAPI;
      const limit = getArticlesPageLimit(getState());
      const order = getArticlesPageOrder(getState());
      const sort = getArticlesPageSort(getState());
      const search = getArticlesPageSearch(getState());
      const type = getArticlesPageType(getState());
      const page = getArticlesPageNum(getState());

      try {
        addQueryParams({ sort, order, search, type });
        const response = await extra.api.get<Article[]>(`/articles`, {
          params: {
            _expand: 'user',
            _limit: limit,
            _page: page,
            _sort: sort,
            _order: order,
            type: type === ArticleType.ALL ? undefined : type,
            q: search
          }
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(i18n.t('error'));
      }
    }
  )
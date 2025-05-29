import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchArticleById } from './fetchArticleById';

const formData = {
  email: 'admin@admin.admin',
  age: 22,
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.USD,
  firstname: 'Admin',
  lastname: 'Adminov',
}

describe('fetchArticleById', () => {

  test('success', async () => {

    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: formData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(formData);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('123');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
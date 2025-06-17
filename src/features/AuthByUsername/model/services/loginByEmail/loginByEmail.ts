import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  User,
  LoginByEmailProps,
  ThunkConfig<string>
>('login/loginByEmail', async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue('Вы ввели неверный логин или пароль');
  }
});

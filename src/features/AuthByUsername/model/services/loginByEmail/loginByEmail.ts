import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByEmailProps {
  email: string, 
  password: string
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, {rejectValue: string}>(
  'login/loginByEmail',
  async (authData, thunkAPI) => {
    try {
      console.log(authData);
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  }
)
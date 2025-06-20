import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import i18n from '@/shared/config/i18n/i18n';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
  }
});

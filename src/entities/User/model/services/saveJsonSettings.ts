import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18n';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { rejectWithValue, getState, dispatch } = thunkAPI;
  const uesrData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  if (!uesrData) {
    return rejectWithValue(i18n.t('error'));
  }

  try {
    const response = await dispatch(setJsonSettingsMutation(
      {
        userId: uesrData.id,
        jsonSettings: { ...currentSettings, ...newJsonSettings }
      }
    )).unwrap();
    if (!response.jsonSettings) {
      return rejectWithValue(i18n.t('error'));
    }
    return response.jsonSettings;
  } catch (error) {
    console.error(error);
    return rejectWithValue(i18n.t('error'));
  }
});

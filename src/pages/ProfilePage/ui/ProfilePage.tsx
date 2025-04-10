import { 
  fetchProfileData, 
  getProfileError, 
  getProfileForm, 
  getProfileIsLoading, 
  getProfileReadonly, 
  getProfileValidateErrors, 
  profileActions, 
  profileReducer, 
  ValidateProfileError 
} from "entities/Profile";
import { ProfileCard } from "entities/Profile/ui/ProfileCard/ProfileCard";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Text, TextTheme } from "shared/ui/Text/Text";

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()


  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_EMAIL]: t('Некорректный почтовый адрес'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }))
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(value || '') && value != '') return;
    if (value === '') {
      dispatch(profileActions.updateProfile({ age: 0 }))
    }
    else {
      dispatch(profileActions.updateProfile({ age: Number(value) }))
    }
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch]);

  const onChangeEmail = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ email: value || '' }))
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: currency }))
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country: country }))
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text 
            key={err} 
            theme={TextTheme.ERROR} 
            text={validateErrorTranslates[err]}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeEmail={onChangeEmail}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
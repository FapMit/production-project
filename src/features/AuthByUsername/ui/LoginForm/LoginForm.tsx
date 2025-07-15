import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import {
  Loader as LoaderDeprecated,
  LoaderSize,
} from '@/shared/ui/deprecated/Loader';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByEmail({ email, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, email, onSuccess, password]);

  const Deprecated = (
    <DynamicModuleLoader
      removeAfterUnmount={true}
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <div className={cls.LoginHead}>
          <TextDeprecated title={t('Форма авторизации')} />
          {isLoading && <LoaderDeprecated size={LoaderSize.S} />}
        </div>
        {error && (
          <TextDeprecated
            text={error}
            theme={TextTheme.ERROR}
          />
        )}
        <InputDeprecated
          placeholder={t('Введите логин')}
          className={cls.input}
          type="text"
          autoFocus
          onChange={onChangeLogin}
          value={email}
        />
        <InputDeprecated
          placeholder={t('Введите пароль')}
          className={cls.input}
          type="text"
          onChange={onChangePassword}
          value={password}
        />
        <ButtonDeprecated
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </ButtonDeprecated>
      </div>
    </DynamicModuleLoader>
  );

  const Redesigned = (
    <DynamicModuleLoader
      removeAfterUnmount={true}
      reducers={initialReducers}
    >
      <VStack
        className={classNames(cls.LoginForm, {}, [className])}
        gap="16"
      >
        <HStack justify="between">
          <Text title={t('Форма авторизации')} />
          {isLoading && <Loader size="s" />}
        </HStack>
        {error && (
          <Text
            text={error}
            variant="error"
          />
        )}
        <Input
          placeholder={t('Введите логин')}
          type="text"
          onChange={onChangeLogin}
          value={email}
          autoFocus
        />
        <Input
          placeholder={t('Введите пароль')}
          type="text"
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          variant="outline"
          rounded
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </VStack>
    </DynamicModuleLoader>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={Redesigned}
      off={Deprecated}
    />
  );
});

export default LoginForm;

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByEmail } from "../../model/services/loginByEmail/loginByEmail";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Loader, LoaderSize } from "shared/ui/Loader/Loader";
import { getLoginEmail } from "../../model/selectors/getLoginEmail/getLoginEmail";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByEmail({ email, password }))
  }, [dispatch, email, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers} >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <div className={cls.LoginHead}>
          <Text title={t("Форма авторизации")} />
          {isLoading && <Loader size={LoaderSize.S} />}
        </div>
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          placeholder={t('Введите логин')}
          className={cls.input}
          type="text"
          autoFocus
          onChange={onChangeLogin}
          value={email}
        />
        <Input
          placeholder={t('Введите пароль')}
          className={cls.input}
          type="text"
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
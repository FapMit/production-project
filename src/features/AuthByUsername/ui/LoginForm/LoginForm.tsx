import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByEmail } from "../../model/services/loginByEmail/loginByEmail";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Loader, LoaderSize } from "shared/ui/Loader/Loader";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {email, password, error, isLoading} = useSelector(getLoginState);

  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  },[dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByEmail({email, password}))
  }, [dispatch, email, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.loginHead}>
        <Text title={t("Форма авторизации")}/>
        {isLoading && <Loader size={LoaderSize.S}/>}
      </div>
      {error && <Text text={error} theme={TextTheme.ERROR}/>}
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
  );
});
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Введите логин')}
        className={cls.input}
        type="text"
        autoFocus
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
      >
        {t("Войти")}
      </Button>
    </div>
  );
}
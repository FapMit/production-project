import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/ThemeProvider";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const {t} = useTranslation();
  const { theme } = useTheme();

  const reloadPage = () => {
    location.reload();
  }

  return ( 
    <div className={classNames('app', {}, [theme])}>
      <div className={classNames(cls.PageError, {}, [className])}>
        <p>{t("Произошла непредвиденная ошибка")}</p>
        <Button onClick={reloadPage} theme={ThemeButton.OUTLINE}>
          {t("Обновить страницу")}
        </Button>
      </div>
    </div>
  );
}
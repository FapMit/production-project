import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

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
        <Button onClick={reloadPage}
          theme={ButtonTheme.OUTLINE}>
          {t("Обновить страницу")}
        </Button>
      </div>
    </div>
  );
}
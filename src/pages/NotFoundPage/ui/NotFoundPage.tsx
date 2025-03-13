import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const {t} = useTranslation('notFoundPage');

  return ( 
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <p>{t('Страница не найдена!')}</p>
    </div>
  );
}

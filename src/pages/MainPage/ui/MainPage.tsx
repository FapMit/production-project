import { useTranslation } from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('mainPage')

  return ( 
    <div className="MainPage">
      <h1>{t('Главная страница')}</h1>
    </div>
  );
}

export default MainPage;
import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('mainPage')

  return ( 
    <div className="MainPage">
      <h1>{t('Главная страница')}</h1>
      <BugButton/>
    </div>
  );
}

export default MainPage;
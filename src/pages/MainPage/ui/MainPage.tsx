import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const {t} = useTranslation('mainPage')

  return ( 
    <Page className="MainPage">
      <h1>{t('Главная страница')}</h1>
      <BugButton/>
    </Page>
  );
}

export default MainPage;
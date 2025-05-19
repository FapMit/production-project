import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation('mainPage')

  return (
    <Page className="MainPage">
      <h1>{t('Главная страница')}</h1>
      <HStack>
        <BugButton />
      </HStack>
    </Page>
  );
}

export default MainPage;
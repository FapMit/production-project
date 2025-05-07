import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation('mainPage')

  return (
    <Page className="MainPage">
      <h1>{t('Главная страница')}</h1>
      <HStack>
        <BugButton />
        <ListBox
          defaultValue={'Выберите значение'}
          items={[
            { value: '1', content: 'Первый элемент' },
            { value: '2', content: 'Второй элемент' },
            { value: '3', content: 'Третий элемент' },
          ]}
          onChange={(value: string)=>{}}
          value={undefined}
        />
      </HStack>
    </Page>
  );
}

export default MainPage;
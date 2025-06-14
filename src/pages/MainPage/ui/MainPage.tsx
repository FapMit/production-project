import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <Page
      className='MainPage'
      data-testid='MainPage'>
      <h1>{t('Главная страница')}</h1>
    </Page>
  );
};

export default MainPage;

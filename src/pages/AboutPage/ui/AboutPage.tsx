import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page
      className="AboutPage"
      data-testid="AboutPage"
    >
      <h1>{t('О сайте')}</h1>
    </Page>
  );
};

export default AboutPage;

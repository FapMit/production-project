import { StoryFn } from '@storybook/react/*';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../i18n/i18nForTests';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TranslationDecorator = (StoryComponent: StoryFn, context: any) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18nForTests.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback=''>
      <I18nextProvider i18n={i18nForTests}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};

i18nForTests.on('languageChanged', (locale) => {
  const direction = i18nForTests.dir(locale);
  document.dir = direction;
});

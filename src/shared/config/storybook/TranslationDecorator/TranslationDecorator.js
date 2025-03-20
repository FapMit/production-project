import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";

export const TranslationDecorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18nForTests.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback=''>
      <I18nextProvider i18n={i18nForTests}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

i18nForTests.on("languageChanged", (locale) => {
  const direction = i18nForTests.dir(locale);
  document.dir = direction;
});

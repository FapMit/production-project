import { Suspense } from 'react'
import { StoryFn } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export const TranslationDecorator = (story: () => StoryFn) => (

  <Suspense fallback="">
    <I18nextProvider i18n={i18nForTests}>
      {story()} 
    </I18nextProvider>
  </Suspense>
)
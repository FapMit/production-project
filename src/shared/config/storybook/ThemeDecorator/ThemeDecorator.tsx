import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}> 
        {story()}
      </div>
    </ThemeProvider>
  )
};
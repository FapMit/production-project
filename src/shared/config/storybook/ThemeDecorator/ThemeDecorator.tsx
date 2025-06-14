// eslint-disable-next-line test-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};

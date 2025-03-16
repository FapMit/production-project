/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => {
  return (
    <div className={`app ${theme}`}> 
      {story()}
    </div>
  )
};
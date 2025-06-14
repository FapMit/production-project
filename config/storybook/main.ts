import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-queryparams',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-mock/register',
    'storybook-addon-useragent',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react-webpack5',
  staticDirs: ['../../public'],
};

export default config;

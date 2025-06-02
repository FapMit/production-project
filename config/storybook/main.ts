import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-queryparams",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-mock/register',
    'storybook-addon-useragent',
  ],
  "framework": "@storybook/react-webpack5",
  staticDirs: ["../../public"],
};

export default config;
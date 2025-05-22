import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-mock',
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {
    }
  },
  staticDirs: ["../../public"],
};
export default config;
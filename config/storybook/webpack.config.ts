/* eslint-disable @typescript-eslint/no-unused-expressions */
import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({config}: {config: webpack.Configuration}) => {

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  }

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    ? config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    })
    : '';
  
  config.module?.rules?.push(buildSvgLoader())
  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('localhost:8000'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
}
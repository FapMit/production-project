import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';
import testPlugin from '@fapmit/eslint-plugin-test-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
      },
    },
    plugins: {
      pluginJs: pluginJs,
      'react-hooks': reactHooks,
      react: pluginReact,
      i18next: i18next,
      'test-plugin': testPlugin,
      'unused-imports': unusedImports,
      'eslint-plugin-prettier': eslintPluginPrettierRecommended,
      '@stylistic': stylistic,
    },

    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: 2 }],
      // indent: ['error', 2],
      // "react/jsx-indent": [2, 2],
      // "react/jsx-indent-props": [2, 2],
      // "max-len": ["error", { code: 200, ignoreComments: true }],
      'react/react-in-jsx-scope': 'off',
      'react/no-deprecated': 0,
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.tsx', '.jsx', '.js'] },
      ],
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: false,
          ignoreAttribute: ['data-testid', 'to', '_target'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'test-plugin/path-cheker': ['error', { alias: '@' }],
      'test-plugin/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: ['**/*.test.*', '**/StoreDecorator.tsx'],
        },
      ],
      'test-plugin/layer-imports': [
        'error',
        {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
];

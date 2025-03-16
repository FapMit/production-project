import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __IS_DEV__: true,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs["flat/recommended"],
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-deprecated": 0,
      "react/jsx-filename-extension": [
        2,
        { extensions: [".tsx", ".jsx", ".js"] },
      ],
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      indent: [2, 2],
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      "no-underscore-dangle": "off",
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: false,
          ignoreAttribute: ["data-testid", "to"],
        },
      ],
      "max-len": ["error", { code: 120, ignoreComments: true }],
    },
  },
  {
    files: ["**/src/**/*.test.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
];

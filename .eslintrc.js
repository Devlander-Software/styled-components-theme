/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  globals: {
    console: true,
    window: true,
  },
  ignorePatterns: [
    "rollup.config.mjs",
    "get-latest-bundle.js",
    "examples/packages/**/*",
    "examples/**/*/tsconfig.json",
    "*/**/babel.config.js",
    "examples/**/*/src",
    "types/**/*.d.ts",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.eslint.json'),
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
  ],
  plugins: [
    "promise",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "import/imports-first": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "comma-dangle": [
      "warn",
      {
        imports: "never",
        exports: "never",
      },
    ],
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off",
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "no-var": "warn",
    "no-throw-literal": "off",
    "no-unreachable": "warn",
    "import/no-anonymous-default-export": "off",
    "no-eq-null": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "promise/always-return": "warn",
    "promise/no-return-wrap": "warn",
    "promise/param-names": "warn",
    "promise/catch-or-return": ["warn", { allowFinally: true }],
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "off",
    "promise/no-new-statics": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
  },
  overrides: [
    {
      files: [
        "src/**/*.tsx",
        "src/**/*.ts",
        "!rollup-config/webpack.config.js",
      ],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: "variable", format: ["camelCase", "PascalCase"] },
        ],
      },
    },
    {
      files: ["**/*/webpack.config.js"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "snake_case"],
          },
        ],
      },
    },
  ],
  env: {
    node: true,
  },
};

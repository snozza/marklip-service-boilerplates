module.exports = {
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "import"
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "quotes": ["error", "single"],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    //"import/no-default-export": "error",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "@typescript-eslint/no-unused-vars": ["off", { "argsIgnorePattern": "^_" }],
    // Common abbreviations are known and readable
    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow `require()`
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

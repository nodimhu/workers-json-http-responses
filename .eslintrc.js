export default {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint", "unused-imports"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-case-declarations": "off",
    "no-empty": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["/dist"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  env: {
    browser: false,
    es2022: true,
    node: true,
  },
};

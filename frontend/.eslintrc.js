module.exports = {
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["jest", "react", "@typescript-eslint", "prettier"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
  },
  ignorePatterns: [".eslintrc.js"],
  env: {
    "jest/globals": true,
  },
};

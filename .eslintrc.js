module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `react-app`,
    "prettier/flowtype",
    "prettier/react",
    `airbnb`,
    `plugin:prettier/recommended`,
    "plugin:cypress/recommended",
  ],
  plugins: [`cypress`, `prettier`],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
      },
      {
        usePrettierrc: false,
      },
    ],
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "react/prop-types": 1,
    // "trailingComma": 1,
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
  },
  settings: {
    "import/core-modules": [
      "gatsby",
      "prop-types",
      "dotenv",
      "@reach/router",
      "slash",
    ],
  },
};

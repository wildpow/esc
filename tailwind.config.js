const { screens } = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

module.exports = {
  theme: {
    screens: {
      xms: "400px",
      phablet: "550px",
      ...screens,
    },
    fontFamily: {
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Roboto Slab",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeIn: `fadeIn 0.35s linear normal`,
      },
      colors: {
        brandRed: "#9b2c2c",
        brandBlue: "#2c5282",
      },
    },
  },
  plugins: [typography],
};

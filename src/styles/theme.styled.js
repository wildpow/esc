import { keyframes, css } from "@emotion/react";

export const colors = {
  transparent: "transparent",
  current: "currentColor",
  brandRed: "#9b2c2c",
  brandBlue: "#2c5282",
  black: "#000",
  white: "#fff",

  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
  red: {
    100: "#fff5f5",
    200: "#fed7d7",
    300: "#feb2b2",
    400: "#fc8181",
    500: "#f56565",
    600: "#e53e3e",
    700: "#c53030",
    800: "#9b2c2c",
    900: "#742a2a",
  },
  orange: {
    100: "#fffaf0",
    200: "#feebc8",
    300: "#fbd38d",
    400: "#f6ad55",
    500: "#ed8936",
    600: "#dd6b20",
    700: "#c05621",
    800: "#9c4221",
    900: "#7b341e",
  },
  yellow: {
    100: "#fffff0",
    200: "#fefcbf",
    300: "#faf089",
    400: "#f6e05e",
    500: "#ecc94b",
    600: "#d69e2e",
    700: "#b7791f",
    800: "#975a16",
    900: "#744210",
  },
  green: {
    100: "#f0fff4",
    200: "#c6f6d5",
    300: "#9ae6b4",
    400: "#68d391",
    500: "#48bb78",
    600: "#38a169",
    700: "#2f855a",
    800: "#276749",
    900: "#22543d",
  },
  teal: {
    100: "#e6fffa",
    200: "#b2f5ea",
    300: "#81e6d9",
    400: "#4fd1c5",
    500: "#38b2ac",
    600: "#319795",
    700: "#2c7a7b",
    800: "#285e61",
    900: "#234e52",
  },
  blue: {
    100: "#ebf8ff",
    200: "#bee3f8",
    300: "#90cdf4",
    400: "#63b3ed",
    500: "#4299e1",
    600: "#3182ce",
    700: "#2b6cb0",
    800: "#2c5282",
    900: "#2a4365",
  },
  indigo: {
    100: "#ebf4ff",
    200: "#c3dafe",
    300: "#a3bffa",
    400: "#7f9cf5",
    500: "#667eea",
    600: "#5a67d8",
    700: "#4c51bf",
    800: "#434190",
    900: "#3c366b",
  },
  purple: {
    100: "#faf5ff",
    200: "#e9d8fd",
    300: "#d6bcfa",
    400: "#b794f4",
    500: "#9f7aea",
    600: "#805ad5",
    700: "#6b46c1",
    800: "#553c9a",
    900: "#44337a",
  },
  pink: {
    100: "#fff5f7",
    200: "#fed7e2",
    300: "#fbb6ce",
    400: "#f687b3",
    500: "#ed64a6",
    600: "#d53f8c",
    700: "#b83280",
    800: "#97266d",
    900: "#702459",
  },
};

export const boxShadow = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none",
};

export const radius = {
  default: 2,
  large: 4,
};
export const rounded = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};
export const dimensions = {
  headerHeight: "60px",
  cartWidthDesktop: "515px",
};

export const breakpoints = {
  xsm: "400px",
  phablet: "550px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const spacing = {
  px: "1px",
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

export const fonts = {
  sans: "'Roboto', sans-serif",
  serif: "'Roboto Slab', serif",
};

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const FadeInAnimation = css`
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: ${FadeIn};
`;

export const boxShadowHover = css`
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
      0px 8px 16px rgba(71, 63, 79, 0.16);
  }
`;

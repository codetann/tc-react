import { ThemeProvider } from "styled-components";

const text = {
  size: {
    font: {
      sm: ".5rem",
      md: "1rem",
      lg: "2rem",
      xl: "3rem",
    },
  },
  color: {
    black: "#000",
    white: "#fff",
    gray: {
      light: "#f8f8f8",
      medium: "#e8e8e8",
      dark: "#b8b8b8",
    },
  },
};

const fontSizes = {
  xs: ".7rem",
  sm: "0.8rem",
  md: "1rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
  xxxl: "5rem",
};

const colors = {
  black: "#000",
  gray: {
    100: "#f8f8f8",
    200: "#e8e8e8",
    300: "#b8b8b8",
    400: "#999",
    500: "#666",
    600: "#333",
  },
};

const spacing = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "3rem",
  xxxl: "4rem",
};

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const screen = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
};

export const theme = {
  colors,
  spacing,
  fontSizes,
  breakpoints,
  screen,
};

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/mainStyles";
import StoreProvider from "./src/provider/StoreProvider";
import WindowDimensionsProvider from "./src/components/context/WindowDimensions";

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <WindowDimensionsProvider>{element}</WindowDimensionsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

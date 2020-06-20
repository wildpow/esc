/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ThemeProvider } from "styled-components";
import WindowDimensionsProvider from "./src/components/context/WindowDimensions";
import { theme } from "./src/styles/mainStyles";
import StoreProvider from "./src/provider/StoreProvider";
import ToastProvider from "./src/components/context/ToastProvider";

require("typeface-roboto-slab");
require("typeface-roboto");

export const wrapRootElement = ({ element }) => {
  return (
    <ToastProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <WindowDimensionsProvider>{element}</WindowDimensionsProvider>
        </ThemeProvider>
      </StoreProvider>
    </ToastProvider>
  );
};

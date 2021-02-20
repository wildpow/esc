/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { ThemeProvider } from "styled-components";
import WindowSizeProvider from "./src/provider/WindowSizeProvider";
import { theme } from "./src/styles/mainStyles";
import StoreProvider from "./src/provider/StoreProvider";
import { ToastProvider } from "./src/components/Toast/ToastProvider";

require("typeface-roboto-slab");
require("typeface-roboto");

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <WindowSizeProvider>{element}</WindowSizeProvider>
        </ToastProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

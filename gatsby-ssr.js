/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/mainStyles";
import StoreProvider from "./src/provider/StoreProvider";
import WindowSizeProvider from "./src/provider/WindowSizeProvider";

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <WindowSizeProvider>{element}</WindowSizeProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

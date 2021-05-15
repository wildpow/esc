/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import WindowSizeProvider from "./src/contexts/WindowSize.ctx";
import StoreProvider from "./src/contexts/Store.ctx";

export const wrapRootElement = ({ element }) => (
  <WindowSizeProvider>
    <StoreProvider>{element}</StoreProvider>
  </WindowSizeProvider>
);

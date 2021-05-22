/* eslint-disable import/prefer-default-export */
import "@fontsource/roboto";
import "@fontsource/roboto/300.css"; // footer brand_text
import "@fontsource/roboto/500.css"; // footer
import "@fontsource/roboto/700.css"; // Contact-us h2 -
import "@fontsource/roboto/900.css"; // logo
import "@fontsource/roboto/900-italic.css"; // logo
import "@fontsource/roboto-slab";
import "@fontsource/roboto-slab/300.css"; // warrant-p
import "@fontsource/roboto-slab/700.css"; // Header mattress list
import WindowSizeProvider from "./src/contexts/WindowSize.ctx";
import StoreProvider from "./src/contexts/Store.ctx";

export const wrapRootElement = ({ element }) => (
  <WindowSizeProvider>
    <StoreProvider>{element}</StoreProvider>
  </WindowSizeProvider>
);

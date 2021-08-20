/* eslint-disable import/prefer-default-export */

import WindowSizeProvider from "./src/contexts/WindowSize.ctx";
import StoreProvider from "./src/contexts/Store.ctx";
import CartProvider from "./src/contexts/InterfaceContext.ctx";

export const wrapRootElement = ({ element }) => (
  <WindowSizeProvider>
    <StoreProvider>
      <CartProvider>{element}</CartProvider>
    </StoreProvider>
  </WindowSizeProvider>
);

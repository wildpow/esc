/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import WindowSizeProvider from "./src/provider/WindowSizeProvider";
import { theme } from "./src/styles/mainStyles";
import StoreProvider from "./src/provider/StoreProvider";

require("typeface-roboto-slab");
require("typeface-roboto");

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <WindowSizeProvider>{element}</WindowSizeProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export const onInitialClientRender = async (_, pluginOptions = {}) => {
  const { showInProduction, axeOptions, axeContext, delay } = {
    showInProduction: false,
    axeOptions: {},
    axeContext: undefined,
    delay: 8000,
    ...pluginOptions,
  };

  if (process.env.NODE_ENV === "development" || showInProduction) {
    const { default: axe } = await import("react-axe");
    axe(React, ReactDOM, delay, axeOptions, axeContext);
  }
};

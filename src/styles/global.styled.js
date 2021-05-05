import React from "react";
import { createGlobalStyles } from "goober/global";
import { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyles`
.headroom {
  z-index: 2 !important;
}

body {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
@media print {
  #bf-revz-widget-1484606125{
    display: none !important;
  }
`;
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;

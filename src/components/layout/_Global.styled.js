import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html {
  box-sizing: border-box;
  
}
html
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

@media print {
  #bf-revz-widget-1484606125{
    display: none;
  }
}
`;

export default GlobalStyle;

// import styledNormalize from "styled-normalize";
import { css } from "@emotion/react";

// ${styledNormalize}
const GlobalStyle = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .headroom {
    z-index: 2 !important;
  }

  body {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  @media print {
    #bf-revz-widget-3489535582 {
      display: none !important;
    }
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

export default GlobalStyle;

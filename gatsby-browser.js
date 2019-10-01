/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/mainStyles";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  console.log(props);
  return <Layout {...props}>{element}</Layout>;
};
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// exports.replaceComponentRenderer = ({ props, component }) => {
//   console.log({ props, component });
//   return (
//     <Layout>
//       <ThemeProvider theme={theme}>
//         {React.createElement(component, props)}
//       </ThemeProvider>
//     </Layout>
//   );
// };

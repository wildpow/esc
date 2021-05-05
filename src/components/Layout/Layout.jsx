import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/global.styled";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

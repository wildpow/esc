import React from "react";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled, theme } from "twin.macro";
import Headroom from "react-headroom";
import StoreProvider from "../../contexts/Store.ctx";

import GlobalStyles from "../../styles/global.styled";
import Header from "./Header";

const MainRoot = styled("main")`
  z-index: 10;
  width: 100%;
  box-shadow: ${theme`boxShadow.2xl`};
  background-color: ${({ whiteBackground }) =>
    whiteBackground ? "white" : theme`colors.blueGray.50`};
  .layout__content {
    margin: 0 auto;
    max-width: ${theme`screens.2xl`};
  }
`;
export default function Layout({ children, whiteBackground }) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [pin, setpen] = useState(true);

  return (
    <StoreProvider>
      <GlobalStyles />
      <Headroom
        pinStart={-1}
        onPin={() => setpen(true)}
        onUnpin={() => setpen(false)}
      >
        <Header
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
          pin={pin}
        />
      </Headroom>
      <MainRoot>
        <div className="layout__content">{children}</div>
      </MainRoot>
    </StoreProvider>
  );
}
Layout.defaultProps = {
  whiteBackground: false,
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  whiteBackground: PropTypes.bool,
};

import { useState } from "react";
import PropTypes from "prop-types";
import Headroom from "react-headroom";
import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GlobalStyle from "../../styles/global.styled";
import { breakpoints } from "../../styles/theme.styled";

export default function Layout({ children }) {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Headroom
        onPin={() => setHeaderVisible(true)}
        onUnpin={() => setHeaderVisible(false)}
        pinStart={-1}
      >
        <Header
          headerVisible={headerVisible}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
      </Headroom>
      <div style={{ margin: "0 auto", maxWidth: breakpoints["2xl"] }}>
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FocusLockUI from "react-focus-lock/UI";
import { sidecar } from "use-sidecar";
import Headroom from "react-headroom";
import GlobalStyle from "./_Global.styled";
import Header from "./_Header";
import Cart from "./_Cart";
import MobileMenu from "./_MobileMenu";
import PageContent from "./_PageContent";
import useOnClickOutside from "../Hooks/use-onClick-outside";
import useKeyboardEvent from "../Hooks/use-keyboard-event";
import { useWindowDimensions } from "../context/WindowDimensions";

const MainRoot = styled.div`
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  padding-right: ${({ cartStatus, menuStatus }) =>
    cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"};
`;

function Layout({ children }) {
  const node = useRef();
  const [cartStatus, setCartStatus] = useState("closed");
  const [menuStatus, setMenuStatus] = useState("closed");
  function menuToggle(e) {
    e.preventDefault();
    if (menuStatus !== "open") {
      setMenuStatus("open");
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = "15px";
    } else {
      setMenuStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }
  }
  function cartToggle(e) {
    e.preventDefault();
    if (cartStatus !== "open") {
      setCartStatus("open");
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = "15px";
    } else {
      setCartStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }
  }
  useOnClickOutside(node, () => {
    setCartStatus("closed");
    setMenuStatus("closed");
    document.body.style.overflow = "visible";
  });
  useKeyboardEvent("Escape", () => {
    setCartStatus("closed");
    setMenuStatus("closed");
    document.body.style.overflow = "visible";
  });

  const FocusLockSidecar = sidecar(() =>
    import(/* webpackPrefetch: true */ "react-focus-lock/sidecar"),
  );
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 1028) {
      setMenuStatus("closed");
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }
  }, [width]);
  const [pin, setpen] = useState(true);
  const menuId = "main-menu";
  return (
    <>
      <GlobalStyle />
      <Headroom onPin={() => setpen(true)} onUnpin={() => setpen(false)}>
        <Header cartStatus={cartStatus} menuStatus={menuStatus} pin={pin} />
      </Headroom>
      <div ref={node}>
        <FocusLockUI
          disabled={cartStatus === "closed"}
          sideCar={FocusLockSidecar}
        >
          <Cart
            status={cartStatus}
            toggle={cartToggle}
            menuStatus={menuStatus}
            pin={pin}
          />
        </FocusLockUI>
        <FocusLockUI
          disabled={menuStatus === "closed"}
          sideCar={FocusLockSidecar}
        >
          <MobileMenu
            id={menuId}
            status={menuStatus}
            toggle={menuToggle}
            cartStatus={cartStatus}
            pin={pin}
          />
        </FocusLockUI>
      </div>
      <PageContent cartStatus={cartStatus} menuStatus={menuStatus}>
        <MainRoot cartStatus={cartStatus} menuStatus={menuStatus}>
          {children}
        </MainRoot>
      </PageContent>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

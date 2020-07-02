import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FocusLockUI from "react-focus-lock/UI";
import { sidecar } from "use-sidecar";
import Headroom from "react-headroom";
import ModalContextProvider from "./modalContext";
import { useOnClickOutside, useKeyboardEvent } from "../Hooks";
import { useWindowDimensions } from "../context/WindowDimensions";
import MenuOverLay from "../shared/MenuOverLay";
import { StructuredDataMain, PageContent, GlobalStyle } from "./Extra";
import { Header, Cart, MobileMenu, Footer } from "./LayoutComponents";

const MainRoot = styled.div`
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  /* padding-right: ${({ cartStatus, menuStatus }) =>
    cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"}; */
`;
function Layout({ children }) {
  const element =
    typeof document !== `undefined`
      ? document.getElementById("bf-revz-widget-1484606125")
      : null;
  const menuId = "main-menu";
  const node = useRef();
  const { width } = useWindowDimensions();
  const [cartStatus, setCartStatus] = useState("closed");
  const [menuStatus, setMenuStatus] = useState("closed");
  const [pin, setpen] = useState(true);
  const [moved, setMoved] = useState("");
  const FocusLockSidecar = sidecar(() =>
    import(/* webpackPrefetch: true */ "react-focus-lock/sidecar"),
  );

  function menuToggle(e) {
    e.preventDefault();
    if (menuStatus !== "open") {
      setMenuStatus("open");
      // document.body.style.paddingRight = "15px";
      document.body.style.overflow = "hidden";
      element.style.visibility = "hidden";
    } else {
      setMenuStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
      element.style.visibility = "visible";
    }
  }

  function cartToggle(e) {
    e.preventDefault();
    if (cartStatus !== "open") {
      setCartStatus("open");
      document.body.style.overflow = "hidden";
      element.style.visibility = "hidden";
      // document.body.style.paddingRight = "15px";
    } else {
      setCartStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
      element.style.visibility = "visible";
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

  useEffect(() => {
    if (width > 1028) {
      setMenuStatus("closed");
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }
  }, [width]);

  useEffect(() => {
    setMoved(cartStatus === "open" || menuStatus === "open" ? "moved" : "");
  }, [cartStatus, menuStatus]);
  return (
    <ModalContextProvider>
      <StructuredDataMain />
      <GlobalStyle />
      <Headroom
        onPin={() => setpen(true)}
        onUnpin={() => setpen(false)}
        pinStart={-1}
      >
        <Header
          moved={moved}
          pin={pin}
          cartStatus={cartStatus}
          menuStatus={menuStatus}
        />
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
      <PageContent moved={moved}>
        <MainRoot cartStatus={cartStatus} menuStatus={menuStatus}>
          {children}
        </MainRoot>
      </PageContent>
      <Footer moved={moved} />
      {menuStatus === "open" || cartStatus === "open" ? <MenuOverLay /> : null}
    </ModalContextProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

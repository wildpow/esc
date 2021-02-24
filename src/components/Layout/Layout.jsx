import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FocusLockUI from "react-focus-lock/UI";
import { sidecar } from "use-sidecar";
import Headroom from "react-headroom";
// import ModalContextProvider from "./ModalContext";
import { useOnClickOutside, useKeyboardEvent, useIntersect } from "../Hooks";
import { useWindowSize } from "../../context/WindowSizeContext";
import MenuOverLay from "../shared/MenuOverLay";
import { StructuredDataMain, PageContent, GlobalStyle } from "./Extra";
import { Footer, MobileMenu, Cart, Header } from "./LayoutComponents";

const MainRoot = styled.div`
  max-width: 1440px;
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
  const { width, height } = useWindowSize();
  const [cartStatus, setCartStatus] = useState("closed");
  const [menuStatus, setMenuStatus] = useState("closed");
  const [searchFocus, setSearchFocus] = useState(false);
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
      element.style.display = "none";
    } else {
      setMenuStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
      element.style.display = "block";
    }
  }

  function cartToggle(e) {
    e.preventDefault();
    if (cartStatus !== "open") {
      setCartStatus("open");
      document.body.style.overflow = "hidden";
      element.style.display = "none";
      // document.body.style.paddingRight = "15px";
    } else {
      setCartStatus("closed");
      // document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
      element.style.display = "block";
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
  const [ref, entry] = useIntersect({ threshold: 0.1 });
  useEffect(() => {
    if (width > 1022) {
      setMenuStatus("closed");
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }
    if (
      entry.isIntersecting &&
      width < 769 &&
      element.style.display === "block"
    ) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
    if (height < 400 && menuStatus === "open") {
      element.style.display = "none";
    }
  }, [width, element, entry, height, menuStatus]);

  useEffect(() => {
    setMoved(cartStatus === "open" || menuStatus === "open" ? "moved" : "");
  }, [cartStatus, menuStatus]);

  useEffect(() => {
    const beforPrint = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("beforeprint", beforPrint);
    return () => {
      window.removeEventListener("beforeprint", beforPrint);
    };
  }, []);
  return (
    <>
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
          cartToggle={cartToggle}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
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
            searchFocus={searchFocus}
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
      <div ref={ref}>
        <Footer moved={moved} />
      </div>
      {menuStatus === "open" || cartStatus === "open" ? <MenuOverLay /> : null}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;

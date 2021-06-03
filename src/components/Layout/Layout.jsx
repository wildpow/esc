import { useState, useRef, useEffect } from "react";
import { styled } from "goober";
import { Global } from "@emotion/react";

import PropTypes from "prop-types";
import FocusLock from "react-focus-lock";
import Headroom from "react-headroom";
import Header from "./Header";
import { useOnClickOutside, useKeyboardEvent, useIntersect } from "../../hooks";
import MobileMenu from "./MobileMenu";
import Cart from "../Cart";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GlobalStyle from "../../styles/global.styled";
import { useWindowSize } from "../../contexts/WindowSize.ctx";
import MenuOverLay from "../../styles/menuOverlay.styled";
import Footer from "./Footer";
import { breakpoints, colors, boxShadow } from "../../styles/theme.styled";
import StructuredDataMain from "./structuredDataMain";

const PageContentRoot = styled("main")`
  position: relative;
  z-index: 1;
  box-shadow: ${boxShadow.xl};
  background-color: ${({ bgWhite }) =>
    bgWhite ? "white" : colors.gray["100"]};

  will-change: transform;
  opacity: 1;
  padding-left: 0;
  width: 100%;
  transition: all 0.75s;

  @media (min-width: ${breakpoints.sm}) {
    transform: translate3d(0vw, 0, 0);
    &.moved {
      /* filter: blur(1px); */
      transform: translate3d(-400px, 0, 0);
    }
  }
  @media print {
    box-shadow: none;
  }
`;
export default function Layout({ children, bgWhite }) {
  const { width, height } = useWindowSize();

  // Birdeye customer chat
  const element =
    typeof document !== `undefined`
      ? document.getElementById("bf-revz-widget-1484606125")
      : null;
  // //////////////////

  // MobileMenu and Cart open/close
  const menuId = "main-menu";
  const [cartStatus, setCartStatus] = useState("closed");
  const [menuStatus, setMenuStatus] = useState("closed");
  const [moved, setMoved] = useState("");

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
  const node = useRef();
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
  // end of logic for cart and mobile menu

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

  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <>
      <Global styles={GlobalStyle} />
      <StructuredDataMain />
      <Headroom
        onPin={() => setHeaderVisible(true)}
        onUnpin={() => setHeaderVisible(false)}
        pinStart={-1}
      >
        <Header
          moved={moved}
          headerVisible={headerVisible}
          cartStatus={cartStatus}
          menuStatus={menuStatus}
          cartToggle={cartToggle}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
      </Headroom>
      <div ref={node}>
        <FocusLock disabled={cartStatus === "closed"}>
          <Cart
            status={cartStatus}
            toggle={cartToggle}
            menuStatus={menuStatus}
            headerVisible={headerVisible}
          />
        </FocusLock>
        <FocusLock disabled={menuStatus === "closed"}>
          <MobileMenu
            searchFocus={searchFocus}
            id={menuId}
            status={menuStatus}
            toggle={menuToggle}
            cartStatus={cartStatus}
            headerVisible={headerVisible}
          />
        </FocusLock>
      </div>
      <PageContentRoot bgWhite={bgWhite} className={moved}>
        <div style={{ margin: "0 auto", maxWidth: breakpoints["2xl"] }}>
          {children}
        </div>
      </PageContentRoot>
      <div ref={ref}>
        <Footer moved={moved} />
      </div>
      {moved === "moved" ? <MenuOverLay /> : null}
    </>
  );
}

Layout.defaultProps = {
  bgWhite: false,
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgWhite: PropTypes.bool,
};

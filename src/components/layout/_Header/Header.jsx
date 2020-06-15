import React from "react";
import { string, bool } from "prop-types";
import styled from "styled-components";
import logo from "../../../images/header/logo2.png";
import { useWindowDimensions } from "../../context/WindowDimensions";
import {
  colors,
  dimensions,
  boxShadow,
  breakpoints,
  spacing,
  fontSize,
  fonts,
} from "../../../utils/styles";
import Nav from "./Nav";
import NavIcons from "./NavIcons";

const HeaderRoot = styled.header`
  right: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-right: ${({ cartStatus, menuStatus }) =>
    cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"};
  box-shadow: ${boxShadow.lg};
  background-color: ${colors.gray["100"]};
  .header__Wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    box-shadow: ${boxShadow.md};
    .header__Wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .header__flex {
      border-top: none;
    }
    h1 {
      padding-left: 6px;
    }
  }
  .header__flex {
    border-top: 2px solid ${colors.gray["200"]};
    display: flex;
    align-items: center;
    height: ${dimensions.headerHeight};
    left: 0;
    padding-left: ${spacing["2"]};
  }
  .brand__anchor {
    pointer-events: ${({ cartStatus }) =>
      cartStatus === "open" ? "none" : "auto"};
    display: block;
    flex-shrink: 0;
    line-height: 1;
    img {
      height: 45px;
      position: relative;
    }
  }
  h1 {
    align-self: center;
    -webkit-text-stroke: 0.45px;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
    text-shadow: #fff 0px 1px 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.sans};
    color: ${colors.red["800"]};
    font-weight: 900;
    font-size: ${fontSize["4xl"]};
    /* margin: 0; */
    line-height: 1;
    padding-left: 12px;
    /* padding-bottom: 5px; */
    span {
      color: ${colors.blue["800"]};
      font-style: italic;
    }
  }
  @media screen and (${breakpoints.lg}) {
    h1 {
      margin: 0;
      font-size: ${fontSize["4xl"]};
      padding-bottom: 5px;
      align-self: flex-end;
    }
    img {
      height: 45px;
    }
  }
`;

const Header = ({ cartStatus, menuStatus, pin }) => {
  const { width } = useWindowDimensions();
  return (
    <HeaderRoot cartStatus={cartStatus} menuStatus={menuStatus}>
      <div className="header__Wrapper">
        <div className="header__flex">
          <a className="brand__anchor" href="#">
            <img src={logo} alt="panda" />
          </a>
          <h1>
            <span>E.S.C.</span>
            Mattress Center
          </h1>
        </div>
        {/* {width > 768 ? <ExtraNavIcons /> : null} */}
        <NavIcons pin={pin} />
      </div>
      {width >= 1024 ? <Nav cartStatus={cartStatus} /> : null}
      {/* {width < 768 ? <ExtraNavIcons /> : null} */}
    </HeaderRoot>
  );
};
Header.defaultProps = {
  cartStatus: "closed",
  menuStatus: "closed",
  pin: true,
};
Header.propTypes = {
  cartStatus: string,
  menuStatus: string,
  pin: bool,
};

export default Header;

import styled from "@emotion/styled";
import { func, string, bool } from "prop-types";
import Hamburger from "./Hamburger";
import {
  colors,
  breakpoints,
  dimensions,
  // spacing,
  // fonts,
} from "../../../styles/theme.styled";
import Landscape from "./Landscape";
import Portrait from "./Portrait";

const MobileMenuRoot = styled.div`
  display: ${({ headerVisible }) => (headerVisible ? "initial" : "none")};
  background: ${colors.blue["900"]};
  bottom: 0;
  @media (max-width: 768px) {
    opacity: ${({ searchFocus }) => (searchFocus ? 0 : 1)};
    z-index: ${({ searchFocus }) => (searchFocus ? 0 : 10)};
  }
  /* opacity: ${({ searchFocus }) => (searchFocus ? 0 : 1)}; */
  position: fixed;
  right: 0;
  /* top: -1px; */
  top: 0;
  transform: translateX(100%);
  transition: transform 0.75s;
  width: 100%;
  will-change: transform;
  z-index: 10;

  &.open {
    transform: translateX(0%);
    box-shadow: 0 0 10px ${colors.gray["800"]};
  }

  &.closed {
    transform: translateX(100%);
  }
  @media (max-width: 300px) {
    width: 100%;
  }
  @media (min-width: 600px) and (min-height: 700px) {
    width: ${dimensions.cartWidthDesktop};
  }
  @media (min-width: 800px) and (min-height: 800px) {
    width: ${dimensions.cartWidthDesktop};
  }
  @media (max-height: 500px) and (max-width: 900px) {
    width: 100%;
  }
  @media (orientation: landscape) and (max-height: 600px) {
    width: 100%;
  }
  @media (min-height: 550px) and (min-width: 900px) and (max-width: 1022px) {
    width: ${dimensions.cartWidthDesktop};
  }
  @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
    width: ${dimensions.cartWidthDesktop};
  }
  /* @media (min-width: ${breakpoints.sm}) {
    width: ${dimensions.cartWidthDesktop};
  } */

  &.loading {
    ::after {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    width: ${dimensions.cartWidthDesktop};

    display: none;
  }
  /* z-index: ${({ searchFocus }) => (searchFocus ? 0 : 10)}; */
`;

const Heading = styled.header`
  align-items: center;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: flex-start;
  color: ${colors.gray["900"]};
`;

// const Title = styled.h2`
//   flex-grow: 1;
//   font-family: ${fonts.sans};
//   font-size: 1.8rem;
//   left: -${dimensions.headerHeight};
//   margin: 0;
//   margin-left: ${spacing["4"]};
//   position: relative;

//   .open & {
//     margin-left: calc(${dimensions.headerHeight} + ${spacing["4"]});

//     @media (min-width: ${breakpoints.lg}) {
//       margin-left: ${spacing["4"]};
//     }
//   }
// `;

const MobileMenu = ({
  status,
  headerVisible,
  toggle,
  menuId,
  searchFocus,
  ...props
}) => {
  const isHidden = status === "open";
  const tabIndex = isHidden ? 0 : -1;

  return (
    <MobileMenuRoot
      searchFocus={searchFocus}
      className={status}
      aria-hidden={!isHidden}
      headerVisible={headerVisible}
      {...props}
    >
      <Heading>
        <Hamburger
          toggle={toggle}
          status={status}
          aria-controls={menuId}
          headerVisible={headerVisible}
        />
        {/* <Title>Mobile Menu</Title> */}
      </Heading>
      {/* <ul aria-hidden={!isHidden}>
        <li tabIndex={tabIndex}>Cool</li>
        <li tabIndex={tabIndex}>stuff</li>
        <li tabIndex={tabIndex}>here</li>
      </ul> */}
      {status === "open" && <Portrait />}
      <Landscape />
    </MobileMenuRoot>
  );
};

MobileMenu.defaultProps = {
  status: "closed",
  headerVisible: true,
  menuId: "main-menu",
};
MobileMenu.propTypes = {
  status: string,
  headerVisible: bool,
  toggle: func.isRequired,
  menuId: string,
};
export default MobileMenu;

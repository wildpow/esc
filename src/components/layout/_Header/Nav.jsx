import React from "react";
import { Link } from "gatsby";
import { string } from "prop-types";
import styled, { keyframes } from "styled-components";
import {
  colors,
  // dimensions,
  // breakpoints,
  // spacing,
  // fontSize,
  fonts,
} from "../../../utils/styles";

// const navEntry = keyframes`
//   0% {
//     transform: translateY(-100%)
//   }
//   100% {
//     transform: translateY(0%);
//   }
// `;

const menuData = [
  { name: "Brands", url: "/brands" },
  { name: "Adjustable", url: "/adjustable" },
  { name: "Accessories", url: "/accessories" },
  { name: "Financing", url: "/financing" },
  { name: "Our Blog", url: "/blog" },
  { name: "About Us", url: "/about" },
];

const NavRoot = styled.nav`
  /* animation: ${navEntry} 0.75s ease forwards; */
  font-family: ${fonts.sans};
  background: ${colors.blue["700"]};
  z-index: 0;
  ul {
    margin: 0;
    opacity: ${({ cartStatus }) => (cartStatus === "open" ? 0.5 : 1)};
    display: flex;
    list-style: none;
    padding: 0;
    li {
      flex: 1;
      position: relative;
      text-align: center;
      a {
        transition: all 0.2s ease-in-out;
        pointer-events: ${({ cartStatus }) =>
          cartStatus === "open" ? "none" : "auto"};
        width: 100%;
        padding: 10px 0;
        color: #fff;
        display: block;
        text-decoration: none;
        :hover {
          color: ${colors.gray["100"]};
          background: ${colors.red["800"]};
        }
      }
    }
  }
`;

const Nav = ({ cartStatus }) => {
  return (
    <NavRoot cartStatus={cartStatus}>
      <ul>
        {menuData.map((item) => (
          <li key={item.name}>
            <Link
              to={item.url}
              partiallyActive
              activeStyle={{ background: colors.blue["900"] }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavRoot>
  );
};

Nav.defaultProps = {
  cartStatus: "closed",
};
Nav.propTypes = {
  cartStatus: string,
};
export default Nav;

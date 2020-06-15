import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
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
//     transform: translateX(100%)
//   }
//   100% {
//     transform: translateX(0%);
//   }
// `;
// animation: ${navEntry} 0.75s ease forwards;
const NavRoot = styled.nav`
  font-family: ${fonts.sans};
  background: ${colors.blue["700"]};
  ul {
    margin: 0;
    opacity: ${({ cartStatus }) => (cartStatus === "open" ? 0.5 : 1)};
    display: flex;
    list-style: none;
    padding: 0;
    li {
      flex: 1;
      position: relative;
      /* background-color: #222; */
      /* border-right: solid thin #111; */
      :nth-child(6) {
        /* ::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          height: 0px;
          width: 0px;
          background: white;
        } */
        /* ::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          height: 0px;
          width: 0px;
          background: white;
        } */
      }
      /* ::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 10px;
        width: 2px;
        background: white;
      } */
      /* ::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 10px;
        width: 2px;
        background: white;
      } */
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
        <li>
          <a href="#brands">Brands</a>
        </li>
        <li>
          <a href="#Adjustable">Adjustable</a>
        </li>
        <li>
          <a href="#accessories">Accessories</a>
        </li>
        <li>
          <a href="#financing">Financing</a>
        </li>
        <li>
          <a href="#blog">Our Blog</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
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

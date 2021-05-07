import React from "react";
import { Link } from "gatsby";
import { string } from "prop-types";
import { styled, theme } from "twin.macro";
import fontSize from "../../../Old/fontSizes";

const menuData = [
  { name: "Mattresses", url: "/brands" },
  { name: "Adjustable Bases", url: "/adjustable" },
  { name: "Accessories", url: "/accessories" },
  { name: "Financing", url: "/financing" },
  { name: "Our Blog", url: "/blog" },
  { name: "About Us", url: "/about" },
];

const NavRoot = styled("nav")`
  font-family: ${theme`fontFamily.sans`};
  background: ${theme`colors.lightBlue["700"]`};
  z-index: 0;
  box-shadow: ${theme`boxShadow.md`};
  display: none;
  ul {
    max-width: ${theme`screens.2xl`};
    justify-content: space-evenly;
    margin: 0 auto;
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
        color: ${theme`colors.blueGray.50`};
        display: block;
        text-decoration: none;
        &:hover {
          /* color: ${theme`colors.gray["100"]`}; */
          background: ${theme`colors.rose["900"]`};
        }
        &:focus {
          box-shadow: 0 0 0 1px ${theme`colors.blue["300"]`} inset;
          outline: 0;
          transition: box-shadow 0.15s ease-in-out;
        }
      }
    }

    @media print {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    display: block;
  }
  @media (min-width: ${theme`screens.xl`}) {
    ul li a {
      font-size: ${fontSize.lg};
    }
  }
`;

const Nav = ({ cartStatus }) => (
  <NavRoot cartStatus={cartStatus}>
    <ul>
      {menuData.map((item) => (
        <li key={item.name}>
          <Link
            to={item.url}
            partiallyActive
            activeStyle={{ background: theme`colors.lightBlue["900"]` }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </NavRoot>
);

Nav.defaultProps = {
  cartStatus: "closed",
};
Nav.propTypes = {
  cartStatus: string,
};
export default Nav;

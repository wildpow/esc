import React, { useContext } from "react";
import { bool, string, func } from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import VisuallyHidden from "@reach/visually-hidden";
import StoreContext from "../../../context/StoreContext";
import Phone from "../../../assets/phone-solid.svg";
import Email from "../../../assets/envelope-solid.svg";
import Map from "../../../assets/directions-solid.svg";
import { iconEntry, numberEntry } from "../../../utils/keyframes";
import { colors, dimensions, breakpoints, fonts } from "../../../utils/styles";
import CartIcon from "../../../assets/shopping-cart-solid.svg";
import Search from "../../Search";

const searchIndices = [{ name: `Products`, title: `Products` }];

// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.
const ItemsNumber = styled.span`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  background: ${colors.yellow["400"]};
  border-radius: 50%;
  color: ${colors.gray["900"]};
  display: flex;
  font-size: 1.45rem;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  width: 36px;
  font-family: ${fonts.sans};
`;
// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.
const CartToggle = styled.button`
  .fa-shopping-cart {
    animation: ${iconEntry} 0.75s ease forwards;
    height: 28px;
    margin: 0;
    width: 28px;
    color: ${({ menuStatus, cartStatus }) =>
      menuStatus === "open" || cartStatus === "open"
        ? colors.gray["800"]
        : colors.gray["600"]};
    transition: all 0.2s ease;
  }

  background: transparent;
  border: none;
  border-radius: 0;
  display: ${({ pin }) => (pin ? "flex" : "none")};
  height: ${dimensions.headerHeight};
  justify-content: center;
  align-items: center;

  padding: 0;
  position: relative;
  top: 0;

  transition: all 0.2s ease;
  pointer-events: ${({ menuStatus, cartStatus }) =>
    menuStatus === "open" || cartStatus === "open" ? "none" : "auto"};
  width: ${dimensions.headerHeight};
  :hover {
    transform: scale(1.2);
    .fa-shopping-cart {
      color: ${colors.blue["900"]};
    }
  }
  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  ${ItemsNumber} {
    position: absolute;
    right: 0rem;
    top: 0rem;
    animation: ${numberEntry} 0.5s ease forwards;
    transform: scale(0.6);
  }
`;

const ExtraNavRoot = styled.div`
  display: flex;
  position: relative;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-right: 61px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-right: 0px;
  }
  @media print {
    display: none;
  }
`;

const StyledLinks = styled.a`
  align-items: center;
  display: ${({ pin }) => (pin ? "initial" : "none")};

  transition: all 0.2s ease;
  :hover {
    transform: scale(1.2);
    .fa-phone {
      color: ${colors.blue["900"]};
    }
  }
  background: transparent;
  border: none;
  border-radius: 0;
  display: flex;
  justify-content: center;
  padding: 0;
  height: ${dimensions.headerHeight};
  width: ${dimensions.headerHeight};
  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  .fa-phone {
    display: ${({ pin }) => (pin ? "initial" : "none")};
    animation: ${iconEntry} 0.75s ease forwards;
    height: 28px;
    margin: 0;
    width: 28px;
    color: ${colors.gray["600"]};
  }
`;

const NavIcons = ({ pin, cartToggle, menuStatus, cartStatus }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const itemsInCart = checkout.lineItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <ExtraNavRoot>
      <Search pin={pin} indices={searchIndices} />
      <StyledLinks
        href="tel:1-425-512-0017"
        pin={pin}
        aria-label="Store phone number"
      >
        <span aria-hidden>
          <VisuallyHidden>Call store</VisuallyHidden>
          <Phone className="fa-phone" title="call store" />
        </span>
      </StyledLinks>
      <StyledLinks
        as={Link}
        to="/contact-us"
        pin={pin}
        aria-label="get in contact with us via email"
      >
        <span aria-hidden>
          <VisuallyHidden>Contact Us</VisuallyHidden>
          <Email className="fa-phone" title="Contact Us" />
        </span>
      </StyledLinks>
      <StyledLinks
        href="https://goo.gl/maps/nqXkkkAGRdu"
        target="_blank"
        rel="noopener noreferrer"
        pin={pin}
        aria-label="Google maps link to our store"
      >
        <span aria-hidden>
          <VisuallyHidden>directions to store</VisuallyHidden>
          <Map className="fa-phone" title="directions to store" />
        </span>
      </StyledLinks>
      <CartToggle
        aria-label="Shopping cart with 1 items"
        onClick={cartToggle}
        pin={pin}
        menuStatus={menuStatus}
        cartStatus={cartStatus}
      >
        <VisuallyHidden>shoping cart</VisuallyHidden>
        <span aria-hidden>
          <CartIcon
            alt="Shopping cart icon"
            className="fa-shopping-cart"
            title="Open shopping cart menu"
          />
        </span>
        {itemsInCart > 0 && <ItemsNumber>{itemsInCart}</ItemsNumber>}
      </CartToggle>
    </ExtraNavRoot>
  );
};
NavIcons.defaultProps = {
  pin: true,
  menuStatus: "closed",
  cartStatus: "closed",
};
NavIcons.propTypes = {
  pin: bool,
  menuStatus: string,
  cartStatus: string,
  cartToggle: func.isRequired,
};

export default NavIcons;

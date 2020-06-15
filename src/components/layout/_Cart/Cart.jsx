import React, { useEffect, useState } from "react";
import { func, string, bool } from "prop-types";
import VisuallyHidden from "@reach/visually-hidden";
import styled from "styled-components";
import CloseIcon from "../../../images/header/times-solid.svg";
import CartIcon from "../../../images/header/shopping-cart-solid.svg";
import { iconEntry, numberEntry } from "../../../utils/keyframes";
import {
  dimensions,
  colors,
  breakpoints,
  fonts,
  spacing,
} from "../../../utils/styles";

const CartRoot = styled.div`
  background: ${colors.white};
  bottom: 0;
  position: fixed;
  right: 0;
  top: -1px;
  transform: translateX(100%);
  transition: transform 0.75s;
  width: 100%;
  will-change: transform;
  z-index: ${({ zIndex }) => zIndex};
  display: ${({ pin }) => (pin ? "initial" : "none")};
  &.open {
    transform: translateX(0%);
  }

  &.closed {
    transform: translateX(100%);
  }

  &.loading {
    ::after {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    width: ${dimensions.cartWidthDesktop};
    &.covered {
      display: none;
    }
  }
`;

const ItemsNumber = styled.span`
  align-items: center;
  background: ${colors.yellow["400"]};
  border-radius: 50%;
  color: ${colors.blue["900"]};
  display: flex;
  font-size: 1.3rem;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  width: 36px;
`;

const Heading = styled.header`
  align-items: center;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: flex-start;
  color: ${colors.gray["900"]};
`;

const CartToggle = styled.button`
  .fa-shopping-cart,
  .fa-times {
    animation: ${iconEntry} 0.75s ease forwards;
    height: 28px;
    margin: 0;
    width: 28px;
    color: ${colors.gray["600"]};
    transition: all 0.2s ease;
  }

  background: transparent;
  border: none;
  border-radius: 0;
  display: ${({ pin }) => (pin ? "flex" : "none")};
  height: ${dimensions.headerHeight};
  justify-content: center;
  align-items: center;
  left: -61px;
  padding: 0;
  position: relative;
  top: 0;
  transform: translateX(-100%);
  transition: all 0.2s ease;
  width: ${dimensions.headerHeight};
  :hover {
    transform: scale(1.2) translateX(-85%);
    .fa-shopping-cart {
      color: ${colors.blue["900"]};
    }
  }
  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  .open & {
    background: ${colors.blue["800"]};
    .fa-times {
      color: ${colors.white};
    }
    transform: translateX(0);
    left: 0;
    transition: all 0.2s ease-in-out;
    :hover {
      background: ${colors.blue["900"]};
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    left: -61px;
  }
  @media (min-width: ${breakpoints.lg}) {
    left: -61px;
  }

  @media (min-width: ${breakpoints.lg}) {
    left: 0;
    .open & {
      transform: translateX(0%);
      left: -61px;
    }
  }

  ${ItemsNumber} {
    animation: ${numberEntry} 0.5s ease forwards;
    position: absolute;
    right: 0rem;
    top: 0rem;
    transform: scale(0.6);
  }
`;
const Title = styled.h2`
  flex-grow: 1;
  font-family: ${fonts.sans};
  font-size: 1.8rem;
  left: -${dimensions.headerHeight};
  margin: 0;
  margin-left: ${spacing["4"]};
  position: relative;

  .open & {
    margin-left: calc(${dimensions.headerHeight} + ${spacing["4"]});

    @media (min-width: ${breakpoints.lg}) {
      margin-left: ${spacing["4"]};
    }
  }
`;
const ItemsInCart = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  line-height: 1.2;
  text-align: right;
  font-family: ${fonts.sans};
  ${ItemsNumber} {
    margin-left: ${spacing["2"]};
    margin-right: ${spacing["4"]};
  }
`;
const Cart = ({ toggle, status, menuStatus, pin, ...rest }) => {
  const itemsInCart = 0;
  const [zIndex, setZindex] = useState(10);
  useEffect(() => {
    function zIndexTimer(value, time) {
      setTimeout(() => {
        setZindex(value);
      }, time);
    }
    if (status === "open") {
      setZindex(11);
    } else {
      zIndexTimer(10, 750);
    }
    return () => clearTimeout(zIndexTimer);
  }, [status]);
  const isHidden = status === "open";
  const tabIndex = isHidden ? 0 : -1;
  return (
    <CartRoot
      className={status}
      zIndex={zIndex}
      aria-hidden={!isHidden}
      pin={pin}
    >
      <Heading>
        <CartToggle
          aria-label="Shopping cart with 1 items"
          onClick={toggle}
          pin={pin}
        >
          {status === "open" ? (
            <span aria-hidden>
              <VisuallyHidden>close shoping cart</VisuallyHidden>
              <CloseIcon
                className="fa-times"
                title="Close shopping cart menu"
                alt="X to close hopping cart"
              />
            </span>
          ) : (
            <>
              <VisuallyHidden>shoping cart</VisuallyHidden>
              <span aria-hidden>
                <CartIcon
                  alt="Shopping cart icon"
                  className="fa-shopping-cart"
                  title="Open shopping cart menu"
                />
              </span>
              {rest.fakeHasItems && <ItemsNumber>{rest.fakeQty}</ItemsNumber>}
            </>
          )}
        </CartToggle>
        <Title>Your Cart</Title>
        <ItemsInCart>
          items
          <br />
          in cart
          <ItemsNumber>{rest.fakeQty}</ItemsNumber>
        </ItemsInCart>
      </Heading>
      <ul>
        <li tabIndex={tabIndex}>Cool</li>
        <li tabIndex={tabIndex}>stuff</li>
        <li tabIndex={tabIndex}>here</li>
      </ul>
    </CartRoot>
  );
};

Cart.defaultProps = {
  status: "closed",
  pin: true,
  menuId: "main-menu",
};
Cart.propTypes = {
  status: string,
  pin: bool,
  toggle: func.isRequired,
  menuId: string,
};

export default Cart;

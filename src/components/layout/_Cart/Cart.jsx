import React, { useEffect, useState, useContext } from "react";
import { func, string, bool } from "prop-types";
import VisuallyHidden from "@reach/visually-hidden";
import styled from "styled-components";
import StoreContext from "../../../context/StoreContext";
import CloseIcon from "../../../assets/times-solid.svg";
import CartIcon from "../../../assets/shopping-cart-solid.svg";
import { iconEntry, numberEntry } from "../../../utils/keyframes";
import {
  dimensions,
  colors,
  breakpoints,
  fonts,
  spacing,
} from "../../../utils/styles";
import CartList from "./CartList";

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
  ::after {
    background-color: ${colors.lightest};
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 250ms;
  }
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

const Content = styled.div`
  bottom: 0;
  overflow-y: auto;
  padding: ${spacing["6"]};
  position: absolute;
  top: ${dimensions.headerHeight};
  width: 100%;

  @media (min-width: ${breakpoints.lg}) {
    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.white};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.blue["700"]};
    }
    ::-webkit-scrollbar-track {
      background: ${colors.white};
    }
  }
`;
const Cart = ({ toggle, status, menuStatus, pin }) => {
  const [loading, setLoading] = useState(false);
  const {
    store: { checkout, client },
    removeLineItem,
    updateLineItem,
  } = useContext(StoreContext);

  const handleRemove = (itemID) => async (event) => {
    event.preventDefault();
    await removeLineItem(client, checkout.id, itemID);
    setLoading(false);
  };

  const handleQuantityChange = (lineItemID) => async (quantity) => {
    if (!quantity) {
      return;
    }
    await updateLineItem(client, checkout.id, lineItemID, quantity);
    setLoading(false);
  };
  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };
  const itemsInCart = checkout.lineItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
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
  return (
    <CartRoot
      className={`${status} ${loading ? "loading" : ""}`}
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
              {itemsInCart > 0 && <ItemsNumber>{itemsInCart}</ItemsNumber>}
            </>
          )}
        </CartToggle>
        <Title>Your Cart</Title>
        <ItemsInCart>
          items
          <br />
          in cart
          <ItemsNumber>{itemsInCart}</ItemsNumber>
        </ItemsInCart>
      </Heading>
      {checkout.lineItems.length > 0 ? (
        <Content>
          <CartList
            items={checkout.lineItems}
            handleRemove={handleRemove}
            updateQuantity={handleQuantityChange}
            setCartLoading={setLoading}
            isCartLoading={loading}
          />
        </Content>
      ) : (
        <div>
          <h1>Empty Cart</h1>
        </div>
      )}
      {/* <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
        type="button"
      >
        Check out
      </button> */}
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

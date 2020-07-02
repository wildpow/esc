import React, { useState, useEffect } from "react";
import { bool, number } from "prop-types";
import styled from "styled-components";
import usePrevious from "../../Hooks/use-previous";
// import { numberEntry } from "../../../utils/keyframes";
import {
  colors,
  dimensions,
  radius,
  spacing,
  fonts,
} from "../../../utils/styles";

const CartIndicatorRoot = styled.div`
  font-family: ${fonts.sans};
  pointer-events: none;
  background: ${colors.yellow["400"]};
  border-radius: ${radius.large}px;
  color: ${colors.blue["900"]};
  display: flex;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible
      ? `translateX(calc((100% + ${spacing["12"]}) * -1)) scale(1.2)`
      : `translateX(calc((100% + ${spacing["4"]}) * -1)) scale(1)`};
  justify-content: center;
  left: 0;
  padding: ${spacing["2"]} ${spacing["4"]};
  position: absolute;
  top: calc(${dimensions.headerHeight} + ${spacing["4"]});
  transform: translateX(calc((100% + ${spacing["4"]}) * -1));
  transition: all 0.2s ease-in-out;
`;

const CartIndicator = ({ adding, itemsInCart }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const prevAdding = usePrevious(adding);
  const prevItemsInCart = usePrevious(itemsInCart);
  useEffect(() => {
    if (prevAdding !== adding) {
      if (adding) {
        setVisible(true);
        setMessage("updating cart ...");
      }
    }
    if (itemsInCart > prevItemsInCart) {
      const num = itemsInCart - prevItemsInCart;
      const newMessage =
        num > 1
          ? `${num} new items have been added to the cart`
          : `${num} new item has been added to the cart`;
      setMessage(newMessage);
    }
    const timer = setTimeout(() => {
      setVisible(false);
      // setMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [adding, itemsInCart, prevAdding, prevItemsInCart]);

  return <CartIndicatorRoot visible={visible}>{message}</CartIndicatorRoot>;
};

CartIndicator.defaultProps = {
  adding: false,
  itemsInCart: 0,
};

CartIndicator.propTypes = {
  adding: bool,
  itemsInCart: number,
};

export default CartIndicator;

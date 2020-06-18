import React, { useState, useEffect, useRef } from "react";
import { bool, number } from "prop-types";
import styled from "styled-components";
import {
  colors,
  dimensions,
  radius,
  spacing,
  fonts,
} from "../../../utils/styles";

const CartIndicatorRoot = styled.div`
  font-family: ${fonts.sans};
  background: ${colors.yellow["400"]};
  border-radius: ${radius.default}px;
  color: ${colors.blue["900"]};
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  left: 0;
  padding: ${spacing["2"]} ${spacing["4"]};
  position: absolute;
  top: calc(${dimensions.headerHeight} + ${spacing["4"]});
  transform: translateX(calc((100% + ${spacing["4"]}) * -1));
  transition: all 1s ease-in-out;
`;

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

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
      setMessage("");
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

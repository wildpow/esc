import { useState, useEffect } from "react";
import { bool, number } from "prop-types";
import styled, { keyframes } from "styled-components";
import usePrevious from "../../Hooks/use-previous";
// import { numberEntry } from "../../../utils/keyframes";
import {
  colors,
  dimensions,
  radius,
  spacing,
  fonts,
} from "../../../utils/styles";

const toastInRight = keyframes`
	from {
	  transform: translateX(100%);

	}
	to {
	  transform: translateX(0);
    
	}
`;

const CartIndicatorRoot = styled.div`
  font-family: ${fonts.sans};
  pointer-events: none;
  background: ${colors.yellow["400"]};
  border-radius: ${radius.large}px;
  color: ${colors.blue["900"]};
  display: flex;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? `translateX(0%) scale(1.2)` : `translateX(100%) scale(1)`};
  justify-content: center;
  right: 5%;
  z-index: 99999;
  padding: ${spacing["3"]} ${spacing["4"]};
  position: fixed;
  top: ${({ pin }) =>
    pin ? `calc(${dimensions.headerHeight} + ${spacing["4"]})` : spacing["4"]};

  transition: all 0.2s ease-in-out;
  animation: ${toastInRight} 0.1s;
`;
const CartIndicator = ({ adding, itemsInCart, pin }) => {
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

  return (
    <>
      <CartIndicatorRoot visible={visible} pin={pin}>
        {message}
      </CartIndicatorRoot>
      {console.log(typeof pin)}
    </>
  );
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

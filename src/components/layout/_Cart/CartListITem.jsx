import React, { useState } from "react";
import styled from "styled-components";

import CloseIcon from "../../../assets/times-solid.svg";

import CartThumbnail from "./CartThumbnail";
// import { Button } from "../shared/Buttons";

import { breakpoints, colors, spacing, radius } from "../../../utils/styles";

const CartListItemRoot = styled.li`
  align-items: center;
  border-bottom: 1px solid ${colors.gray["200"]};
  display: flex;
  justify-content: space-between;
  padding: ${spacing["4"]} 0;
`;

const Thumbnail = styled(CartThumbnail)`
  flex-grow: 0;
  margin-left: ${spacing["1"]};
  margin-right: ${spacing["4"]};
`;

const Info = styled.div`
  flex-grow: 1;
`;

const Name = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.2;
`;

const Meta = styled.span`
  color: ${colors.black};
  display: block;
  font-size: 0.95rem;
  font-style: normal;
`;

const Quantity = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray["300"]};
  border-radius: ${radius.default}px;
  color: ${colors.gray["900"]};
  display: block;
  font-size: 1.1rem;
  padding: ${spacing["2"]} ${spacing["3"]};
  width: 100%;

  :focus {
    box-shadow: 0 0 0 3px ${colors.accent};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  flex-grow: 0;
  height: 44px;
  margin-right: ${spacing["1"]};
  padding: 0 ${spacing["1"]} 0;
  text-align: center;
  width: 50px;

  @media (min-width: ${breakpoints.lg}) {
    width: 70px;
  }
`;

const Remove = styled.button`
  border: 1px dotted ${colors.red["400"]};
  display: flex;
  height: 44px;
  justify-content: center;
  margin-right: ${spacing["1"]};
  padding: 0;
  width: 44px;

  svg {
    height: 24px;
    margin: 0;
    width: 24px;
  }
`;

export default ({
  item,
  setCartLoading,
  updateQuantity,
  handleRemove,
  isCartLoading,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (item.quantity !== quantity && quantity !== "" && !isCartLoading) {
    setQuantity(item.quantity);
  }

  const handleInputChange = (event) => {
    if (isCartLoading) {
      return;
    }

    const { value } = event.target;

    // Make sure the quantity is always at least 1.
    const safeValue = Math.max(Number(value), 0);

    // No need to update if the value hasn’t updated.
    if (value === quantity) {
      return;
    }

    // If the field is empty, update the state but don’t do anything else.
    if (value === "") {
      setQuantity(value);
      return;
    }

    // Otherwise, trigger the loading state and set the quantity in state.
    setCartLoading(true);
    setQuantity(safeValue);

    // If the quantity is set to 0, remove the item.
    if (safeValue === 0) {
      handleRemove(event);
      return;
    }

    // If we get here, update the quantity.
    updateQuantity(safeValue);
  };

  const handleRemoveItem = (event) => {
    setCartLoading(true);
    handleRemove(event);
  };

  return (
    <CartListItemRoot>
      {console.log(setCartLoading, isCartLoading)}
      <Thumbnail
        id={item.variant.image.id}
        fallback={item.variant.image.src}
        alt={item.variant.image.altText}
      />
      <Info>
        <Name>{item.title}</Name>
        <Meta>
          {item.variant.title}, ${item.variant.price}
        </Meta>
      </Info>
      <Quantity
        aria-label="Quantity"
        id={`quantity_${item.id.substring(58, 64)}`}
        type="number"
        name="quantity"
        inputmode="numeric"
        min="1"
        step="1"
        onChange={(event) => handleInputChange(event)}
        onBlur={() => setQuantity(item.quantity)}
        value={quantity}
      />
      <Remove onClick={handleRemoveItem}>
        <CloseIcon />
      </Remove>
    </CartListItemRoot>
  );
};

// import { useState } from "react";
// import styled from "styled-components";
import React from "react";

// const Remove = styled.button`
//   align-items: center;
//   font-size: 1.1rem;
//   justify-content: center;
//   padding: 0.5em 0.75rem;
//   transition: 0.5s;
//   border: 1px dotted ${colors.blue["200"]};
//   display: flex;
//   height: 44px;
//   justify-content: center;
//   margin-right: ${spacing["1"]};
//   padding: 0;
//   width: 44px;
//   background: white;
//   cursor: pointer;
//   svg {
//     height: 24px;
//     margin: 0;
//     width: 24px;
//     color: ${colors.blue["900"]};
//   }
// `;

export default ({
  item,
  setCartLoading,
  updateQuantity,
  handleRemove,
  isCartLoading,
}) => (
  // const [quantity, setQuantity] = useState(1);

  // if (item.quantity !== quantity && quantity !== "" && !isCartLoading) {
  //   setQuantity(item.quantity);
  // }

  // const handleInputChange = (event) => {
  //   if (isCartLoading) {
  //     return;
  //   }

  //   const { value } = event.target;

  //   // Make sure the quantity is always at least 1.
  //   const safeValue = Math.max(Number(value), 0);

  //   // No need to update if the value hasn’t updated.
  //   if (value === quantity) {
  //     return;
  //   }

  //   // If the field is empty, update the state but don’t do anything else.
  //   if (value === "") {
  //     setQuantity(value);
  //     return;
  //   }

  //   // Otherwise, trigger the loading state and set the quantity in state.
  //   setCartLoading(true);
  //   setQuantity(safeValue);

  //   // If the quantity is set to 0, remove the item.
  //   if (safeValue === 0) {
  //     handleRemove(event);
  //     return;
  //   }

  //   // If we get here, update the quantity.
  //   updateQuantity(safeValue);
  // };

  // const handleRemoveItem = (event) => {
  //   setCartLoading(true);
  //   handleRemove(event);
  // };

  // <CartListItemRoot>
  //   <Thumbnail
  //     id={item.variant.image.id}
  //     fallback={item.variant.image.src}
  //     alt={item.variant.image.altText}
  //   />
  //   <Info>
  //     <Name>{item.title}</Name>
  //     <Meta>
  //       {item.variant.title}, ${item.variant.price}
  //     </Meta>
  //   </Info>
  //   <Quantity
  //     aria-label="Quantity"
  //     id={`quantity_${item.id.substring(58, 64)}`}
  //     type="number"
  //     name="quantity"
  //     inputmode="numeric"
  //     min="1"
  //     step="1"
  //     onChange={(event) => handleInputChange(event)}
  //     onBlur={() => setQuantity(item.quantity)}
  //     value={quantity}
  //   />
  //   <Remove onClick={handleRemoveItem}>
  //     <CloseIcon />
  //   </Remove>
  // </CartListItemRoot>
  <div>ef</div>
);

import React from "react";
import styled from "styled-components";

const AccWrapper = styled.div`
  .addToCart {
    display: flex;
    justify-content: space-evenly;
    height: 38px;
    margin: 15px 0;
  }
  border-top: 1px solid #cacaca;
  .input-group-qty input[type="number"]::-webkit-inner-spin-button,
  .input-group-qty input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .input-group-qty {
  }
  .input-group-qty input[type="number"] {
    outline: none;
    -moz-appearance: textfield;
    cursor: default;

    height: 38px;

    text-align: center;
    width: 62px;
    display: inline-block;
    font-size: 13px;
    margin: 0 0 5px;
    resize: vertical;
  }
  .input-group-qty button {
    font-weight: bold;
    height: 38px;
    padding: 0;
    width: 38px;
    background-color: #eeeeee;
    min-width: 38px;
    width: auto;
    -webkit-appearance: button;
    cursor: pointer;
  }
`;
const AccDropDown = ({ product }) => {
  const minMaxMaker = (min, max) => {
    if (min === max) {
      return max;
    }
    return `${min} - ${max}`;
  };
  return (
    <AccWrapper>
      {product.variants.length === 1 ? (
        <div>
          <h3>
            {`$${minMaxMaker(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.maxVariantPrice.amount,
            )}`}
          </h3>
          <div className="addToCart">
            <div className="input-group-qty">
              <label htmlFor="quantity" aria-label="quantity" hidden>
                Qty:
              </label>
              <button type="button" aria-label="plus 1 quantity">
                -
              </button>
              <input
                id="quantity"
                type="number"
                value="1"
                readOnly
                max="10"
                min="1"
                name="quantity"
              />
              <button type="button" aria-label="minus 1 quantity">
                +
              </button>
            </div>

            <button type="button">ADD TO CART</button>
          </div>
        </div>
      ) : (
        <h1>more variants</h1>
      )}
    </AccWrapper>
  );
};

export default AccDropDown;

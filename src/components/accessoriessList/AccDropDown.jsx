import React from "react";
import styled from "styled-components";

const AccWrapper = styled.div`
  /* * {
    border: 1px solid red;
  } */
  font-family: ${(props) => props.theme.MainFont1};
  color: #2d2926;
  h3 {
    font-weight: 700;
    color: ${(props) => props.theme.mainColor2};
    font-size: 2.1rem;
  }
  .addToCart {
    display: flex;
    justify-content: space-evenly;
    height: 40px;
    /* margin: 15px 0; */
  }
  border-top: 1px solid #cacaca;
  .input-group-qty input[type="number"]::-webkit-inner-spin-button,
  .input-group-qty input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .input-group-qty {
    height: 100%;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #2d2926;
  }
  .input-group-qty input[type="number"] {
    outline: none;
    -moz-appearance: none;
    cursor: default;
    font-family: ${(props) => props.theme.MainFont1};
    color: #2d2926;
    /* height: 40px; */
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    width: 62px;
    /* display: inline-block; */
    /* font-size: 13px; */
    /* margin: 0 0 5px; */
    /* resize: vertical; */
    border: none;
  }
  .input-group-qty button {
    font-weight: bold;
    /* height: 40px; */
    border-radius: 5px;
    padding: 0;
    width: 40px;
    border: none;
    /* background-color: #eeeeee; */
    min-width: 40px;
    width: auto;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.MainFont1};
    color: #2d2926;
    font-weight: bold;
  }
  .addCartBtn {
    min-width: 170px;
    background-color: ${(props) => props.theme.mainColor1};
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    font-family: ${(props) => props.theme.MainFont1};
    text-transform: uppercase;
    cursor: pointer;
    &:active {
      box-shadow: 0 3px 0 #ccc;
      top: 3px;
      outline: none;
    }
    &:hover:enabled {
      background-color: #094e9b;
      color: white;
      cursor: pointer !important;
    }
    &:active:enabled {
      background: ${(props) => props.theme.mainColor1} !important;
      box-shadow: inset 0px 0px 5px #c1c1c1 !important;
      outline: none;
    }
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

            <button className="addCartBtn" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <h1>more variants</h1>
      )}
    </AccWrapper>
  );
};

export default AccDropDown;

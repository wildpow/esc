import React, { useState } from "react";
import styled from "styled-components";
import Quantity from "./quantity";

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
    border: 2px solid #2d2926;
    transition: all 0.2s ease-in-out;
    &:hover {
      border: 2px solid #a19389;
    }
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
    /* width: 62px; */
    /* display: inline-block; */
    /* font-size: 13px; */
    /* margin: 0 0 5px; */
    /* resize: vertical; */
    border: none;
    padding: 0;
    line-height: 1rem;
    margin-left: 5px;
    margin-right: 5px;
  }
  .minus {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: transparent;
    :hover {
      color: #5e95d2;
    }
  }
  .plus {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: transparent;
    :hover {
      color: #5e95d2;
    }
  }
  .plus:focus,
  .plus span {
    color: transparent;
    text-shadow: 0 0 0 black;
    transition: all 0.2s ease-in-out;
  }
  .plus:hover {
    div {
      transform: scale(0.8);
    }
    div span {
      text-shadow: 0 0 0 #397cc7;
    }
  }
  .input-group-qty button {
    font-weight: bold;
    /* height: 40px; */
    /* border-radius: 5px; */
    padding: 0;
    /* width: 40px; */
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
    min-width: 180px;
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
  const [quantity, setQuantity] = useState(1);
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
            <Quantity qty={quantity} hook={setQuantity} />
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

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Quantity from "./quantity";
import StoreContext from "../../context/StoreContext";

const AccWrapper = styled.div`
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
  const [variant, setVariant] = useState(product.variants[0]);
  const { addVariantToCart } = useContext(StoreContext);
  const handleAddToCart = () => {
    addVariantToCart(variant.shopifyId, quantity);
  };
  const minMaxMaker = (min, max) => {
    if (min === max) {
      return max;
    }
    return `${min} - ${max}`;
  };
  return (
    <AccWrapper>
      {console.log(product)}
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
            <button
              className="addCartBtn"
              type="button"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>
            {`$${minMaxMaker(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.maxVariantPrice.amount,
            )}`}
          </h3>
          <div>
            <h6>SIZE</h6>
            <select name="" id="">
              {product.variants.map((item) => {
                return (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </AccWrapper>
  );
};

AccDropDown.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
export default AccDropDown;

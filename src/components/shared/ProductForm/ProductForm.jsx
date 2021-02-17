import { useContext, useState, useReducer } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Fieldset,
  Input,
  Label,
  Select,
  // Submit,
  Submit2,
} from "../FormElements";

import {
  colors,
  // radius,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../../utils/styles";
import { ProductFormRoot } from "./ProductForm.styled";
import sheetColors from "./sheetColors";
import ShopingCart from "../../../assets/shopping-cart-solid.svg";
import StoreContext from "../../../context/StoreContext";
// import ErrorIcon from "../../../assets/exclamation-triangle-solid.svg";

const PriceRange = styled.div`
  font-family: ${fonts.sans};
  padding-top: 20px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  small {
    font-weight: ${({ compareAtPrice }) => (compareAtPrice ? 500 : 300)};
    color: ${colors.red["900"]};
    text-decoration: ${({ compareAtPrice }) =>
      compareAtPrice ? "line-through" : "initial"};
    font-size: ${fontSize.lg};
  }
  h4 {
    font-size: ${fontSize["3xl"]};
    margin-top: 0;
    color: ${colors.blue["900"]};
    margin-bottom: 0;
  }
  /* @media (min-width: ${breakpoints.xsm}) {
    h4 {
      font-size: ${fontSize["2xl"]};
    }
    small {
      font-size: ${fontSize.xl};

      color: ${colors.red["900"]};
    }
  } */
  @media (min-width: ${breakpoints.md}) {
    h4 {
      font-size: ${fontSize["2xl"]};
    }
  }
  @media (min-width: 840px) {
    h4 {
      font-size: ${fontSize["3xl"]};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    h4 {
      font-size: ${fontSize["4xl"]};
    }
    small {
      font-size: ${fontSize.xl};
      font-weight: 300;
      color: ${colors.red["900"]};
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    h4 {
      font-size: ${fontSize["5xl"]};
    }
  }
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h5 {
    font-family: ${fonts.serif};
    font-size: ${fontSize.xl};
    margin-bottom: 10px;
    color: ${colors.blue[900]};
  }
  .colorPalette {
    display: flex;
    width: 100%;
  }
  .color_input {
    display: none;
  }
  .color_label {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    background-size: auto 100%;
    padding: 10px;
    cursor: pointer;
  }
`;
const ColorLabel = styled.label`
  border: ${({ title, activeTitle }) =>
    title === activeTitle
      ? `2px solid ${colors.gray[900]}`
      : "1px solid #979797"};
  :hover {
    border: ${({ title, activeTitle }) =>
      title === activeTitle
        ? `2px solid ${colors.gray[900]}`
        : `2px solid ${colors.gray[800]}`};
  }
`;

const AddToCartButton = styled(Submit2)`
  align-self: flex-end;
  flex-grow: 1;
  @media print {
    display: none;
  }
`;
const QtyFieldset = styled(Fieldset)`
  flex-basis: 65px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${spacing["3"]};

  ${Label} {
    text-align: center;
  }

  ${Input} {
    padding: ${spacing["3"]} ${spacing["3"]};
    text-align: center;
  }
  input[type="number"]::-webkit-inner-spin-button {
    cursor: pointer;
  }
`;
const SizeFieldset = styled(Fieldset)`
  flex-basis: calc(100% - ${spacing["3"]} - 70px);

  ${Label} {
    justify-content: space-between;
  }
`;
export default function ProductForm({
  variants,
  titleOfProduct,
  priceMin,
  priceMax,
  maxQty,
}) {
  const initialState = {
    activeColor: "",
    colorList: null,
    quantity: 1,
    sizeIndex: "",
    compareAtPrice: null,
    price: `$${Number(priceMin).toFixed(2)} - $${Number(priceMax).toFixed(2)}`,
  };
  const generateInitialState = (products, title) => {
    const sortedProductsByColor = {};
    let temp;
    products.forEach((product) => {
      temp = product.title.split(" / ");
      if (sortedProductsByColor[temp[1]] === undefined) {
        sortedProductsByColor[temp[1]] = [];
        sortedProductsByColor[temp[1]].push(product);
      } else {
        sortedProductsByColor[temp[1]].push(product);
      }
    });
    const colorPalette = sheetColors(Object.keys(sortedProductsByColor), title);
    return { sortedProductsByColor, colorPalette };
  };
  const test = generateInitialState(variants, titleOfProduct);
  const reducer = (state, action) => {
    switch (action.type) {
      case "color":
        return {
          ...state,
          // quantity: 1,
          // sizeIndex: "",
          activeColor: action.payload,
          colorList: test.sortedProductsByColor[action.payload],
        };
      case "quantity":
        return {
          ...state,
          quantity: action.payload,
        };
      case "size":
        return {
          ...state,
          sizeIndex: action.payload,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({ type: event.target.name, payload: event.target.value });
  };
  const { addVariantToCart } = useContext(StoreContext);
  const handleSubmit = () => console.log("SUBMIT!");

  return (
    <ProductFormRoot onSubmit={handleSubmit}>
      <ColorWrapper>
        <h5>
          {state.activeColor.length === 0
            ? `Choose a color below.`
            : `Color: ${state.activeColor}`}
        </h5>
        <div className="colorPalette">
          {test.colorPalette.map((color) => (
            <ColorLabel
              title={color.title}
              activeTitle={state.activeColor}
              key={color.title}
              htmlFor={color.title}
              className="color_label"
              style={{
                backgroundImage: `url(${color.colorImg})`,
              }}
            >
              <input
                value={color.title}
                className="color_input"
                onChange={(e) => handleChange(e)}
                checked={color.title === state.activeColor}
                type="checkbox"
                name="color"
                id={color.title}
                label={color.title}
              />
              {console.log(state)}
            </ColorLabel>
          ))}
        </div>
      </ColorWrapper>
      <QtyFieldset>
        <Label htmlFor="quantity">Qty.</Label>
        <Input
          type="number"
          inputmode="numeric"
          id="quantity"
          disabled={!state.colorList || state.sizeIndex.length === 0}
          name="quantity"
          min="1"
          step="1"
          max={maxQty}
          onChange={(e) => handleChange(e)}
          value={state.quantity}
        />
      </QtyFieldset>
      <SizeFieldset>
        <Label htmlFor="size">Size</Label>
        <Select
          as="select"
          id="size"
          value={state.sizeIndex}
          name="size"
          onChange={(e) => handleChange(e)}
          disabled={state.activeColor.length === 0}
        >
          <option disabled value="">
            Choose Size
          </option>
          {state.activeColor.length !== 0 &&
            state.colorList.map((item, index) => {
              const temp = item.title.split(" / ");
              return (
                <option value={index} key={item.shopifyId}>
                  {`${temp[0]} - $${item.price}`}
                </option>
              );
            })}
        </Select>
      </SizeFieldset>
      <AddToCartButton
        type="submit"
        disabled={
          state.activeColor.length === 0 || state.sizeIndex.length === 0
        }
      >
        Add to Cart
        <ShopingCart />
      </AddToCartButton>
      <PriceRange compareAtPrice={state.compareAtPrice}>
        {state.sizeIndex === "" ? (
          <>
            <small>Price Range</small>
            <h4>{state.price}</h4>
          </>
        ) : (
          <>
            <small>
              {state.compareAtPrice === null
                ? "Total"
                : `$${state.compareAtPrice}`}
            </small>
            <h4>{`$${state.price ? state.price : "error"}`}</h4>
          </>
        )}
      </PriceRange>
    </ProductFormRoot>
  );
}

ProductForm.defaultProps = {
  maxQty: 10,
};

ProductForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  titleOfProduct: PropTypes.string.isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  maxQty: PropTypes.number,
};

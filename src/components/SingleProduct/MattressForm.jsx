/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-danger */
import { useContext, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Fieldset,
  Input,
  Label,
  Select,
  Submit2,
} from "../shared/FormElements";
import {
  colors,
  // radius,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../utils/styles";
import ShopingCart from "../../assets/shopping-cart-solid.svg";
import StoreContext from "../../context/StoreContext";

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

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing["8"]} ${spacing["2"]};
  padding-top: 0;
  .fieldset {
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing["10"]} ${spacing["8"]} 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 600px;
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

const AddToCartButton = styled(Submit2)`
  align-self: flex-end;
  flex-grow: 1;
  @media print {
    display: none;
  }
`;

const MattressForm = ({
  variants,
  priceMin,
  priceMax,
  matt,
  boxVariants,
  shopifyBase,
  maxQty,
}) => {
  const initialState = {
    boxIndex: "",
    boxVariants: null,
    boxDisabled: true,
    adjBase: shopifyBase ? shopifyBase.variants : null,
    twoInchBox: boxVariants ? boxVariants[0].variants : null,
    fiveInchBox: boxVariants ? boxVariants[1].variants : null,
    nineInchBox: boxVariants ? boxVariants[2].variants : null,
    quantity: 1,

    price:
      variants.length === 1
        ? variants[0].price
        : `$${Number(priceMin).toFixed(2)} - $${Number(priceMax).toFixed(2)}`,
    variantIndex: variants.length === 1 ? 0 : "",
    compareAtPrice: null,
  };
  const { addVariantToCart } = useContext(StoreContext);
  function comparePrice(price, compare) {
    if (compare) {
      return Number(compare);
    }
    return Number(price);
  }
  function doesBoxExist(bool, index) {
    if (bool) {
      if (index === "" || index === "4") {
        return false;
      }
      return true;
    }
    return false;
  }
  const reducer = (state, action) => {
    let newBoxs;
    let newPrice;
    let newBoxPrice;
    let newAdj;
    let newCompareAtPrice;
    let newCompareBoxPrice;
    let newQuantity = "1";
    switch (action.type) {
      case "variant":
        newAdj = shopifyBase
          ? state.adjBase.filter(
              (a) => a.title === variants[action.payload].title,
            )
          : null;

        newBoxs = boxVariants
          ? [
              ...state.twoInchBox.filter(
                (a) => a.title === variants[action.payload].title,
              ),
              ...state.fiveInchBox.filter(
                (a) => a.title === variants[action.payload].title,
              ),
              ...state.nineInchBox.filter(
                (a) => a.title === variants[action.payload].title,
              ),
            ]
          : null;
        if (newAdj) newBoxs.push(newAdj[0]);
        newPrice = Number(variants[action.payload].price);
        newCompareAtPrice =
          variants[action.payload].compareAtPrice !== null
            ? variants[action.payload].compareAtPrice
            : null;
        return {
          ...state,
          boxVariants: newBoxs,
          variantIndex: action.payload,
          quantity: 1,
          boxIndex: "",
          boxDisabled: false,
          price: newPrice.toFixed(2),
          compareAtPrice: newCompareAtPrice,
        };
      case "foundation":
        newPrice =
          action.payload !== "4"
            ? (Number(variants[state.variantIndex].price) +
                Number(state.boxVariants[action.payload].price)) *
              state.quantity
            : Number(variants[state.variantIndex].price) * state.quantity;

        newCompareAtPrice =
          action.payload !== "4"
            ? (comparePrice(
                variants[state.variantIndex].price,
                variants[state.variantIndex].compareAtPrice,
              ) +
                comparePrice(
                  state.boxVariants[action.payload].price,
                  state.boxVariants[action.payload].compareAtPrice,
                )) *
              state.quantity
            : comparePrice(
                variants[state.variantIndex].price,
                variants[state.variantIndex].compareAtPrice,
              ) * state.quantity;
        return {
          ...state,
          boxIndex: action.payload,
          price: newPrice.toFixed(2),
          compareAtPrice:
            newPrice === newCompareAtPrice
              ? null
              : newCompareAtPrice.toFixed(2),
        };
      case "quantity":
        newQuantity = action.payload === "0" ? "1" : action.payload;
        newQuantity = Number(action.payload) > maxQty ? maxQty : newQuantity;
        newBoxPrice = doesBoxExist(matt, state.boxIndex)
          ? Number(state.boxVariants[state.boxIndex].price)
          : 0;
        newCompareBoxPrice = doesBoxExist(matt, state.boxIndex)
          ? comparePrice(
              state.boxVariants[state.boxIndex].price,
              state.boxVariants[state.boxIndex].compareAtPrice,
            )
          : 0;
        newPrice =
          variants.length === 1
            ? Number(variants[0].price) * Number(newQuantity)
            : (Number(variants[state.variantIndex].price) + newBoxPrice) *
              Number(newQuantity);
        newCompareAtPrice =
          variants.length === 1
            ? comparePrice(variants[0].price, variants[0].compareAtPrice) *
              Number(newQuantity)
            : (comparePrice(
                variants[state.variantIndex].price,
                variants[state.variantIndex].compareAtPrice,
              ) +
                newCompareBoxPrice) *
              Number(newQuantity);
        return {
          ...state,
          price: newPrice.toFixed(2),
          quantity: newQuantity,
          compareAtPrice:
            newPrice === newCompareAtPrice
              ? null
              : newCompareAtPrice.toFixed(2),
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.boxIndex === "" || state.boxIndex === "4") {
      addVariantToCart(variants[state.variantIndex].shopifyId, state.quantity);
    } else {
      const extra = {
        variantId: state.boxVariants[state.boxIndex].shopifyId,
        quantity: parseInt(state.quantity, 10),
      };
      addVariantToCart(
        variants[state.variantIndex].shopifyId,
        state.quantity,
        extra,
      );
    }
  };

  const hasVariants = variants.length > 1;
  return (
    <Form onSubmit={handleSubmit}>
      {hasVariants && (
        <>
          <QtyFieldset>
            <Label htmlFor="quantity">Qty.</Label>
            <Input
              type="number"
              inputmode="numeric"
              id="quantity"
              disabled={state.variantIndex.length === 0}
              name="quantity"
              min="1"
              step="1"
              max={maxQty}
              onChange={(e) =>
                dispatch({ type: e.target.name, payload: e.target.value })
              }
              value={state.quantity}
            />
          </QtyFieldset>
          <SizeFieldset>
            <Label htmlFor="variant">Size</Label>
            <Select
              as="select"
              id="variant"
              value={state.variantIndex}
              name="variant"
              onChange={(e) =>
                dispatch({ type: e.target.name, payload: e.target.value })
              }
            >
              <option disabled value="">
                Choose Size
              </option>
              {variants.map((item, index) => (
                <option value={index} key={item.shopifyId}>
                  {`${item.title} - $${item.price}`}
                </option>
              ))}
            </Select>
          </SizeFieldset>
        </>
      )}

      {matt && (
        <SizeFieldset>
          <Label htmlFor="foundation">Foundation</Label>
          <Select
            as="select"
            id="foundation"
            value={state.boxIndex}
            name="foundation"
            disabled={state.boxDisabled}
            onChange={(e) =>
              dispatch({ type: e.target.name, payload: e.target.value })
            }
          >
            <option disabled value="">
              Choose Foundation
              {state.boxVariants ? ` - $${state.boxVariants[0].price}` : null}
            </option>
            <option value={4}>No Foundation - $0</option>
            <option value={0}>2&quot; Low Foundation</option>
            <option value={1}>5&quot; Flat Foundation</option>
            <option value={2}>9&quot; Flat Foundation</option>
            {shopifyBase && <option disabled>──────────</option>}
            {shopifyBase && (
              <option value={3}>
                {`${shopifyBase.title} - 
              $${state.boxVariants && state.boxVariants[3].price}`}
              </option>
            )}
          </Select>
        </SizeFieldset>
      )}
      {!hasVariants ? (
        <div style={{ display: "flex", width: "100%" }}>
          <QtyFieldset>
            <Label htmlFor="quantity">Qty.</Label>
            <Input
              type="number"
              inputmode="numeric"
              id="quantity"
              disabled={state.variantIndex.length === 0}
              name="quantity"
              min="1"
              step="1"
              max={maxQty}
              onChange={(e) =>
                dispatch({ type: e.target.name, payload: e.target.value })
              }
              value={state.quantity}
            />
          </QtyFieldset>
          <AddToCartButton type="submit">
            Add to Cart
            <ShopingCart />
          </AddToCartButton>
        </div>
      ) : (
        <AddToCartButton
          type="submit"
          disabled={state.variantIndex.length === 0}
        >
          Add to Cart
          <ShopingCart />
        </AddToCartButton>
      )}
      <PriceRange compareAtPrice={state.compareAtPrice}>
        {state.variantIndex === "" ? (
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
    </Form>
  );
};
MattressForm.defaultProps = {
  matt: false,
  boxVariants: null,
  shopifyBase: null,
  maxQty: 10,
};
MattressForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  matt: PropTypes.bool,
  boxVariants: PropTypes.instanceOf(Object),
  shopifyBase: PropTypes.instanceOf(Object),
  maxQty: PropTypes.number,
};
export default MattressForm;

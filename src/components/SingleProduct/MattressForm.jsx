/* eslint-disable react/no-danger */
import React, { useContext, useState, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fieldset, Input, Label, Select, Submit } from "../shared/FormElements";
import {
  colors,
  radius,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../utils/styles";
import ShopingCart from "../../assets/shopping-cart-solid.svg";
import StoreContext from "../../context/StoreContext";
import ErrorIcon from "../../assets/exclamation-triangle-solid.svg";

const PriceRange = styled.div`
  font-family: ${fonts.sans};
  padding-top: 20px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  small {
    font-weight: 300;
    color: ${colors.red["900"]};
  }
  h4 {
    font-size: ${fontSize["2xl"]};
    margin-top: 0;
    color: ${colors.blue["900"]};
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.xsm}) {
    h4 {
      font-size: ${fontSize["4xl"]};
    }
    small {
      font-size: ${fontSize.xl};
      font-weight: 300;
      color: ${colors.red["900"]};
    }
  }
  /* @media (min-width: ${breakpoints.md}) {
    h4 {
      font-size: ${fontSize["3xl"]};
    }
    small {
      font-size: ${fontSize.xl};
      font-weight: 300;
      color: ${colors.red["900"]};
    }
  } */
  @media (min-width: ${breakpoints.lg}) {
    h4 {
      font-size: ${fontSize["5xl"]};
    }
  }
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing["2"]} ${spacing["2"]} 0;

  .fieldset {
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing["10"]} ${spacing["8"]} 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    /* justify-content: flex-start;
    min-width: 420px; */
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 600px;
    /* flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    justify-content: flex-start; */
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
`;

const SizeFieldset = styled(Fieldset)`
  flex-basis: calc(100% - ${spacing["3"]} - 70px);

  ${Label} {
    justify-content: space-between;
  }
`;

const AddToCartButton = styled(Submit)`
  align-self: flex-end;
  flex-grow: 1;
  /* height: ${(props) => (props.fullWidth ? "auto" : "")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}; */
`;

const Errors = styled.div`
  /* display: ${(props) => (props.show ? "flex" : "none")}; */
  display:flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all .2s ease-in-out;
  flex-direction: row;
  margin-bottom: ${spacing["2"]};
  width: 100%;
  height: 50px;
`;

const ErrorSign = styled.div`
  align-items: center;
  background: ${colors.red["700"]};
  border-radius: ${radius.default}px 0 0 ${radius.default}px;
  color: ${colors.white};
  display: flex;
  flex-basis: 40px;
  justify-content: center;

  svg {
    height: 20px;
    width: 20px;
  }
`;

const ErrorMsgs = styled.ul`
  border: 1px dashed ${colors.red["700"]};
  border-left: none;
  border-radius: 0 ${radius.default}px ${radius.default}px 0;
  color: ${colors.red["700"]};
  flex-grow: 1;
  margin: 0;
  list-style: none;
  font-family: ${fonts.sans};
  padding: ${spacing["2"]};
  padding-left: ${spacing["3"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    qtyDisabled: variants.length !== 1,
    price:
      variants.length === 1
        ? variants[0].price
        : `$${Number(priceMin).toFixed(2)} - $${Number(priceMax).toFixed(2)}`,
    variantIndex: variants.length === 1 ? 0 : "",
  };
  const { addVariantToCart } = useContext(StoreContext);
  const reducer = (state, action) => {
    let newBoxs;
    let newPrice;
    let newBoxPrice;
    let newAdj;
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
        return {
          ...state,
          boxVariants: newBoxs,
          variantIndex: action.payload,
          quantity: 1,
          boxIndex: "",
          boxDisabled: false,
          qtyDisabled: false,
          price: newPrice.toFixed(2),
        };
      case "foundation":
        newPrice =
          action.payload !== "4"
            ? (Number(variants[state.variantIndex].price) +
                Number(state.boxVariants[action.payload].price)) *
              state.quantity
            : Number(variants[state.variantIndex].price) * state.quantity;

        return {
          ...state,
          boxIndex: action.payload,
          price: newPrice.toFixed(2),
        };
      case "quantity":
        newBoxPrice =
          matt && state.boxIndex !== ""
            ? Number(state.boxVariants[state.boxIndex].price)
            : 0;
        newPrice =
          variants.length === 1
            ? Number(variants[0].price) * Number(action.payload)
            : (Number(variants[state.variantIndex].price) + newBoxPrice) *
              Number(action.payload);
        return {
          ...state,
          price: newPrice.toFixed(2),
          quantity: action.payload,
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value) {
      const newErrors = errors;

      const errorIdx = newErrors.findIndex(
        (error) => error.field === event.target.name,
      );

      newErrors.splice(errorIdx, 1);

      if (~errorIdx) {
        setErrors(newErrors);
      }
    }
    dispatch({ type: event.target.name, payload: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = [];

    if (state.quantity < 1) {
      newErrors.push({
        field: "quantity",
        msg: "Choose a <b>quantity</b> of 1 or more.",
      });
    }

    if (state.variantIndex === "" || state.variantIndex === ".") {
      newErrors.push({
        field: "variant",
        msg: "Please select a <b>size</b>.",
      });
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }

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
    <Form onSubmit={handleSubmit} noValidate>
      {/* <Errors show={errors.length}>
        <ErrorSign>
          <ErrorIcon />
        </ErrorSign>
        <ErrorMsgs>
          {errors.map((error) => (
            <li
              key={error.field}
              dangerouslySetInnerHTML={{ __html: error.msg }}
            />
          ))}
        </ErrorMsgs>
      </Errors> */}
      {/* <div className="fieldset"> */}
      <QtyFieldset>
        <Label htmlFor="quantity">Qty.</Label>
        <Input
          type="number"
          inputmode="numeric"
          id="quantity"
          disabled={state.qtyDisabled}
          name="quantity"
          min="1"
          step="1"
          max={maxQty}
          onChange={(e) => handleChange(e)}
          value={state.quantity}
        />
      </QtyFieldset>
      {hasVariants && (
        <SizeFieldset>
          <Label htmlFor="variant">Size</Label>
          <Select
            as="select"
            id="variant"
            value={state.variantIndex}
            name="variant"
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
          >
            <option disabled value="">
              Choose Foundation
              {state.boxVariants && ` - $${state.boxVariants[0].price}`}
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
      <AddToCartButton type="submit" fullWidth={hasVariants}>
        Add to Cart
        <ShopingCart />
      </AddToCartButton>

      <PriceRange>
        {state.variantIndex === "" ? (
          <div>
            <small>Price Range</small>
            <h4>{state.price}</h4>
          </div>
        ) : (
          <div>
            <small>Total</small>
            <h4>{`$${state.price}`}</h4>
          </div>
        )}
      </PriceRange>
      <Errors show={errors.length}>
        <ErrorSign>
          <ErrorIcon />
        </ErrorSign>
        <ErrorMsgs>
          {errors.map((error) => (
            <li
              key={error.field}
              dangerouslySetInnerHTML={{ __html: error.msg }}
            />
          ))}
        </ErrorMsgs>
      </Errors>
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

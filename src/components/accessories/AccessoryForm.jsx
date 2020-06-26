import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fieldset, Input, Label, Select, Submit } from "../shared/FormElements";
import {
  colors,
  radius,
  spacing,
  fonts,
  breakpoints,
} from "../../utils/styles";
import ShopingCart from "../../assets/shopping-cart-solid.svg";
import StoreContext from "../../context/StoreContext";
import ErrorIcon from "../../assets/exclamation-triangle-solid.svg";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing["10"]} ${spacing["4"]} 0;
  .fieldset {
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing["10"]} ${spacing["8"]} 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    justify-content: flex-start;
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
`;

const AccessoryForm = ({ variants }) => {
  const { addVariantToCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState([]);
  const [variant, setVariant] = useState(
    variants.length === 1 ? variants[0].shopifyId : "",
  );
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
    if (event.target.name === "variant") {
      setVariant(event.target.value);
    } else {
      setQuantity(event.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (quantity < 1) {
      newErrors.push({
        field: "quantity",
        msg: "Choose a <b>quantity</b> of 1 or more.",
      });
    }

    if (variant === "" || variant === ".") {
      newErrors.push({
        field: "variant",
        msg: "PLease select a <b>size</b>.",
      });
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }

    addVariantToCart(variant, quantity);
  };

  const hasVariants = variants.length > 1;
  return (
    <Form onSubmit={handleSubmit} noValidate>
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
      <div className="fieldset">
        <QtyFieldset>
          {/* {console.log(errors, colors.red["100"])} */}
          <Label htmlFor="quantity">Qty.</Label>
          <Input
            type="number"
            inputmode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            onChange={(e) => handleChange(e)}
            value={quantity}
          />
        </QtyFieldset>
        {hasVariants && (
          <SizeFieldset>
            {console.log(errors)}
            <Label htmlFor="variant">Size</Label>
            <Select
              as="select"
              id="variant"
              value={variant}
              name="variant"
              onChange={(e) => handleChange(e)}
            >
              <option disabled value="">
                Choose Size
              </option>
              {variants.map((item) => (
                <option value={item.shopifyId} key={item.shopifyId}>
                  {item.title}
                </option>
              ))}
            </Select>
          </SizeFieldset>
        )}
      </div>
      <AddToCartButton type="submit" fullWidth={hasVariants}>
        Add to Cart
        <ShopingCart />
      </AddToCartButton>
    </Form>
  );
};

export default AccessoryForm;

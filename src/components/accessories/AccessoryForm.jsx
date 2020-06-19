import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Fieldset, Input, Label, Select, Submit } from "../shared/FormElements";
import { breakpoints, colors, spacing, radius } from "../../utils/styles";
import ShopingCart from "../../assets/shopping-cart-solid.svg";
import StoreContext from "../../context/StoreContext";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacing["10"]} ${spacing["4"]} 0;

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

const AccessoryForm = ({ variants }) => {
  const { addVariantToCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(
    variants.length === 1 ? variants[0].shopifyId : "",
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    addVariantToCart(variant, quantity);
  };
  const hasVariants = variants.length > 1;
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <QtyFieldset>
        <Label htmlFor="quantity">Qty.</Label>
        <Input
          type="number"
          inputmode="numeric"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </QtyFieldset>
      {hasVariants && (
        <SizeFieldset>
          <Label htmlFor="variant">Size</Label>
          <Select
            as="select"
            id="variant"
            value={variant}
            name="variant"
            onChange={(e) => setVariant(e.target.value)}
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
      <AddToCartButton type="submit" fullWidth={hasVariants}>
        Add to Cart
        <ShopingCart />
      </AddToCartButton>
    </Form>
  );
};

export default AccessoryForm;

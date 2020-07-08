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
  fontSize,
} from "../../utils/styles";
import ShopingCart from "../../assets/shopping-cart-solid.svg";
import StoreContext from "../../context/StoreContext";
import ErrorIcon from "../../assets/exclamation-triangle-solid.svg";

const PriceRange = styled.div`
  font-family: ${fonts.sans};
  padding-top: 20px;
  small {
    font-weight: 300;
    color: ${colors.red["900"]};
  }
  h4 {
    font-size: ${fontSize["4xl"]};
    margin-top: 0;
    color: ${colors.blue["900"]};
  }
`;

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
  adjBase,
}) => {
  const twoInchBox = boxVariants[0].variants;
  const fiveInchBox = boxVariants[1].variants;
  const nineInchBox = boxVariants[2].variants;
  const [boxDisabled, setBoxDisabled] = useState(true);
  const [boxIndex, setBoxIndex] = useState("");
  const [box, setBox] = useState([]);
  const { addVariantToCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState([]);
  const [price, setPrice] = useState(
    `$${Number(priceMin).toFixed(2)} - $${Number(priceMax).toFixed(2)}`,
  );
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
      const newBoxs = [
        ...twoInchBox.filter(
          (a) => a.title === variants[event.target.value].title,
        ),
        ...fiveInchBox.filter(
          (a) => a.title === variants[event.target.value].title,
        ),
        ...nineInchBox.filter(
          (a) => a.title === variants[event.target.value].title,
        ),
      ];
      setVariant(event.target.value);
      setPrice(variants[event.target.value].price);
      setBoxIndex("");
      setBoxDisabled(false);
      setBox(newBoxs);
    } else if (event.target.name === "foundation") {
      setBoxIndex(event.target.value);
      const newPrice = Number(variants[variant].price) + Number(box[0].price);
      setPrice(`$${newPrice.toFixed(2)}`);
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
        msg: "Please select a <b>size</b>.",
      });
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }
    if (boxIndex !== "") {
      const extra = { variantId: box[boxIndex].shopifyId, quantity: 1 };
      addVariantToCart(variants[variant].shopifyId, quantity, extra);
    } else {
      addVariantToCart(variants[variant].shopifyId, quantity);
    }
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
              {variants.map((item, index) => (
                <option value={index} key={item.shopifyId}>
                  {`${item.title} - $${item.price}`}
                </option>
              ))}
            </Select>
          </SizeFieldset>
        )}
      </div>
      {matt && (
        <SizeFieldset>
          <Label htmlFor="foundation">Foundation</Label>
          <Select
            as="select"
            id="foundation"
            value={boxIndex}
            name="foundation"
            disabled={boxDisabled}
            onChange={(e) => handleChange(e)}
          >
            <option disabled value="">
              Choose Foundation
              {box.length !== 0 && ` - $${box[0].price}`}
            </option>
            <option value={0}>2&quot; Low Foundation</option>
            <option value={1}>5&quot; Flat Foundation</option>
            <option value={2}>9&quot; Flat Foundation</option>
            <option disabled>──────────</option>
            <option value={3}>Adj</option>
          </Select>
        </SizeFieldset>
      )}
      <AddToCartButton type="submit" fullWidth={hasVariants}>
        Add to Cart
        <ShopingCart />
      </AddToCartButton>
      <PriceRange>
        {variant === "" ? (
          <>
            <small>Price Range</small>
            <h4>{price}</h4>
          </>
        ) : (
          <>
            <small>Total</small>
            <h4>{`${price}`}</h4>
          </>
        )}
      </PriceRange>
    </Form>
  );
};
MattressForm.defaultProps = {
  matt: false,
  boxVariants: [],
  adjBase: [],
};
MattressForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  matt: PropTypes.bool,
  boxVariants: PropTypes.instanceOf(Object),
  adjBase: PropTypes.instanceOf(Object),
};
export default MattressForm;

/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import {
  boxShadow,
  colors,
  fonts,
  fontSize,
  spacing,
  breakpoints,
} from "../../styles/theme.styled";
// import ShopingCart from "../../../svgs/shopping-cart-solid.svg";
// import {
//   ProductFormRoot,
//   PriceRange,
//   QtyFieldset,
//   SizeFieldset,
//   AddToCartButton,
// } from "./productForm.styled";
import ShopingCart from "../../svgs/shopping-cart-solid.svg";
import { AddToCartButton } from "../ProductPage/ProductForm/productForm.styled";

const ChairCartBtn = styled(AddToCartButton)`
  margin: 0;
  max-width: 640px;
  box-shadow: ${boxShadow.md};
`;
const CartWrapper = styled.div`
  /* position: sticky; */
  /* width: 100%;
  height: 100px; */
  /* background-color: ${colors.gray[100]};
  border: 1px solid ${colors.gray[800]}; */
  bottom: 0;
  right: 0;
  /* z-index: 20; */
  padding-left: 10px;
  padding-right: 10px;
  /* width: 70%; */
  .cartContent {
    display: flex;
    flex-direction: column;
    padding: ${spacing[2]};
    display: flex;
    gap: 10px;
    font-family: ${fonts.sans};
    max-width: 550px;
    margin: 0 auto;
  }
  .salePrice {
    font-size: ${fontSize["2xl"]};
  }
  .regularPrice {
    text-decoration: line-through;
    color: red;
    text-align: end;
    font-size: ${fontSize.base};
  }
  .cartPrice {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    background-color: white;
    width: 100%;
    border: none;
    .cartContent {
      padding: 0 20px;
    }
    .salePrice {
      font-size: ${fontSize["4xl"]};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: 20px;
  }
`;
export default function ChairCart({ comparePrice, price }) {
  return (
    <CartWrapper>
      <div className="cartContent">
        <div className="cartPrice">
          {comparePrice ? (
            <>
              <div className="regularPrice">{`Regular Price: $${comparePrice}`}</div>
              <div className="salePrice">{`As low as $${price}`}</div>
            </>
          ) : (
            <div className="salePrice">{`As low as $${price}`}</div>
          )}
        </div>
        <ChairCartBtn type="submit">
          Add to Cart
          <ShopingCart />
        </ChairCartBtn>
      </div>
    </CartWrapper>
  );
}

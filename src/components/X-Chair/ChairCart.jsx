/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import {
  boxShadow,
  colors,
  fonts,
  fontSize,
  spacing,
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
  position: sticky;
  /* width: 100%;
  height: 100px; */
  background-color: ${colors.gray[200]};
  border: 2px solid ${colors.gray[800]};
  bottom: 0;
  right: 0;
  z-index: 20;
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
    font-size: ${fontSize["4xl"]};
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
    align-items: center;
  }
  @media (min-width: 768px) {
    background-color: white;
    border: none;
    .cartContent {
      padding: 0 20px;
    }
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

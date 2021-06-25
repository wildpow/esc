/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { colors, spacing } from "../../../styles/theme.styled";

const CartWrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 100px;
  background-color: ${colors.gray[200]};
  border: 2px solid ${colors.gray[800]};
  bottom: 0;
  right: 0;
  z-index: 20;
  .cartContent {
    input {
      width: 40px;
    }
    button {
      padding: 10px;
    }
    padding: ${spacing[8]};
    display: flex;
    gap: 10px;
  }
  .regularPrice {
    text-decoration: line-through;
    color: red;
  }
`;
export default function ChairCart({ comparePrice, price }) {
  return (
    <CartWrapper>
      <div className="cartContent">
        <input type="number" name="" id="" />
        <button type="submit">Add to Cart</button>
        <div className="cartPrice">
          {comparePrice ? (
            <>
              <div className="regularPrice">{`Regular Price: $${comparePrice}`}</div>
              <div>{`As low as $${price}`}</div>
            </>
          ) : (
            <div>{`As low as $${price}`}</div>
          )}
        </div>
      </div>
    </CartWrapper>
  );
}

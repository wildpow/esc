import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { number, bool } from "prop-types";
import { fonts, colors } from "../../styles/theme.styled";
import { numberEntry2 } from "../../styles/keyframes.styled";
// ${({ adding }) => (adding ? addingProduct : notAddingProduct)}

const productsInCart = (props) =>
  props.adding
    ? css`
        transform: ${({ adding }) => (adding ? "scale(.3)" : "scale(0.75)")};
      `
    : css`
        animation: ${numberEntry2} 0.75s ease forwards;
      `;

const ItemsNumber = styled.span`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  background: ${colors.yellow["400"]};
  border-radius: 50%;
  color: ${colors.gray["900"]};
  display: flex;
  font-size: 1.45rem;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  width: 36px;
  font-family: ${fonts.sans};

  position: absolute;
  right: 0rem;
  top: 0rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  ${productsInCart}
`;
const Numbery = styled.span`
  transition: all 0.2s ease-in-out;
  opacity: ${({ adding }) => (adding ? 0 : 1)};
`;
export default function CartItemCounter({ adding, count }) {
  return (
    <ItemsNumber adding={adding}>
      <Numbery adding={adding}>{count}</Numbery>
    </ItemsNumber>
  );
}

CartItemCounter.propTypes = {
  adding: bool.isRequired,
  count: number.isRequired,
};

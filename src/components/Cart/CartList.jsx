import styled from "styled-components";
import PropTypes from "prop-types";
import CartListItem from "./CartListItem";
import { colors, spacing, fonts } from "../../styles/theme.styled";

const CartListRoot = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Headers = styled.div`
  border-bottom: 1px solid ${colors.gray["400"]};
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.sans};
  color: ${colors.blue["900"]};
  span {
    /* color: ${colors.green}; */
    flex-basis: 60px;
    flex-grow: 0;
    font-size: 0.8rem;
    padding-bottom: ${spacing["2"]};
    text-align: center;

    &:first-of-type {
      flex-grow: 1;
      text-align: left;
    }
  }
`;

const CartList = ({
  items,
  handleRemove,
  updateQuantity,
  setCartLoading,
  isCartLoading,
}) => (
  <>
    <Headers>
      <span>Product</span>
      <span>Qty.</span>
      <span>Remove</span>
    </Headers>
    <CartListRoot>
      {items.map((item) => (
        <CartListItem
          key={item.id}
          item={item}
          handleRemove={handleRemove(item.id)}
          updateQuantity={updateQuantity(item.id)}
          setCartLoading={setCartLoading}
          isCartLoading={isCartLoading}
        />
      ))}
    </CartListRoot>
  </>
);
CartList.defaultProps = {
  isCartLoading: false,
};
CartList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  setCartLoading: PropTypes.func.isRequired,
  isCartLoading: PropTypes.bool,
};
export default CartList;

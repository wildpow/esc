import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartCtx = createContext();

const CartProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState("closed");
  return (
    <CartCtx.Provider value={{ cartStatus, setCartStatus }}>
      {children}
    </CartCtx.Provider>
  );
};
export default CartProvider;
export const useCart = () => useContext(CartCtx);
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

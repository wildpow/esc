import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import LineItem from "../components/ecom/lineItem";
import Layout from "../components/layout/index";

const CartPage = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };
  const lineItems = checkout.lineItems.map((item) => (
    <LineItem key={item.id.toString()} item={item} />
  ));

  return (
    <Layout>
      <div>
        {lineItems}
        <h2>Subtotal</h2>
        <p>
          {`$${checkout.subtotalPrice}
        `}
        </p>
        <br />
        <h2>Taxes</h2>
        <p>{`$${checkout.totalTax}`}</p>
        <br />
        <h2>Total</h2>
        <p>{`$${checkout.totalPrice}`}</p>
        <br />
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
          type="button"
        >
          Check out
        </button>
      </div>
    </Layout>
  );
};

export default CartPage;

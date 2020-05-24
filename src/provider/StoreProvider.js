import React, { useState, useEffect } from "react";
import Client from "shopify-buy";

import StoreContext from "../context/StoreContext";

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_API,
  domain: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
});

const StoreProvider = ({ children }) => {
  const initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const [store, updateStore] = useState(initialStoreState);

  useEffect(() => {
    const initializeCheckout = async () => {
      const isBrowser = typeof window !== "undefined";
      const existingCheckoutID = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null;

      const setCheckoutInState = (checkout) => {
        if (isBrowser) {
          localStorage.setItem("shopify_checkout_id", checkout.id);
        }

        updateStore((prevState) => {
          return { ...prevState, checkout };
        });
      };

      const createNewCheckout = () => store.client.checkout.create();
      const fetchCheckout = (id) => store.client.checkout.fetch(id);

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID);
          if (!checkout.completedAt) {
            setCheckoutInState(checkout);
            return;
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null);
        }
      }

      const newCheckout = await createNewCheckout();
      setCheckoutInState(newCheckout);
    };

    initializeCheckout();
  }, [store.client.checkout]);

  return (
    <StoreContext.Provider
      value={{
        store,
        addVariantToCart: (variantId, quantity) => {
          if (variantId === "" || !quantity) {
            // eslint-disable-next-line no-console
            console.error("Both a size and quantity are required.");
            return;
          }
          updateStore((prevState) => {
            console.log("POOOOOOOOOP", prevState);
            return { ...prevState, adding: true };
          });

          const { checkout, client } = store;

          const checkoutId = checkout.id;
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ];

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then((checkout) => {
              updateStore((prevState) => {
                return { ...prevState, checkout, adding: false };
              });
            });
        },
        removeLineItem: (client, checkoutID, lineItemID) => {
          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then((res) => {
              updateStore((prevState) => {
                return { ...prevState, checkout: res };
              });
            });
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ];

          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then((res) => {
              updateStore((prevState) => {
                return { ...prevState, checkout: res };
              });
            });
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;

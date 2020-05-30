import React, { useContext } from "react";
import reduce from "lodash/reduce";
import VisuallyHidden from "@reach/visually-hidden";
import TopPromo from "./TopPromo";
import StoreContext from "../../../../context/StoreContext";
import { Top, OutBoundLink, InboundLink } from "./topper.styles";
import { TopperNumber } from "../../../../styles/_pr1nt/main";
import cart from "../../../../images/shopping-cart-solid.svg";
import phone from "../../../../images/phone-square-solid.svg";
import phone2 from "../../../../images/phone-solid.svg";

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const items = checkout ? checkout.lineItems : [];
  const total = reduce(items, (acc, item) => acc + item.quantity, 0);
  return [total !== 0, total];
};

const Topper = ({ menuToggle }) => {
  const [hasItems, quantity] = useQuantity();
  return (
    <>
      <TopperNumber>Call: (425)-512-0017</TopperNumber>
      <Top menuToggle={menuToggle} aria-hidden>
        <TopPromo />

        <div>
          <OutBoundLink href="tel:1-425-512-0017">
            <VisuallyHidden>store phone number 425-512-0017</VisuallyHidden>
            <span aria-hidden>
              <img src={phone} style={{ height: "25px" }} alt="phone icon" />
            </span>
          </OutBoundLink>
          <InboundLink to="/cart">
            <VisuallyHidden>shoping cart</VisuallyHidden>
            {hasItems && <span>{quantity}</span>}
            <span aria-hidden>
              <img
                src={cart}
                style={{ height: "25px", marginLeft: "15px" }}
                alt="Shopping cart icon"
              />
            </span>
          </InboundLink>
        </div>
      </Top>
    </>
  );
};

export default Topper;

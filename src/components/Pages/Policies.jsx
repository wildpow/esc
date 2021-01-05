import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { MainArticle, P, Heading } from "./Warranty_policy.styled";
import { H2 } from "../../styles/mainStyles";

const PoliciesComponent = ({ seo }) => (
  <MainArticle>
    <HelmetDatoCms seo={seo} />
    <header>
      <H2>Terms and Policies</H2>
    </header>
    <Heading>365 Day Comfort Guarantee</Heading>
    <P>
      It will take anywhere from 30 to 90 nights for your new mattress to break
      in and for your body to adjust to the new support and comfort. Because of
      this, we require that you sleep on your new mattress for a minimum of 30
      nights to allow for adjustment. However, if you are not comfortable within
      90 days of your original mattress’s delivery date, you may exchange or
      return your mattress one time in this period.
    </P>
    <P>
      Delivery and set up fees are non-refundable. We do not charge restocking
      fees, only a redelivery fee of $79.99. E.S.C. Mattress Center is unable to
      exchange or refund any mattress that is stained, soiled, or in any way
      damaged under this guarantee. Do not remove the Law Label from your
      mattress or foundation, doing so will void your 365 Day Comfort Guarantee.
      Any mattress purchase $699 and above also receives an additional 275 days
      of exchange only guarantee for equal or greater value (total of 365 day).
      Please be aware that our Comfort Guarantee does not cover, Clearance
      merchandise, Floor models, Warranty exchanges, Furniture (Headboards,
      Footboards, other), Adjustable bases, Pillows, Mattress protectors,
      X-Chair, CordaRoy’s, Futons, or other accessories. See associate for more
      details.
    </P>
    <Heading>Low Price Guarantee</Heading>
    <P>
      E.S.C. Mattress Center guarantees to meet, or beat, any other licensed
      retailer’s price on the same or comparable mattress set advertised for
      less than your invoiced price within 90 days of purchase. Bring in the
      advertisement and we will refund you the difference within 14 days. Note:
      Products for sale on auction sites, such as eBay, Craigslist, etc. are
      excluded. Applies to new product only.
    </P>
    <Heading>Delivery</Heading>
    <P>
      As a small business, we do most of our deliveries ourselves. E.S.C.
      Mattress Center is not responsible for any loss or damage caused during
      delivery. Please make sure there is a clear path from the door to the area
      you would like your mattress set placed. Removal is limited to number of
      pieces being delivered and is limited to mattresses and foundations.
      Frames, furniture, waterbeds, etc. cannot be removed.
    </P>
    <P>
      If you choose to pick up your product, you should inspect your items
      carefully prior to leaving our store. We recommend the use of a covered
      truck for transporting mattress sets. If requested, we will help you load
      and secure the merchandise into your vehicle, at your sole risk. E.S.C.
      Mattress Center cannot be responsible for any damaged caused by our
      assistance. Any claim for loss or damage due to the transportation of
      merchandise will be the sole responsibility of the customer.
    </P>
  </MainArticle>
);

export default PoliciesComponent;

PoliciesComponent.propTypes = {
  seo: PropTypes.instanceOf(Object).isRequired,
};

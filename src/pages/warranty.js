import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Old from "../oldStyles.styled";
import Styled from "../Styles/warrranty_policy.styled";

const Warranty = ({ data }) => (
  <Layout>
    <Styled.MainArticle>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <header>
        <Old.H2>Mattress Warranty Information</Old.H2>
      </header>
      <Styled.P>
        Warranty requirements are determined by the manufacturer and details
        will be set forth in the warranty card attached to your new mattress
        set. All warranty claims will be handled through the manufacturer.
        Please read the warranty card for requirements and instructions.
      </Styled.P>
      <Styled.P>
        The four things to be aware of that will void a mattress warranty are:
        improper support from the frame, improper support from the foundation,
        stains and soils, or removing the law label. Remember, body impressions
        up to 1-1/2” are a considered a normal occurrence with any new mattress
        and is not an indication of structural failure. The comfort layer of the
        mattress is simply contouring to your natural curves, to give you the
        proper support and comfort that your body needs.
      </Styled.P>
      <Styled.WarrantyTopper>
        To initiate a mattress warranty claim you may contact your mattress
        manufacturer via the phone number below.
      </Styled.WarrantyTopper>
      <Styled.WarrantyWrapper>
        <Styled.WarranyName>Sealy Mattress Warranty Service</Styled.WarranyName>
        <Styled.WarranyNumber href="tel:1-800-697-3259">
          1-800-697-3259
        </Styled.WarranyNumber>

        <Styled.WarranyName>
          Stearns & Foster Mattress Warranty Service
        </Styled.WarranyName>
        <Styled.WarranyNumber href="tel:1-866-783-2767">
          1-866-783-2767
        </Styled.WarranyNumber>

        <Styled.WarranyName>
          Tempur-PEDIC Mattress Warranty Service
        </Styled.WarranyName>
        <Styled.WarranyNumber href="tel:1-800-821-6621">
          1-800-821-6621
        </Styled.WarranyNumber>
      </Styled.WarrantyWrapper>
    </Styled.MainArticle>
  </Layout>
);

Warranty.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const warrantySEO = graphql`
  query warrantySEO {
    datoCmsSeo(name: { eq: "warranty" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Warranty;

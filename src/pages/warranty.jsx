import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import {
  MainArticle,
  P,
  WarranyName,
  WarranyNumber,
  WarrantyWrapper,
  WarrantyTopper,
} from "../styles/warranty-policy.styled";
import H2 from "../old/oldHeading.styled";

const Warranty = ({ data }) => (
  <Layout>
    <MainArticle>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <header>
        <H2>Mattress Warranty Information</H2>
      </header>
      <P>
        Warranty requirements are determined by the manufacturer and details
        will be set forth in the warranty card attached to your new mattress
        set. All warranty claims will be handled through the manufacturer.
        Please read the warranty card for requirements and instructions.
      </P>
      <P>
        The four things to be aware of that will void a mattress warranty are:
        improper support from the frame, improper support from the foundation,
        stains and soils, or removing the law label. Remember, body impressions
        up to 1-1/2” are a considered a normal occurrence with any new mattress
        and is not an indication of structural failure. The comfort layer of the
        mattress is simply contouring to your natural curves, to give you the
        proper support and comfort that your body needs.
      </P>
      <WarrantyTopper>
        To initiate a mattress warranty claim you may contact your mattress
        manufacturer via the phone number below.
      </WarrantyTopper>
      <WarrantyWrapper>
        <WarranyName>Sealy Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-800-697-3259">1-800-697-3259</WarranyNumber>

        <WarranyName>Stearns & Foster Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-866-783-2767">1-866-783-2767</WarranyNumber>

        <WarranyName>Tempur-PEDIC Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-800-821-6621">1-800-821-6621</WarranyNumber>
      </WarrantyWrapper>
    </MainArticle>
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

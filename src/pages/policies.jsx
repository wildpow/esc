import { graphql } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import HeroCard from "../components/HeroCard";
import { Title, InfoPara } from "../styles/warranty-policy.styled";
import {
  colors,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../styles/theme.styled";

const SecondTitle = styled.h3`
  margin: 0;
  margin-bottom: ${spacing[3]};
  /* margin-top: ${spacing[10]}; */
  font-family: ${fonts.sans};
  font-size: ${fontSize.xl};
  line-height: 1.75rem;
  font-weight: 500;
  border-bottom: 4px solid ${colors.red[800]};
  color: ${colors.gray[700]};
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize["2xl"]};
  }
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${fontSize["3xl"]};
    line-height: 2.25rem /* 36px */;
  }
`;

const Policies = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <HeroCard
        alt="E.S.C. Mattress Centers panda mascot laying on a bed"
        image={panda.childImageSharp.gatsbyImageData}
      >
        <Title>Terms and Policies</Title>
        <SecondTitle>365 Day Comfort Guarantee</SecondTitle>
        <InfoPara>
          It will take anywhere from 30 to 90 nights for your new mattress to
          break in and for your body to adjust to the new support and comfort.
          Because of this, we require that you sleep on your new mattress for a
          minimum of 30 nights to allow for adjustment. However, if you are not
          comfortable within 90 days of your original mattress’s delivery date,
          you may exchange or return your mattress one time in this period.
        </InfoPara>
        <InfoPara>
          Delivery and set up fees are non-refundable. We do not charge
          restocking fees, only a redelivery fee of $79.99. E.S.C. Mattress
          Center is unable to exchange or refund any mattress that is stained,
          soiled, or in any way damaged under this guarantee. Do not remove the
          Law Label from your mattress or foundation, doing so will void your
          365 Day Comfort Guarantee. Any mattress purchase $699 and above also
          receives an additional 275 days of exchange only guarantee for equal
          or greater value (total of 365 day). Please be aware that our Comfort
          Guarantee does not cover, Clearance merchandise, Floor models,
          Warranty exchanges, Furniture (Headboards, Footboards, other),
          Adjustable bases, Pillows, Mattress protectors, X-Chair, CordaRoy’s,
          Futons, or other accessories. See associate for more details.
        </InfoPara>
        <SecondTitle>Low Price Guarantee</SecondTitle>
        <InfoPara>
          E.S.C. Mattress Center guarantees to meet, or beat, any other licensed
          retailer’s price on the same or comparable mattress set advertised for
          less than your invoiced price within 90 days of purchase. Bring in the
          advertisement and we will refund you the difference within 14 days.
          Note: Products for sale on auction sites, such as eBay, Craigslist,
          etc. are excluded. Applies to new product only.
        </InfoPara>
        <SecondTitle>Delivery</SecondTitle>
        <InfoPara>
          As a small business, we do most of our deliveries ourselves. E.S.C.
          Mattress Center is not responsible for any loss or damage caused
          during delivery. Please make sure there is a clear path from the door
          to the area you would like your mattress set placed. Removal is
          limited to number of pieces being delivered and is limited to
          mattresses and foundations. Frames, furniture, waterbeds, etc. cannot
          be removed.
        </InfoPara>
        <InfoPara>
          If you choose to pick up your product, you should inspect your items
          carefully prior to leaving our store. We recommend the use of a
          covered truck for transporting mattress sets. If requested, we will
          help you load and secure the merchandise into your vehicle, at your
          sole risk. E.S.C. Mattress Center cannot be responsible for any
          damaged caused by our assistance. Any claim for loss or damage due to
          the transportation of merchandise will be the sole responsibility of
          the customer.
        </InfoPara>
      </HeroCard>
    </Layout>
  );
};

Policies.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const policiesSEO = graphql`
  query policiesSEO {
    panda: file(relativePath: { eq: "warranty_policy.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AVIF, WEBP, JPG, AUTO]
          layout: CONSTRAINED
          width: 1536
          height: 415
        )
      }
    }
    seo: datoCmsSeo(name: { eq: "terms and policies" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
export default Policies;

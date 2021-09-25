import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";

const BRLanding = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here={data.datoCmsBrand.displayName} />
    </BreadWrapper>
    <Landing
      data={data.datoCmsBrand.landingPage}
      buttonName="Beautyrest"
      buttonURL="/brands/beautyrest"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here={data.datoCmsBrand.displayName} />
    </BreadWrapper>
  </Layout>
);

BRLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const landingTemplete = graphql`
  query landingTemplete($urlName: String!) {
    datoCmsBrand(urlName: { eq: $urlName }) {
      urlName
      displayName
      landingPage {
        ...landing
      }
    }
  }
`;

export default BRLanding;

import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";

const LandingPage = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper Brands>
      <BreadCrumbs
        next="Brands"
        next2={data.datoCmsBrand.displayName}
        here="Landing"
        brandLanding={data.datoCmsBrand.urlName}
      />
    </BreadWrapper>
    <Landing
      data={data.datoCmsBrand.landingPage}
      buttonName={data.datoCmsBrand.displayName}
      buttonURL={`/brands/list?brand=${data.datoCmsBrand.urlName}`}
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here={data.datoCmsBrand.displayName} />
    </BreadWrapper>
  </Layout>
);

LandingPage.propTypes = {
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

export default LandingPage;

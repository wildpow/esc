import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/BreadCrumbs";

const HarvestGreen = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="harvest-green" />
    </BreadWrapper>
    <Landing
      data={data.datoCmsLanding}
      buttonName="Harvest Green"
      buttonURL="/brands/harvest-green"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Harvest Green" />
    </BreadWrapper>
  </Layout>
);

HarvestGreen.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const HarvestGreenLandingPage = graphql`
  query HarvestGreenLandingPage {
    datoCmsLanding(title: { eq: "Harvest Green" }) {
      ...landing
    }
  }
`;

export default HarvestGreen;

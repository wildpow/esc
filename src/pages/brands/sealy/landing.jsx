import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/BreadCrumbs";

const SealyLanding = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Sealy" />
    </BreadWrapper>
    <Landing
      data={data.datoCmsLanding}
      buttonName="Sealy"
      buttonURL="/brands/sealy"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Sealy" />
    </BreadWrapper>
  </Layout>
);

SealyLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const sealyLandingPage = graphql`
  query sealyLandingPage {
    datoCmsLanding(title: { eq: "sealy" }) {
      ...landing
    }
  }
`;

export default SealyLanding;

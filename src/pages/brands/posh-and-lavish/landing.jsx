import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/BreadCrumbs";

const PoshAndLavishLanding = ({ data }) => (
  <Layout>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="posh-and-lavish" />
    </BreadWrapper>
    <Landing
      data={data.datoCmsLanding}
      buttonName="Posh + Lavish"
      buttonURL="/brands/posh-and-lavish"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="posh-and-lavish" />
    </BreadWrapper>
  </Layout>
);

PoshAndLavishLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const PoshAndLavishLandingPage = graphql`
  query PoshAndLavishLandingPage {
    datoCmsLanding(title: { eq: "Posh_And_Lavish" }) {
      ...landing
    }
  }
`;

export default PoshAndLavishLanding;

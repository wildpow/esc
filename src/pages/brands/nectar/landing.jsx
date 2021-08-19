import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/BreadCrumbs";

const Nectar = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Nectar" />
    </BreadWrapper>
    <Landing
      data={data.datoCmsLanding}
      buttonName="Nectar"
      buttonURL="/brands/nectar"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Nectar" />
    </BreadWrapper>
  </Layout>
);

Nectar.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

// Waitng on content!!!
export const NectarLandingPage = graphql`
  query nectarLandingPage {
    datoCmsLanding(title: { eq: "nectar" }) {
      ...landing
    }
  }
`;

export default Nectar;

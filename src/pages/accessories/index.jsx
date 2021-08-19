import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import Landing from "../../components/Landing";
import BreadCrumbs, { BreadWrapper } from "../../components/BreadCrumbs";

const AccessoryLanding = ({ data }) => (
  <Layout bgWhite>
    <BreadWrapper hiddenLarge>
      <BreadCrumbs here="Accessories" />
    </BreadWrapper>

    <Landing
      acc
      data={data.datoCmsLanding}
      buttonName="Accessories"
      buttonURL="/accessories/list"
    />

    <BreadWrapper Brands hiddenLarge>
      <BreadCrumbs here="Accessories" Bottom />
    </BreadWrapper>
  </Layout>
);

AccessoryLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const AccessoryLandingPage = graphql`
  query AccessoryLandingPage {
    datoCmsLanding(title: { eq: "Accessory Landing" }) {
      ...landing
    }
  }
`;

export default AccessoryLanding;

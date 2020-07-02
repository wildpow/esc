import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/breadCrumbs";

const BRLanding = ({ data }) => (
  <Layout>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Beautyrest" />
    </BreadWrapper>
    <Landing
      data={data.datoCmsLanding}
      buttonName="Beautyrest"
      buttonURL="/brands/beautyrest"
    />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Beautyrest" />
    </BreadWrapper>
  </Layout>
);

BRLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const BRLandingPage = graphql`
  query BRLandingPage {
    datoCmsLanding(title: { eq: "beautyrest" }) {
      ...landing
    }
  }
`;

export default BRLanding;

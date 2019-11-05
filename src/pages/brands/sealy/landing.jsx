import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/breadCrumbs";

const SealyLanding = ({ data }) => (
  <Layout>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Sealy" />
    </BreadWrapper>
    <Landing data={data.datoCmsLanding} />
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

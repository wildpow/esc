import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";

const SealyLanding = ({ data }) => (
  <Layout>
    <Landing data={data.datoCmsLanding} />
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

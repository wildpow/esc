import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";

const TempurLanding = ({ data }) => (
  <Layout>
    <Landing data={data.datoCmsLanding} />
  </Layout>
);

TempurLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const TempurLandingPage = graphql`
  query tempurLandingPage {
    datoCmsLanding(title: { eq: "tempur" }) {
      ...landing
    }
  }
`;

export default TempurLanding;

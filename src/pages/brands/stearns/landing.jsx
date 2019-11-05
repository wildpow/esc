import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";

const StearnsLanding = ({ data }) => (
  <Layout>
    <Landing data={data.datoCmsLanding} />
  </Layout>
);

StearnsLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const StearnsLandingPage = graphql`
  query stearnsLandingPage {
    datoCmsLanding(title: { eq: "stearns" }) {
      ...landing
    }
  }
`;

export default StearnsLanding;

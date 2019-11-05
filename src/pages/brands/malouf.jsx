import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import Landing from "../../components/landing";

const Malouf = ({ data }) => {
  return (
    <Layout>
      <Landing data={data.datoCmsLanding} />
    </Layout>
  );
};

Malouf.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const landingPage = graphql`
  query landingPage {
    datoCmsLanding(title: { eq: "stearns" }) {
      ...landing
    }
  }
`;
export default Malouf;

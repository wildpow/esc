import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import Landing from "../../components/landing2";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";

const Nectar = ({ data }) => (
  <Layout>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Nectar" />
    </BreadWrapper>
    <Landing data={data.datoCmsLanding} />
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
    datoCmsLanding(title: { eq: "sealy" }) {
      ...landing
    }
  }
`;

export default Nectar;

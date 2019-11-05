import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/layout";
import Landing from "../../../components/landing";
import BreadCrumbs, { BreadWrapper } from "../../../components/breadCrumbs";

const StearnsLanding = ({ data }) => (
  <Layout>
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Stearns" />
    </BreadWrapper>
    <Landing data={data.datoCmsLanding} />
    <BreadWrapper Brands>
      <BreadCrumbs next="Brands" here="Landing" next2="Stearns" />
    </BreadWrapper>
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

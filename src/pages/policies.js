import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PoliciesComponent from "../components/Pages/Policies";

const Policies = ({ data }) => (
  <Layout>
    <PoliciesComponent seo={data.datoCmsSeo.seoMetaTags} />
  </Layout>
);

Policies.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const policiesSEO = graphql`
  query policiesSEO {
    datoCmsSeo(name: { eq: "terms and policies" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
export default Policies;

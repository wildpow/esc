import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import AccessoryList from "../../components/Accessories/AccessoryList";
import Layout from "../../components/Layout";

const AccessoryListingPage = ({ location, data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <AccessoryList location={location} />
  </Layout>
);

export const aboutSEO = graphql`
  query accessorySEO {
    datoCmsSeo(name: { eq: "accessories" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default AccessoryListingPage;

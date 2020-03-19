import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattList from "../../../components/mattressList";

const Stearns = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoMetaTags} />
      <MattList
        headerBG={datoCmsBrand.headerImage.url}
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.tagLine}
        breadCrumbs
        brandName={datoCmsBrand.urlName}
        landing
      />
    </Layout>
  );
};

Stearns.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Stearns;

export const stearnsMattresses = graphql`
  query stearnsMattresses {
    datoCmsBrand(urlName: { eq: "stearns" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      tagLine
      headerImage {
        alt
        url
        title
      }
      displayName
      urlName
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "stearns" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

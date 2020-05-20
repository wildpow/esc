import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/layout";
import MattList from "../../../components/mattressList";

const Beautyrest = ({ data }) => {
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
      />
    </Layout>
  );
};

Beautyrest.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const beautyrestMatt = graphql`
  query beautyrest {
    datoCmsBrand(urlName: { eq: "beautyrest" }) {
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
      filter: { brand: { urlName: { eq: "beautyrest" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

export default Beautyrest;

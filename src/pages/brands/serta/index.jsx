import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/layout";
import MattListCurrentSale from "../../../components/mattressList";

const Serta = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoMetaTags} />
      <MattListCurrentSale
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

Serta.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Serta;

export const sertaMattresses = graphql`
  query sertaMattresses {
    datoCmsBrand(urlName: { eq: "serta" }) {
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
      filter: { brand: { urlName: { eq: "serta" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

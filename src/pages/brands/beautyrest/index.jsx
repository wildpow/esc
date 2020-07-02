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
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        landing
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
      ...brandList
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

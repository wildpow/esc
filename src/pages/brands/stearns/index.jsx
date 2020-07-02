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
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
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
      ...brandList
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

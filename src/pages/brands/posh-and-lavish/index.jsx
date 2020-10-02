import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/MattressList";

const PoshAndLavish = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattressList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        button={{
          label: "Learn More",
          url: `/brands/${datoCmsBrand.urlName}/landing`,
        }}
        brandName={datoCmsBrand.urlName}
      />
    </Layout>
  );
};

PoshAndLavish.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const beautyrestMatt = graphql`
  query PoshAndLavish {
    datoCmsBrand(urlName: { eq: "posh-and-lavish" }) {
      ...brandList
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "posh-and-lavish" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

export default PoshAndLavish;

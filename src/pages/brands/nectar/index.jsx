import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/MattressList";

const Nectar = ({ data }) => {
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

Nectar.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const NectarQ = graphql`
  query nectar {
    datoCmsBrand(urlName: { eq: "nectar" }) {
      ...brandList
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "nectar" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

export default Nectar;

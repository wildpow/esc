import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import MattListCurrentSale from "../components/mattressList/currentSale";

const Sale = ({ data }) => {
  const { allDatoCmsMattress, datoCmsCurrentSale } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsCurrentSale.seoMetaTags} />
      <MattListCurrentSale
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsCurrentSale.title}
        description={datoCmsCurrentSale.description}
      />
    </Layout>
  );
};

Sale.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    allDatoCmsMattress(
      filter: {
        meta: { status: { eq: "published" } }
        saleInfo: {
          elemMatch: { saleBanner: { ne: "NEW MODEL", regex: "/[a-z]/gi" } }
        }
      }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    datoCmsCurrentSale {
      title
      description
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Sale;

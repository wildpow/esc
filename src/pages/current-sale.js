import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import MattressList from "../components/MattressList";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";

const BrandsRoot = styled.div`
  @media (min-width: 1022px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Sale = ({ data }) => {
  const { allDatoCmsNewMattress, datoCmsFrontPage } = data;
  const sortedMatt = allDatoCmsNewMattress.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
  );
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsFrontPage.currentSaleSeoLink.seoMetaTags} />
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Current Sale" />
      </BreadWrapper>
      <BrandsRoot>
        <MattressList
          headerBG={datoCmsFrontPage.currentSaleHeaderLink.bgImg.url}
          mattresses={sortedMatt}
          title={datoCmsFrontPage.currentSaleHeaderLink.title}
          description={datoCmsFrontPage.currentSaleHeaderLink.tagLine}
          button={{ label: "Shop all Mattresses", url: "/brands/list" }}
        />
      </BrandsRoot>
      <BreadWrapper hidenLarge Bottom>
        <BreadCrumbs here="Current Sale" />
      </BreadWrapper>
    </Layout>
  );
};

Sale.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    allDatoCmsNewMattress(
      filter: {
        meta: { status: { eq: "published" } }
        saleBanner: { ne: "NEW MODEL", regex: "/[a-z]/gi" }
      }
    ) {
      nodes {
        ...newMattressList
      }
    }

    datoCmsFrontPage {
      currentSaleSeoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      currentSaleHeaderLink {
        title
        tagLine
        bgImg {
          url
          alt
          title
        }
      }
    }
  }
`;

export default Sale;

// datoCmsCurrentSale {
//   title
//   description
//   seoMetaTags {
//     ...GatsbyDatoCmsSeoMetaTags
//   }
// }

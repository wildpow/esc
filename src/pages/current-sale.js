import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import MattressList from "../components/ProductListing/MattressList";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { sortProductByPrice } from "../components/New-Feature/helperFunctions";

const BrandsRoot = styled.div`
  @media (min-width: 1022px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Sale = ({ data }) => {
  const { allDatoCmsNewMattress, datoCmsFrontPage } = data;
  const sortedMatt = sortProductByPrice(allDatoCmsNewMattress.nodes);
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsFrontPage.currentSaleSeoLink.seoMetaTags} />
      <BreadWrapper hiddenLarge>
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
      <BreadWrapper hiddenLarge Bottom>
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

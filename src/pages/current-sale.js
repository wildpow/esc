import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import getBanners from "../components/New-Feature/Queries/getBanners.query";
import getMattressBrandsQuery from "../components/New-Feature/Queries/getMattressBrands.query";
import getMattressTypesQuery from "../components/New-Feature/Queries/getMattressTypes.query";
import getComfortFilter from "../components/FinalFeature/getComfortFilter";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import MattressList from "../components/FinalFeature/MattressList";
import currentSaleInit from "../components/FinalFeature/currentSaleInit";

const BrandsRoot = styled.div`
  @media (min-width: 1022px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export default function CurrentSale({ data }) {
  const { datoCmsFrontPage, allDatoCmsNewMattress } = data;
  const banners = getBanners();
  const mattressTypes = getMattressTypesQuery();
  const mattressBrands = getMattressBrandsQuery();
  const mattressComfort = getComfortFilter();
  const currentSale = currentSaleInit(
    allDatoCmsNewMattress.nodes,
    banners.currentSaleBannerKeyList,
    mattressBrands,
    mattressComfort,
    mattressTypes
  );

  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsFrontPage.currentSaleSeoLink.seoMetaTags} />
      <BreadWrapper hiddenLarge>
        <BreadCrumbs here="Current Sale" />
      </BreadWrapper>
      <BrandsRoot>
        <MattressList
          mattresses={currentSale.mattresses}
          headers={datoCmsFrontPage.currentSaleHeaderLink}
          queryString={false}
          multipleHeaders={false}
          initialFilterState={currentSale.filters}
        />
      </BrandsRoot>
      <BreadWrapper hiddenLarge Bottom>
        <BreadCrumbs here="Current Sale" />
      </BreadWrapper>
    </Layout>
  );
}

CurrentSale.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    allDatoCmsNewMattress(filter: { newSaleBanner: { banner: { ne: null } } }) {
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

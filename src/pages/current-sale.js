import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import getBanners from "../components/ProductListing/QueryHooks/Mattresses/Filters/getBanners.query";
import getMattressBrandsQuery from "../components/ProductListing/QueryHooks/Mattresses/Filters/getBrands.query";
import getMattressTypesQuery from "../components/ProductListing/QueryHooks/Mattresses/Filters/getTypes.query";
import getComfortFilter from "../components/ProductListing/QueryHooks/Mattresses/Filters/getComfort";
import Layout from "../components/Layout";
import ProductList from "../components/ProductListing/ProductList";
import currentSaleInit from "../components/ProductListing/Mattresses/currentSaleInit";

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
      <ProductList
        queryString={false}
        multipleHeaders={false}
        headers={datoCmsFrontPage.currentSaleHeaderLink}
        products={currentSale.mattresses}
        initialFilterState={currentSale.filters}
        breadCrumbSettings={{
          here: () => "Current Sale",
          next: "",
          extraFeatures: { hiddenLarge: true },
        }}
      />
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

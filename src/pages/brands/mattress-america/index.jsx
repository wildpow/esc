import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/ProductListing/MattressList";

const MattressAmerica = ({ data }) => {
  const { datoCmsBrand, allDatoCmsNewMattress } = data;
  const sortedMatt = allDatoCmsNewMattress.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattressList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={sortedMatt}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        brandName={datoCmsBrand.urlName}
      />
    </Layout>
  );
};

MattressAmerica.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const MattressAmericaQuery = graphql`
  query MattressAmericaQuery {
    datoCmsBrand(urlName: { eq: "mattress-america" }) {
      ...brandList
    }
    allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "mattress-america" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }
  }
`;

export default MattressAmerica;

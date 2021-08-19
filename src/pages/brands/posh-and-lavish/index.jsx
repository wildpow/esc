import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/ProductListing/MattressList";

const PoshAndLavish = ({ data }) => {
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
    allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "posh-and-lavish" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }
  }
`;

export default PoshAndLavish;

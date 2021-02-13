import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/MattressList";

const Nectar = ({ data }) => {
  const { datoCmsBrand, allDatoCmsNewMattress } = data;
  const sortedMatt = allDatoCmsNewMattress.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
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

Nectar.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const NectarQ = graphql`
  query nectar {
    datoCmsBrand(urlName: { eq: "nectar" }) {
      ...brandList
    }
    allDatoCmsNewMattress(filter: { brand: { urlName: { eq: "nectar" } } }) {
      nodes {
        ...newMattressList
      }
    }
  }
`;

export default Nectar;

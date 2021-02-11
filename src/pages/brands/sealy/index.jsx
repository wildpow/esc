import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattressList from "../../../components/MattressList";

const Sealy = ({ data }) => {
  const { datoCmsBrand, allDatoCmsNewMattress } = data;
  const golden = [];
  const essentials = [];
  const performance = [];
  const premium = [];
  allDatoCmsNewMattress.nodes.map((matt) => {
    if (matt.subline.name === "Golden Elegance") golden.push(matt);
    if (matt.subline.name.includes("Essentials")) essentials.push(matt);
    if (matt.subline.name.includes("Performance")) performance.push(matt);
    if (matt.subline.name.includes("Posturepedic Plus")) performance.push(matt);
    if (matt.subline.name.includes("Premium")) premium.push(matt);
    return null;
  });
  const sortedMatt = (list) =>
    list.sort(
      (a, b) =>
        Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
        Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
    );
  const combinedMatts = sortedMatt([
    ...golden,
    ...essentials,
    ...performance,
    ...premium,
  ]);
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattressList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={combinedMatts}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        brandName={datoCmsBrand.urlName}
        button={{
          label: "Learn More",
          url: `/brands/${datoCmsBrand.urlName}/landing`,
        }}
      />
    </Layout>
  );
};

Sealy.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Sealy;

export const allSealyMattresses = graphql`
  query allSealyMattresses {
    datoCmsBrand(urlName: { eq: "sealy" }) {
      ...brandList
    }

    allDatoCmsNewMattress(filter: { brand: { urlName: { eq: "sealy" } } }) {
      nodes {
        ...newMattressList
      }
    }
  }
`;

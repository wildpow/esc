import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/Layout";
import MattList from "../../../components/mattressList";

const Sealy = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  const golden = [];
  const essentials = [];
  const performance = [];
  const premium = [];
  allDatoCmsMattress.nodes.map((matt) => {
    if (matt.subline.name === "Golden Elegance") golden.push(matt);
    if (matt.subline.name.includes("Essentials")) essentials.push(matt);
    if (matt.subline.name.includes("Performance")) performance.push(matt);
    if (matt.subline.name.includes("Posturepedic Plus")) performance.push(matt);
    if (matt.subline.name.includes("Premium")) premium.push(matt);
    return null;
  });
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={[...golden, ...essentials, ...performance, ...premium]}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        brandName={datoCmsBrand.urlName}
        landing
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

    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "sealy" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;

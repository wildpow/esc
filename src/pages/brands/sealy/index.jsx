import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../../components/layout";
import MattList from "../../../components/mattressList";

const Sealy = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  const golden = [];
  const essentials = [];
  const performance = [];
  const premium = [];
  allDatoCmsMattress.nodes.map(matt => {
    if (matt.subline.name === "Golden Elegance") golden.push(matt);
    if (matt.subline.name.includes("Essentials")) essentials.push(matt);
    if (matt.subline.name.includes("Performance")) performance.push(matt);
    if (matt.subline.name.includes("Premium")) premium.push(matt);
    return null;
  });
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBrand.seoMetaTags} />
      <MattList
        headerBG={datoCmsBrand.headerImage.url}
        mattresses={[...golden, ...essentials, ...performance, ...premium]}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.tagLine}
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      tagLine
      headerImage {
        alt
        url
        title
      }
      displayName
      urlName
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

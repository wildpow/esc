import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattressThumb from "../../../components/mattressList/mattThumbNail";
import MattressList from "../../../components/mattressList";

const Sealy = ({ data }) => {
  const { datoCmsBrand, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MattressList
        seo={datoCmsBrand.seoMetaTags}
        brandImgAlt="A logo of the Sealy mattress company"
        headerText="Sealy proud supporter of you."
        brandName="sealy"
      >
        {allDatoCmsMattress.nodes.map(mattress => {
          if (
            mattress.subline.name === "Golden Elegance" &&
            mattress.brand.urlName === "sealy"
          ) {
            return (
              <MattressThumb
                key={mattress.id}
                mattress={mattress}
                url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
              />
            );
          }
          return null;
        })}
        {allDatoCmsMattress.nodes.map(mattress => {
          if (
            mattress.subline.name.includes("Essentials") &&
            mattress.brand.urlName === "sealy"
          ) {
            return (
              <MattressThumb
                key={mattress.id}
                mattress={mattress}
                url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
              />
            );
          }
          return null;
        })}
        {allDatoCmsMattress.nodes.map(mattress => {
          if (
            mattress.subline.name.includes("Performance") &&
            mattress.brand.urlName === "sealy"
          ) {
            return (
              <MattressThumb
                key={mattress.id}
                mattress={mattress}
                url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
              />
            );
          }
          return null;
        })}
        {allDatoCmsMattress.nodes.map(mattress => {
          if (
            mattress.subline.name.includes("Premium") &&
            mattress.brand.urlName === "sealy"
          ) {
            return (
              <MattressThumb
                key={mattress.id}
                mattress={mattress}
                url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
              />
            );
          }
          return null;
        })}
      </MattressList>
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

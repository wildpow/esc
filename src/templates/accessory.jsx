import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Accessory = ({ data }) => {
  const { shopifyProduct: product } = data;
  return (
    <Layout>
      {console.log(data)}
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Layout>
  );
};

Accessory.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const query = graphql`
  query SingleAccessory($id: String!) {
    shopifyProduct(shopifyId: { eq: $id }) {
      title
      handle
      shopifyId
      productType
      tags
      vendor
      availableForSale
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      variants {
        shopifyId
        price
        title
        compareAtPrice
      }
      description
      title
      images {
        originalSrc
        localFile {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          currencyCode
          amount
        }
        maxVariantPrice {
          currencyCode
          amount
        }
      }
    }
  }
`;
export default Accessory;

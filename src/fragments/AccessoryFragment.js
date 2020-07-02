import { graphql } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const mattressParts = graphql`
  fragment accessoryParts on ShopifyProduct {
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
`;

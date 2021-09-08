/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const newMattressList = graphql`
  fragment newMattressList on DatoCmsNewMattress {
    nameWithout
    slug
    firmness
    id
    saleBanner
    mattressType {
      title
      slug
    }
    images {
      coverImage {
        alt
        url
        gatsbyImageData(layout: CONSTRAINED, width: 500)
      }
    }
    subline {
      name
    }
    brand {
      urlName
      displayName
    }
    shopifyInfo {
      priceRange: priceRangeV2 {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
    }
  }
`;

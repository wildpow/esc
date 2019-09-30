import { graphql } from "gatsby";

export const mattressParts = graphql`
  fragment mattressParts on DatoCmsMattress {
    slug
    name
    id
    priceLow
    priceHigh
    images {
      coverImage {
        alt
        url
      }
    }
    saleInfo {
      saleBanner
    }
    subline {
      name
    }
    brand {
      urlName
      displayName
    }
  }
`;

import { graphql } from "gatsby";

export const mattressParts = graphql`
  fragment mattressParts on DatoCmsMattress {
    uri
    name
    id
    priceLow
    priceHigh
    images {
      coverImage {
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

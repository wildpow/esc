import { graphql } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const mattressParts = graphql`
  fragment mattressParts on DatoCmsMattress {
    slug
    name
    firmness
    id
    priceLow
    priceHigh
    images {
      coverImage {
        alt
        url
        fluid(
          maxWidth: 250
          imgixParams: { auto: "compress", lossless: true }
        ) {
          ...GatsbyDatoCmsFluid
        }
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

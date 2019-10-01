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

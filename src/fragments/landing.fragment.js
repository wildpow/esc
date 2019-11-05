import { graphql } from "gatsby";

// imgixParams: { auto: "compress", lossless: true }

// eslint-disable-next-line import/prefer-default-export
export const landing = graphql`
  fragment landing on DatoCmsLanding {
    title
    headingImg {
      alt
      title
      url
      fluid(maxWidth: 662, maxHeight: 116) {
        ...GatsbyDatoCmsFluid
      }
    }
    heroImg {
      alt
      title
      url
      fluid(maxWidth: 1080, maxHeight: 325) {
        ...GatsbyDatoCmsFluid
      }
    }
    description
    tabBox {
      id
      name
      topText
      topImage {
        alt
        height
        width
        title
        url
        fluid(
          maxWidth: 458
          maxHeight: 126
          imgixParams: { auto: "compress", lossless: true }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      box {
        title
        description
        picture {
          fluid(
            maxWidth: 528
            maxHeight: 316
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          title
          url
        }
      }
    }
  }
`;

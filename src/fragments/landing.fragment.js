import { graphql } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const landing = graphql`
  fragment landing on DatoCmsLanding {
    title
    headingImg {
      alt
      title
      url
    }
    heroImg {
      alt
      title
      url
    }
    description
    tabBox {
      id
      name
      topText
      topImage {
        alt
        title
        url
      }
      box {
        title
        description
        picture {
          alt
          title
          url
        }
      }
    }
  }
`;

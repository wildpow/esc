import { graphql } from "gatsby";

export const colorSwatch = graphql`
  fragment colorSwatch on File {
    childImageSharp {
      gatsbyImageData(
        layout: FIXED
        width: 60
        height: 60
        formats: [AUTO, AVIF, WEBP]
      )
    }
  }
`;

export const fullChairImages = graphql`
  fragment fullChairImages on File {
    base
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1000
        formats: [AUTO, AVIF, WEBP]
        placeholder: TRACED_SVG
      )
    }
  }
`;

import { graphql } from "gatsby";

export const colorSwatch = graphql`
  fragment colorSwatch on File {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 60
        height: 60
        formats: [AUTO, WEBP, AVIF]
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
        formats: [AUTO, WEBP, AVIF]
        placeholder: TRACED_SVG
      )
    }
  }
`;

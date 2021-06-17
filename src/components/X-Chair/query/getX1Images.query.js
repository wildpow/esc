import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    greyDefault,
    greyHeadrest,
    greyColorImg,
    blackDefault,
    blackHeadrest,
    blackColorImg,
  } = useStaticQuery(
    graphql`
      query getX1images {
        greyColorImg: file(
          relativePath: { eq: "xChair/xOne/grey/grey-flex-mesh.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        blackColorImg: file(
          relativePath: { eq: "xChair/xOne/black/black-flex-mesh.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/default" } }
        ) {
          nodes {
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
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/headrest" } }
        ) {
          nodes {
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
        }

        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/default" } }
        ) {
          nodes {
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
        }

        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/headrest" } }
        ) {
          nodes {
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
        }
      }
    `
  );
  return {
    colors: [
      { title: "Grey Flex Mesh", img: greyColorImg },
      { title: "Black Flex Mesh", img: blackColorImg },
    ],
    "Grey Flex Mesh": { default: greyDefault, headrest: greyHeadrest },
    "Black Flex Mesh": { default: blackDefault, headrest: blackHeadrest },
  };
};

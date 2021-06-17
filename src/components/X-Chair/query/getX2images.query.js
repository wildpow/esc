import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    greyDefault,
    greyHeadrest,
    greyColorImg,
    blackDefault,
    blackHeadrest,
    blackColorImg,
    redDefault,
    redHeadrest,
    redColorImg,
    whiteDefault,
    whiteHeadrest,
    whiteColorImg,
  } = useStaticQuery(
    graphql`
      query getX2images {
        greyColorImg: file(
          relativePath: { eq: "xChair/xTwo/grey/grey-ksport-mesh.png" }
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
          relativePath: { eq: "xChair/xTwo/black/black-ksport-mesh.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        redColorImg: file(
          relativePath: { eq: "xChair/xTwo/red/red-ksport-mesh.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        whiteColorImg: file(
          relativePath: { eq: "xChair/xTwo/white/white-ksport-mesh.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 150
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        whiteDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/white/default" } }
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
        whiteHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/white/headrest" } }
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

        redDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/default" } }
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
        redHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/headrest" } }
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
        grayDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/default" } }
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

        grayHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/headrest" } }
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
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/default" } }
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
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/headrest" } }
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
      { title: "White K-Sport", img: whiteColorImg },
      { title: "Grey K-Sport", img: greyColorImg },
      { title: "Red K-Sport", img: redColorImg },
      { title: "Black K-Sport", img: blackColorImg },
    ],
    "White K-Sport": { default: whiteDefault, headrest: whiteHeadrest },
    "Grey K-Sport": { default: greyDefault, headrest: greyHeadrest },
    "Red K-Sport": { default: redDefault, headrest: redHeadrest },
    "Black K-Sport": { default: blackDefault, headrest: blackHeadrest },
  };
};

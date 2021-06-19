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
          ...colorSwatch
        }
        blackColorImg: file(
          relativePath: { eq: "xChair/xOne/black/black-flex-mesh.png" }
        ) {
          ...colorSwatch
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/headrest" } }
        ) {
          nodes {
            ...fullChairImages
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
    colorCB: [true, false],
    data: {
      "Grey Flex Mesh": { default: greyDefault, headrest: greyHeadrest },
      "Black Flex Mesh": { default: blackDefault, headrest: blackHeadrest },
    },
  };
};

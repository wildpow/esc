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
        greyColorImg: file(base: { eq: "grey-flex-mesh.png" }) {
          ...colorSwatch
        }
        blackColorImg: file(base: { eq: "black-flex-mesh.png" }) {
          ...colorSwatch
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/grey/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xOne/black/headrest" } }
          sort: { fields: base, order: ASC }
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
      { title: "Grey Flex Mesh", img: greyColorImg, index: 0 },
      { title: "Black Flex Mesh", img: blackColorImg, index: 1 },
    ],
    colorCB: [true, false],
    data: {
      "Grey Flex Mesh": {
        default: greyDefault.nodes,
        headrest: greyHeadrest.nodes,
      },
      "Black Flex Mesh": {
        default: blackDefault.nodes,
        headrest: blackHeadrest.nodes,
      },
    },
  };
};

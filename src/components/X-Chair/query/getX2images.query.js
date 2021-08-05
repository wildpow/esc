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
          ...colorSwatch
        }
        blackColorImg: file(
          relativePath: { eq: "xChair/xTwo/black/black-ksport-mesh.png" }
        ) {
          ...colorSwatch
        }
        redColorImg: file(
          relativePath: { eq: "xChair/xTwo/red/red-ksport-mesh.png" }
        ) {
          ...colorSwatch
        }
        whiteColorImg: file(
          relativePath: { eq: "xChair/xTwo/white/white-ksport-mesh.jpg" }
        ) {
          ...colorSwatch
        }
        whiteDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/white/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        whiteHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/white/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        redDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        redHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/headrest" } }
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
    popupContent: `K-Sport Advanced Performance Material provides all the benefits of standard mesh but with a softer, more adaptive feel. X2's K-Sport Advanced Performance Material features a tighter weave for even more comfort.`,
    colors: [
      { title: "White K-Sport", img: whiteColorImg, index: 0 },
      { title: "Grey K-Sport", img: greyColorImg, index: 1 },
      { title: "Red K-Sport", img: redColorImg, index: 2 },
      { title: "Black K-Sport", img: blackColorImg, index: 3 },
    ],
    colorCB: [true, false, false, false],
    data: {
      "White K-Sport": {
        default: whiteDefault.nodes,
        headrest: whiteHeadrest.nodes,
      },
      "Grey K-Sport": {
        default: greyDefault.nodes,
        headrest: greyHeadrest.nodes,
      },
      "Red K-Sport": { default: redDefault.nodes, headrest: redHeadrest.nodes },
      "Black K-Sport": {
        default: blackDefault.nodes,
        headrest: blackHeadrest.nodes,
      },
    },
  };
};

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
        ) {
          nodes {
            ...fullChairImages
          }
        }
        whiteHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/white/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        redDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        redHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/red/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        grayDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        grayHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/grey/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }

        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xTwo/black/headrest" } }
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
      { title: "White K-Sport", img: whiteColorImg },
      { title: "Grey K-Sport", img: greyColorImg },
      { title: "Red K-Sport", img: redColorImg },
      { title: "Black K-Sport", img: blackColorImg },
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

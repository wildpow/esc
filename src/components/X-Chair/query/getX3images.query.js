import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    blackColorImg,
    greyColorImg,
    glacierColorImg,
    blueColorImg,
    greyHeadrest,
    greyDefault,
    blackDefault,
    blackHeadrest,
    blueDefault,
    blueHeadrest,
    glacierDefault,
    glacierHeadrest,
  } = useStaticQuery(
    graphql`
      query getX3images {
        blackColorImg: file(
          relativePath: {
            eq: "xChair/xThree/black/attribute_swatch_0000_x3black.jpg"
          }
        ) {
          ...colorSwatch
        }
        greyColorImg: file(
          relativePath: {
            eq: "xChair/xThree/grey/attribute_swatch_0003_x3grey.jpg"
          }
        ) {
          ...colorSwatch
        }
        glacierColorImg: file(
          relativePath: {
            eq: "xChair/xThree/glacier/x3_glacier_thumb_120_80.jpg"
          }
        ) {
          ...colorSwatch
        }
        blueColorImg: file(
          relativePath: {
            eq: "xChair/xThree/blue/attribute_swatch_0001_x3blue.jpg"
          }
        ) {
          ...colorSwatch
        }

        greyHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/grey/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/grey/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blueDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blueHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/headrest" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        glacierDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/glacier/default" } }
          sort: { fields: base, order: ASC }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        glacierHeadrest: allFile(
          filter: {
            relativeDirectory: { eq: "xChair/xThree/glacier/headrest" }
          }
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
    popupContent: `Advanced Tensile Recovery or A.T.R. is a woven multilayered nylon that is both responsive and supportive. A.T.R. is water, spill, and stain-resistant. It provides more give and spring than traditional fabrics.`,
    colors: [
      { title: "Black A.T.R.", img: blackColorImg, index: 0 },
      { title: "Grey A.T.R.", img: greyColorImg, index: 1 },
      { title: "Blue A.T.R.", img: blueColorImg, index: 2 },
      { title: "Glacier A.T.R.", img: glacierColorImg, index: 3 },
    ],
    colorCB: [true, false, false, false],
    data: {
      "Black A.T.R.": {
        default: blackDefault.nodes,
        headrest: blackHeadrest.nodes,
      },
      "Grey A.T.R.": {
        default: greyDefault.nodes,
        headrest: greyHeadrest.nodes,
      },
      "Blue A.T.R.": {
        default: blueDefault.nodes,
        headrest: blueHeadrest.nodes,
      },
      "Glacier A.T.R.": {
        default: glacierDefault.nodes,
        headrest: glacierHeadrest.nodes,
      },
    },
  };
};

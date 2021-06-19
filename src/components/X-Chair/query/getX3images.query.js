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
        ) {
          nodes {
            ...fullChairImages
          }
        }
        greyDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/grey/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blackDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blackHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/black/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blueDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        blueHeadrest: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/blue/headrest" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        glacierDefault: allFile(
          filter: { relativeDirectory: { eq: "xChair/xThree/glacier/default" } }
        ) {
          nodes {
            ...fullChairImages
          }
        }
        glacierHeadrest: allFile(
          filter: {
            relativeDirectory: { eq: "xChair/xThree/glacier/headrest" }
          }
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
      { title: "Black A.T.R.", img: blackColorImg },
      { title: "Grey A.T.R.", img: greyColorImg },
      { title: "Blue A.T.R.", img: blueColorImg },
      { title: "Glacier A.T.R.", img: glacierColorImg },
    ],
    colorCB: [true, false, false, false],
    data: {
      "Black A.T.R.": { default: blackDefault, headrest: blackHeadrest },
      "Grey A.T.R.": { default: greyDefault, headrest: greyHeadrest },
      "Blue A.T.R.": { default: blueDefault, headrest: blueHeadrest },
      "Glacier A.T.R.": { default: glacierDefault, headrest: glacierHeadrest },
    },
  };
};

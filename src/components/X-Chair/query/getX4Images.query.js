import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    roseColorImg,
    brownBrisaColorImg,
    blackBrisaColorImg,
    whiteColorImg,
    redColorImg,
    blackColorImg,
    cognacColorImg,
    brownColorImg,
    whiteDefault,
    whiteHeadrest,
    redDefault,
    redHeadrest,
    blackDefault,
    blackHeadrest,
    brownDefault,
    brownHeadrest,
    cognacDefault,
    cognacHeadrest,
    roseDefault,
    roseHeadrest,
    brownBrisaDefault,
    brownBrisaHeadrest,
    blackBrisaHeadrest,
    blackBrisaDefault,
  } = useStaticQuery(graphql`
    query getX4images {
      roseColorImg: file(base: { eq: "rose.jpg" }) {
        ...colorSwatch
      }
      brownBrisaColorImg: file(base: { eq: "brown.jpg" }) {
        ...colorSwatch
      }
      blackBrisaColorImg: file(base: { eq: "black_1_1.jpg" }) {
        ...colorSwatch
      }
      whiteColorImg: file(base: { eq: "attribute_swatch_0005_x4white.jpg" }) {
        ...colorSwatch
      }
      redColorImg: file(base: { eq: "attribute_swatch_0004_x4red.jpg" }) {
        ...colorSwatch
      }
      blackColorImg: file(base: { eq: "black-leather.jpg" }) {
        ...colorSwatch
      }
      cognacColorImg: file(base: { eq: "cognac-leather.jpg" }) {
        ...colorSwatch
      }
      brownColorImg: file(base: { eq: "test.png" }) {
        ...colorSwatch
      }
      roseDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/rose/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      roseHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/rose/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      whiteDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/white/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      whiteHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/white/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }

      redDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/red/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      redHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/red/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      blackDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/black/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      blackHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/black/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }

      brownDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/brown/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      brownHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/brown/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }

      cognacDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/cognac/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      cognacHeadrest: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/cognac/headrest" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }

      brownBrisaDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/brownBrisa/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      brownBrisaHeadrest: allFile(
        filter: {
          relativeDirectory: { eq: "xChair/xFour/brownBrisa/headrest" }
        }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }

      blackBrisaDefault: allFile(
        filter: { relativeDirectory: { eq: "xChair/xFour/blackBrisa/default" } }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
      blackBrisaHeadrest: allFile(
        filter: {
          relativeDirectory: { eq: "xChair/xFour/blackBrisa/headrest" }
        }
        sort: { fields: base, order: ASC }
      ) {
        nodes {
          ...fullChairImages
        }
      }
    }
  `);
  return {
    colors: [
      { title: "Black Leather", img: blackColorImg, index: 0 },
      { title: "Cognac Leather", img: cognacColorImg, index: 1 },
      { title: "Brown Leather", img: brownColorImg, index: 2 },
    ],
    extraColors: {
      "Premium Leather": [
        { title: "Red Premium Leather", img: redColorImg, index: 3 },
        { title: "White Premium Leather", img: whiteColorImg, index: 4 },
      ],
      Brisa: [
        { title: "Rose Brisa", img: roseColorImg, index: 5 },
        { title: "Brown Brisa", img: brownBrisaColorImg, index: 6 },
        { title: "Black Brisa", img: blackBrisaColorImg, index: 7 },
      ],
    },

    colorCB: [true, false, false, false, false, false, false, false],
    data: {
      "Black Leather": {
        default: blackDefault.nodes,
        headrest: blackHeadrest.nodes,
      },
      "Cognac Leather": {
        default: cognacDefault.nodes,
        headrest: cognacHeadrest.nodes,
      },
      "Brown Leather": {
        default: brownDefault.nodes,
        headrest: brownHeadrest.nodes,
      },
      "Red Premium Leather": {
        default: redDefault.nodes,
        headrest: redHeadrest.nodes,
      },
      "White Premium Leather": {
        default: whiteDefault.nodes,
        headrest: whiteHeadrest.nodes,
      },
      "Rose Brisa": {
        default: roseDefault.nodes,
        headrest: roseHeadrest.nodes,
      },
      "Brown Brisa": {
        default: brownBrisaDefault.nodes,
        headrest: brownBrisaHeadrest.nodes,
      },
      "Black Brisa": {
        default: blackBrisaDefault.nodes,
        headrest: blackBrisaHeadrest.nodes,
      },
    },
  };
};

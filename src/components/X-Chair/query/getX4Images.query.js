import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const {
    blackColorImg,
    cognacColorImg,
    brownColorImg,
    blackDefault,
    blackHeadrest,
    brownDefault,
    brownHeadrest,
    cognacDefault,
    cognacHeadrest,
  } = useStaticQuery(graphql`
    query getX4images {
      blackColorImg: file(
        relativePath: { eq: "xChair/xFour/black/black-leather.jpg" }
      ) {
        ...colorSwatch
      }
      cognacColorImg: file(
        relativePath: { eq: "xChair/xFour/cognac/cognac-leather.jpg" }
      ) {
        ...colorSwatch
      }
      brownColorImg: file(relativePath: { eq: "xChair/xFour/brown/test.png" }) {
        ...colorSwatch
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
    }
  `);
  return {
    colors: [
      { title: "Black Leather", img: blackColorImg },
      { title: "Cognac Leather", img: cognacColorImg },
      { title: "Brown Leather", img: brownColorImg },
    ],
    colorCB: [true, false, false],
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
    },
  };
};

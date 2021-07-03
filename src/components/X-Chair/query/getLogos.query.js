import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { x1, x2, x3, x4 } = useStaticQuery(
    graphql`
      query getLogos {
        x1: file(base: { eq: "x_1.jpg" }) {
          childImageSharp {
            gatsbyImageData(formats: [AVIF, WEBP, AUTO], layout: CONSTRAINED)
          }
        }
        x2: file(base: { eq: "x_2.png" }) {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, AUTO]
              width: 86
              layout: CONSTRAINED
            )
          }
        }
        x3: file(base: { eq: "x_3.png" }) {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, AUTO]
              width: 86
              layout: CONSTRAINED
            )
          }
        }
        x4: file(base: { eq: "x_4.png" }) {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, AUTO]
              width: 86
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );

  return {
    "Flex Mesh": {
      image: x1,
      alt: "X-Chair’s X1 Task Chair is the entry level model includes Dynamic Variable Lumbar (DVL) Support that adjusts with your movement and a cool flex-mesh fabric.",
    },
    "K-Sport": {
      image: x2,
      alt: "X-Chair’s X2 K-Sport Mgmt Chair includes Dynamic Variable Lumbar (DVL) Support that adjusts with your movement, a more robust frame and K-Sport mesh fabric.",
    },
    "ATR Fabric": {
      image: x3,
      alt: "X-Chair’s X3 ATR Mgmt Chair includes Dynamic Variable Lumbar (DVL) Support that adjusts with your movement, a more robust frame, foam seat, and ATR mesh fabric.",
    },
    "Leather Exec": {
      image: x4,
      alt: "X-Chair’s X4 Leather Exec Chair includes Dynamic Variable Lumbar (DVL) Support that adjusts with your movement, a more robust frame, foam seat, and Leather.",
    },
  };
};

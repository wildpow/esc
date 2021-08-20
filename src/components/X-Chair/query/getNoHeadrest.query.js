import { useStaticQuery, graphql } from "gatsby";

export default (title) => {
  const { xOne, xTwo, xThree, xFour } = useStaticQuery(
    graphql`
      query getNoHeadrest {
        xOne: file(relativePath: { eq: "xChair/xOne/noHeadrest.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              height: 103
              layout: CONSTRAINED
              formats: [AVIF, AUTO, WEBP, JPG]
            )
          }
        }
        xTwo: file(relativePath: { eq: "xChair/xTwo/noHeadrest.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              height: 103
              layout: CONSTRAINED
              formats: [AVIF, AUTO, WEBP, JPG]
            )
          }
        }
        xThree: file(relativePath: { eq: "xChair/xThree/noHeadrest.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              height: 103
              layout: CONSTRAINED
              formats: [AVIF, AUTO, WEBP, JPG]
            )
          }
        }
        xFour: file(relativePath: { eq: "xChair/xFour/noHeadrest.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              height: 103
              layout: CONSTRAINED
              formats: [AVIF, AUTO, WEBP, JPG]
            )
          }
        }
      }
    `
  );
  if (title === "ATR Mgmt") {
    return xThree;
  }
  if (title === "K-Sport Mgmt") {
    return xTwo;
  }
  if (title === "Leather Exec") {
    return xFour;
  }
  return xOne;
};

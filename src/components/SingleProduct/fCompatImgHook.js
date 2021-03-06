import { useStaticQuery, graphql } from "gatsby";

const useFoundationImages = () => {
  const { adjBase, frame, platform, box } = useStaticQuery(
    graphql`
      query foundationImg {
        adjBase: file(
          relativePath: { eq: "foundationCompat/Adjustable Base.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        frame: file(
          relativePath: { eq: "foundationCompat/Traditional Frame.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        platform: file(relativePath: { eq: "foundationCompat/Platform.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        box: file(relativePath: { eq: "foundationCompat/Box SPring.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `,
  );
  return { adjBase, frame, platform, box };
};
export default useFoundationImages;

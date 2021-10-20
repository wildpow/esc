import { useStaticQuery, graphql } from "gatsby";

const useHeaders = () => {
  const { sheets, pillows, protectors, foundation, accessories } =
    useStaticQuery(
      graphql`
        query Headers {
          sheets: datoCmsHeader(titleUsedInBuilds: { eq: "sheets" }) {
            title
            tagLine
            bgImg {
              url
              alt
              title
            }
          }

          pillows: datoCmsHeader(titleUsedInBuilds: { eq: "pillows" }) {
            title
            tagLine
            bgImg {
              url
              alt
              title
            }
          }
          protectors: datoCmsHeader(
            titleUsedInBuilds: { eq: "mattress-protectors" }
          ) {
            title
            tagLine
            bgImg {
              url
              alt
              title
            }
          }
          foundation: datoCmsHeader(titleUsedInBuilds: { eq: "foundation" }) {
            title
            tagLine
            bgImg {
              url
              alt
              title
            }
          }
          accessories: datoCmsHeader(titleUsedInBuilds: { eq: "accessories" }) {
            title
            tagLine
            bgImg {
              url
              alt
              title
            }
          }
        }
      `
    );
  return [sheets, pillows, protectors, foundation, accessories];
};
export default useHeaders;

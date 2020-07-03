import { useStaticQuery, graphql } from "gatsby";

const useHeaders = () => {
  const { sheets, pillows, protectors, accessories } = useStaticQuery(
    graphql`
      query Headers {
        sheets: datoCmsHeader(title: { eq: "Sheets" }) {
          title
          tagLine
          bgImg {
            url
            alt
            title
          }
        }

        pillows: datoCmsHeader(title: { eq: "Pillows" }) {
          title
          tagLine
          bgImg {
            url
            alt
            title
          }
        }
        protectors: datoCmsHeader(title: { eq: "Mattress Protectors" }) {
          title
          tagLine
          bgImg {
            url
            alt
            title
          }
        }
        accessories: datoCmsHeader(title: { eq: "Accessories" }) {
          title
          tagLine
          bgImg {
            url
            alt
            title
          }
        }
      }
    `,
  );
  return [sheets, pillows, protectors, accessories];
};
export default useHeaders;

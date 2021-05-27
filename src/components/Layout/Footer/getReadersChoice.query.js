import { useStaticQuery, graphql } from "gatsby";

const useReaders = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query readerChoice {
        datoCmsFrontPage {
          sticker {
            url
            alt
            gatsbyImageData(layout: FIXED, width: 100)
          }
        }
      }
    `
  );
  return datoCmsFrontPage;
};

export default useReaders;

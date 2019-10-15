import { useStaticQuery, graphql } from "gatsby";

const useTopperPromo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query toppers {
        datoCmsFrontPage {
          topper {
            url
            urlText
            internalLink
          }
        }
      }
    `,
  );
  return datoCmsFrontPage.topper[0];
};

export default useTopperPromo;

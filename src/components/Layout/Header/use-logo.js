import { useStaticQuery, graphql } from "gatsby";

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query logoImage {
        datoCmsFrontPage {
          pandaLogo {
            url
            alt
          }
        }
      }
    `,
  );
  return datoCmsFrontPage;
};

export default useLogo;

import { useStaticQuery, graphql } from "gatsby";

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query pandaLogo {
        datoCmsFrontPage {
          pandaLogo {
            url
            alt
          }
        }
      }
    `,
  );
  return datoCmsFrontPage.pandaLogo;
};

export default useLogo;

import { useStaticQuery, graphql } from "gatsby";

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query logoImage {
        datoCmsFrontPage {
          pandaLogo {
            alt
            fluid(
              maxWidth: 90
              maxHeight: 55
              imgixParams: { auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `,
  );
  return datoCmsFrontPage;
};

export default useLogo;

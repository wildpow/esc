import { useStaticQuery, graphql } from "gatsby";

const useFooterIcons = () => {
  const { datoCmsImage } = useStaticQuery(
    graphql`
      query footerImages {
        datoCmsImage(uniqueName: { eq: "footer" }) {
          uniqueName
          images {
            title
            alt
            gatsbyImageData(layout: CONSTRAINED, width: 170)
          }
        }
      }
    `
  );
  return datoCmsImage;
};

export default useFooterIcons;

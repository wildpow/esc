import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query top3Matts {
        datoCmsFrontPage {
          top3Mattress {
            footer
            footerUrl
            header
            newmattress {
              saleBanner
              slug
              id
              name
              firmness
              images {
                coverImage {
                  gatsbyImageData(layout: CONSTRAINED, width: 250)
                  alt
                }
              }
              shopifyInfo {
                priceRange: priceRangeV2 {
                  minVariantPrice {
                    amount
                  }
                  maxVariantPrice {
                    amount
                  }
                }
              }
              subline {
                name
              }
              brand {
                urlName
                displayName
              }
            }
          }
        }
      }
    `
  );
  return datoCmsFrontPage.top3Mattress[0];
};

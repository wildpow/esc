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
            mattresses {
              slug
              id
              name
              images {
                coverImage {
                  fluid(
                    maxWidth: 250
                    imgixParams: { auto: "compress", lossless: true }
                  ) {
                    ...GatsbyDatoCmsFluid
                  }
                  alt
                }
              }
              priceLow
              priceHigh
              saleInfo {
                saleBanner
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
    `,
  );
  return datoCmsFrontPage.top3Mattress[0];
};

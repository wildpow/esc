import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { hmt, elemax } = useStaticQuery(
    graphql`
      query getModels {
        hmt: shopifyProduct(title: { eq: "X-HMT" }) {
          title
          storefrontId
          description
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
        elemax: shopifyProduct(title: { eq: "Elemax" }) {
          title
          storefrontId
          description
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    `
  );

  return ["standard", hmt, elemax];
};

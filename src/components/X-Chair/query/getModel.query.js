import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { hmt, elemax } = useStaticQuery(
    graphql`
      query getModels {
        hmt: shopifyProduct(title: { eq: "X-HMT" }) {
          title
          variants {
            price
            storefrontId
          }
        }
        elemax: shopifyProduct(title: { eq: "Elemax" }) {
          title
          variants {
            price
            storefrontId
          }
        }
      }
    `
  );

  return ["standard", hmt, elemax];
};

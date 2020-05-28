import { useStaticQuery, graphql } from "gatsby";

const useProtector = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query Protects {
        allShopifyProduct(
          filter: { productType: { eq: "Protector" } }
          sort: { fields: priceRange___minVariantPrice___amount, order: DESC }
        ) {
          nodes {
            ...accessoryParts
          }
        }
      }
    `,
  );
  return allShopifyProduct.nodes;
};
export default useProtector;

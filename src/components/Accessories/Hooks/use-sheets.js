import { useStaticQuery, graphql } from "gatsby";

const useSheets = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query Sheets {
        allShopifyProduct(
          filter: { productType: { eq: "Sheets" } }
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
export default useSheets;

import { useStaticQuery, graphql } from "gatsby";

const usePillows = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query Pillows {
        allShopifyProduct(
          filter: { productType: { eq: "Pillow" } }
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
export default usePillows;

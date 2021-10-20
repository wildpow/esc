import { useStaticQuery, graphql } from "gatsby";

const usePillows = () => {
  const { allDatoCmsProduct } = useStaticQuery(
    graphql`
      query Pillows {
        allDatoCmsProduct(
          filter: { typeOfProduct: { title: { eq: "Pillow" } } }
        ) {
          nodes {
            title
            saleBanner
            id
            slug
            description
            typeOfProduct {
              title
            }
            threeImageBlock {
              coverImage {
                alt
                gatsbyImageData(layout: CONSTRAINED, width: 250)
              }
            }
            shopifyInfo {
              productType
              vendor
              priceRange: priceRangeV2 {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    `
  );
  const sortedProduct = allDatoCmsProduct.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
  return sortedProduct;
};
export default usePillows;

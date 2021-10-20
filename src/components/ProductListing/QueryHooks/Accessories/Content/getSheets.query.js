import { useStaticQuery, graphql } from "gatsby";

const useSheets = () => {
  const { allDatoCmsProduct } = useStaticQuery(
    graphql`
      query Sheets {
        allDatoCmsProduct(
          filter: { typeOfProduct: { title: { eq: "Sheets" } } }
        ) {
          nodes {
            title
            id
            slug
            saleBanner
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
export default useSheets;

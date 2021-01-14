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
            description
            typeOfProduct {
              title
            }
            threeImageBlock {
              coverImage {
                alt
                fluid(
                  maxWidth: 250
                  imgixParams: { auto: "compress", lossless: true }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
            shopifyInfo {
              productType
              metafields {
                key
                value
                id
              }
              vendor
              priceRange {
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
    `,
  );
  const sortedProduct = allDatoCmsProduct.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
  );
  return sortedProduct;
};
export default useSheets;

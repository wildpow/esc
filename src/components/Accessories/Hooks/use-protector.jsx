import { useStaticQuery, graphql } from "gatsby";

const useProtector = () => {
  const { allDatoCmsProduct } = useStaticQuery(
    graphql`
      query Protectors {
        allDatoCmsProduct(
          filter: { typeOfProduct: { title: { eq: "Protector" } } }
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
export default useProtector;

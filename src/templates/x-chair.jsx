/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { useReducer } from "react";
import Layout from "../components/Layout";
import GenerateInitialState from "../components/X-Chair/generateInitialState";
import xChairReducer from "../components/X-Chair/xChair.reducer";
import Headrest from "../components/X-Chair/prototype/Headrest";

export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, width } = data;
  const initialState = GenerateInitialState();
  const [state, dispatch] = useReducer(xChairReducer, initialState);
  return (
    <Layout>
      <div>
        {/* {console.log("state", state)} */}
        <h1>X-Chair</h1>
        <Headrest
          title={datoCmsXChair.title}
          headrestImg={headrest.images[0]}
          dispatch={dispatch}
          headrestBool={state.headrest}
        />
      </div>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair(
    $slug: String!
    $headrest: String!
    $wheels: String!
    $memoryFoam: String
  ) {
    datoCmsXChair(slug: { eq: $slug }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      shopifyInfo {
        variants {
          compareAtPrice
          price
          storefrontId
          title
          image {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
        title
        description
        hasOnlyDefaultVariant
        images {
          gatsbyImageData(layout: FIXED, width: 50)
          altText
        }
        featuredImage {
          gatsbyImageData(width: 50, layout: FIXED)
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        productType
        storefrontId
        totalVariants
      }
    }
    memoryFoam: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    width: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    headrest: shopifyProduct(storefrontId: { eq: $headrest }) {
      description
      title
      storefrontId

      variants {
        storefrontId
        price
        title
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
    }
    wheels: shopifyProduct(storefrontId: { eq: $wheels }) {
      title
      storefrontId
      description
      variants {
        storefrontId
        price
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 350)
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 150)
      }
    }
  }
`;

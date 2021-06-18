/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { useReducer } from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import GenerateInitialState from "../components/X-Chair/generateInitialState";
import xChairReducer from "../components/X-Chair/xChair.reducer";
import Headrest from "../components/X-Chair/prototype/Headrest";
import Wheels from "../components/X-Chair/prototype/Wheels";
import Model from "../components/X-Chair/prototype/Model";
import Width from "../components/X-Chair/prototype/Width";

const XchairRoot = styled.section`
  background-color: white;
`;
export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, width, hmt, elemax } =
    data;
  const initialState = GenerateInitialState();
  const [state, dispatch] = useReducer(xChairReducer, initialState);
  return (
    <Layout>
      <XchairRoot>
        {console.log("state", state)}
        <h1>X-Chair</h1>
        <Model modelCB={state.modelCB} dispatch={dispatch} />
        <Headrest
          title={datoCmsXChair.title}
          headrestImg={headrest.images[0]}
          dispatch={dispatch}
          headrestBool={state.headrest}
        />
        <Wheels
          wheels={wheels.variants}
          wheelsCB={state.wheelsCB}
          dispatch={dispatch}
        />
        {width ? (
          <Width
            title={datoCmsXChair.title}
            dispatch={dispatch}
            widthBool={state.width}
          />
        ) : null}
      </XchairRoot>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair($slug: String!, $headrest: String!, $memoryFoam: String) {
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
    wheels: shopifyProduct(title: { eq: "X-Chair Wheels" }) {
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
`;

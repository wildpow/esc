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
import Colors from "../components/X-Chair/prototype/Colors";
import ChairGallery from "../components/X-Chair/prototype/ChairGallery";
import MemoryFoam from "../components/X-Chair/prototype/MemoryFoam";
import getX1images from "../components/X-Chair/query/getX1Images.query";
import getX2images from "../components/X-Chair/query/getX2images.query";
import getX3images from "../components/X-Chair/query/getX3images.query";
import getX4images from "../components/X-Chair/query/getX4Images.query";
import { colors, spacing } from "../styles/theme.styled";
import { useStore } from "../contexts/Store.ctx";

const XchairRoot = styled.section`
  background-color: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
  width: 100%;
  .content {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px;
  }
  .gallery {
    width: 50%;
  }
  .features {
    width: 50%;
  }
`;
const CartWrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 100px;
  background-color: ${colors.gray[200]};
  border: 2px solid ${colors.gray[800]};
  bottom: 0;
  right: 0;
  z-index: 20;
  .cartContent {
    input {
      width: 40px;
    }
    button {
      padding: 10px;
    }
    padding: ${spacing[8]};
    display: flex;
    gap: 10px;
  }
`;
export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, width, hmt, elemax } =
    data;
  let colorSwatchs;
  let colorCB;
  let colorData;
  let extraColors;
  if (datoCmsXChair.title === "K-Sport") {
    const data2 = getX2images();
    colorSwatchs = data2.colors;
    colorCB = data2.colorCB;
    colorData = data2.data;
  } else if (datoCmsXChair.title === "ATR Fabric") {
    const data3 = getX3images();
    colorSwatchs = data3.colors;
    colorCB = data3.colorCB;
    colorData = data3.data;
  } else if (datoCmsXChair.title === "Leather Exec") {
    const data4 = getX4images();
    colorSwatchs = data4.colors;
    colorCB = data4.colorCB;
    colorData = data4.data;
    extraColors = data4.extraColors;
  } else {
    const data1 = getX1images();
    colorSwatchs = data1.colors;
    colorCB = data1.colorCB;
    colorData = data1.data;
  }
  const { addVariantToCart } = useStore();
  const initialState = GenerateInitialState(colorCB, colorSwatchs[0].title);
  const [state, dispatch] = useReducer(xChairReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT!!!!");
  };
  return (
    <Layout>
      <XchairRoot>
        {console.log(datoCmsXChair.shopifyInfo[0], "colorData", colorData)}
        <h1>X-Chair</h1>
        <div className="content">
          <div className="gallery">
            <ChairGallery
              images={colorData[state.activeColor][state.activeHeadrest]}
            />
          </div>
          <form className="features" onSubmit={handleSubmit}>
            <Model modelCB={state.modelCB} dispatch={dispatch} />
            <Colors
              colors={colorSwatchs}
              colorCB={state.colorCB}
              dispatch={dispatch}
              extraColors={extraColors}
            />
            <Headrest
              title={datoCmsXChair.title}
              headrestImg={headrest.images[0]}
              dispatch={dispatch}
              headrestBool={state.headrest}
              price={headrest.priceRangeV2.maxVariantPrice.amount}
            />
            {width ? (
              <Width
                activeColor={state.activeColor}
                title={datoCmsXChair.title}
                dispatch={dispatch}
                widthBool={state.width}
                price={width.priceRangeV2.maxVariantPrice.amount}
              />
            ) : null}
            {memoryFoam ? (
              <MemoryFoam
                activeColor={state.activeColor}
                title={datoCmsXChair.title}
                dispatch={dispatch}
                foamBool={state.foam}
                price={memoryFoam.priceRangeV2.maxVariantPrice.amount}
              />
            ) : null}
            <Wheels
              wheels={wheels.variants}
              wheelsCB={state.wheelsCB}
              dispatch={dispatch}
            />
            <CartWrapper>
              <div className="cartContent">
                <input type="number" name="" id="" />
                <button type="submit">Add to Cart</button>
                <div className="cartPrice">
                  <div>Regular Price: $10,000</div>
                  <div>Sale Price: $8,000</div>
                </div>
              </div>
            </CartWrapper>
          </form>
        </div>
      </XchairRoot>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair(
    $slug: String!
    $headrest: String!
    $memoryFoam: String
    $width: String
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
    width: shopifyProduct(storefrontId: { eq: $width }) {
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

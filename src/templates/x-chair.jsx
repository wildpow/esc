/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { useReducer } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import GenerateInitialState from "../components/X-Chair/generateInitialState";
import xChairReducer from "../components/X-Chair/xChair.reducer";
import { useWindowSize } from "../contexts/WindowSize.ctx";

import {
  Headrest,
  Wheels,
  Width,
  Colors,
  MemoryFoam,
  Model,
} from "../components/X-Chair/Features";

import getX1images from "../components/X-Chair/query/getX1Images.query";
import getX2images from "../components/X-Chair/query/getX2images.query";
import getX3images from "../components/X-Chair/query/getX3images.query";
import getX4images from "../components/X-Chair/query/getX4Images.query";
// import { colors, spacing } from "../styles/theme.styled";
import { useStore } from "../contexts/Store.ctx";
import ChairCart from "../components/X-Chair/ChairCart";
import getModels from "../components/X-Chair/query/getModel.query";
import getLogos from "../components/X-Chair/query/getLogos.query";
import {
  fonts,
  fontSize,
  boxShadow,
  radius,
  colors,
} from "../styles/theme.styled";
import Details from "../components/X-Chair/Details";
import ImageCarousel from "../components/X-Chair/NewImageCaroucel";

const XchairRoot = styled.form`
  .chairTitle {
    margin: 0;
    position: absolute;
    background-color: ${colors.gray[100]};
    /* padding-right: 5px;
    padding-left: 5px; */
    padding: 7px 10px;
    font-family: ${fonts.sans};
    border: 2px solid ${colors.blue[800]};
    top: -20px;
    z-index: 20;
    left: 20px;
    color: ${colors.gray[800]};
  }
  .featureWrapper {
    margin-top: 31px;
    display: flex;
    box-shadow: ${boxShadow.md};
    border-radius: ${radius.default};
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    width: 100%;
    border: 2px solid ${colors.gray[500]};
    /* border-bottom: none; */
    /* border-right: none; */
    padding-left: 25px;
    padding-right: 0px;
  }
  background-color: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
  width: 100%;
  .content {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 20px 0 20px;
    position: relative;
    flex-direction: column;
    /* :after {
      height: 100px;
      width: calc(50% - 20px);
      content: "";
      bottom: 0;
      position: absolute;
      right: 40px;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    } */
  }

  .gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .features {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* scroll-padding: 50px 0px 0px 50px; */
    position: relative;
    width: 100%;
  }
  @media (min-width: 768px) {
    .features {
      overscroll-behavior: auto;
      scroll-padding: 50px 0px 50px 0px;

      scroll-snap-type: both mandatory;
      max-height: 925px;
      overflow-y: auto;
      scrollbar-color: #d4aa70 #e4e4e4;
      scrollbar-width: thin;
      ::-webkit-scrollbar {
        width: 15px;
      }
      scroll-behavior: smooth;
      scrollbar-width: auto;
      scrollbar-color: #cc2228 ${colors.gray[100]};

      ::-webkit-scrollbar-track {
        background-color: #e4e4e4;
      }
      ::-webkit-scrollbar-thumb {
        border: 61px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        background-color: #cc2228;
      }
    }
    .content {
      flex-direction: row;
    }
    .gallery {
      width: 50%;
    }
    .features {
      width: 100%;
    }
    .featureWrapper {
      width: 50%;
    }
  }
`;
const Heading = styled.header`
  display: flex;
  /* border-bottom: 2px solid black; */
  justify-content: space-evenly;
  width: 100%;
  /* .xchair {
    width: 100%;
    height: auto;
  } */
  /* Not sure about this negitive margin */
  /* margin-bottom: -20px; */
  h2 {
    margin-bottom: 0;
    position: relative;
    width: 100%;
    font-family: ${fonts.sans};
    font-size: ${fontSize["3xl"]};
    display: flex;
    justify-content: start;
    align-items: center;
    ::after {
      content: "";
      position: absolute;
      width: calc(100% - 85px);
      height: 6px;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      bottom: 10px;
      left: 65px;
      background-color: #ec1221;
      background-color: #cc2228;
    }
    .title {
      max-width: 80px;
      padding-top: -3px;
    }
    /* span {
      position: relative;
      ::after {
        content: "";
        position: absolute;
        width: 110%;
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: #dadada;
      }
    } */
  }
`;
export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, chairWidth } = data;
  const models = getModels();
  const { width } = useWindowSize();
  const logos = getLogos();
  let colorSwatchs;
  let colorCB;
  let colorData;
  let extraColors;
  if (datoCmsXChair.title === "K-Sport Mgmt") {
    const data2 = getX2images();
    colorSwatchs = data2.colors;
    colorCB = data2.colorCB;
    colorData = data2.data;
  } else if (datoCmsXChair.title === "ATR Mgmt") {
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
  const initialState = GenerateInitialState(
    colorCB,
    colorSwatchs[0].title,
    datoCmsXChair.shopifyInfo[0].variants
  );
  const [state, dispatch] = useReducer(xChairReducer, initialState);
  const chairIndex = state.colorCB.indexOf(true);
  const handleSubmit = (e) => {
    const extra = [];
    e.preventDefault();
    if (state.headrest) {
      extra.push({ variantId: headrest.variants[0].storefrontId, quantity: 1 });
    }
    if (state.foam) {
      extra.push({
        variantId: memoryFoam.variants[0].storefrontId,
        quantity: 1,
      });
    }
    if (state.width) {
      extra.push({
        variantId: chairWidth.variants[0].storefrontId,
        quantity: 1,
      });
    }
    const wheelIndex = state.wheelsCB.indexOf(true);
    if (wheelIndex !== -1) {
      extra.push({
        variantId: wheels.variants[wheelIndex].storefrontId,
        quantity: 1,
      });
    }
    const modelIndex = state.modelCB.indexOf(true);
    if (modelIndex !== 0) {
      extra.push({
        variantId: models[modelIndex].variants[0].storefrontId,
        quantity: 1,
      });
    }
    if (extra.length === 0) {
      addVariantToCart(state.chairVariants[chairIndex].storefrontId, 1);
    } else {
      addVariantToCart(state.chairVariants[chairIndex].storefrontId, 1, extra);
    }
  };

  return (
    <Layout bgWhite>
      {" "}
      <HelmetDatoCms seo={datoCmsXChair.seoMetaTags} />
      <XchairRoot onSubmit={handleSubmit}>
        <Heading>
          {/* <div className="xchair">
          <StaticImage
            src="../images/xChair/logo.png"
            formats={["avif", "png"]}
            layout="constrained"
            width={250}
            alt="x-chair logo"
          />
        </div> */}
          <h2>
            <div className="title">
              <GatsbyImage
                image={getImage(logos[datoCmsXChair.title].image)}
                alt={logos[datoCmsXChair.title].alt}
              />
            </div>
            <span>{`${datoCmsXChair.title} Chair`}</span>
          </h2>
        </Heading>
        <div className="content">
          <div className="gallery">
            <ImageCarousel
              imagesArray={colorData[state.activeColor][state.activeHeadrest]}
            />
            {width > 768 && (
              <ChairCart
                price={state.price}
                comparePrice={state.compareAtPrice}
              />
            )}
          </div>
          <div className="featureWrapper">
            <h3 className="chairTitle">Chair Options</h3>
            <div className="features">
              <Model
                modelCB={state.modelCB}
                dispatch={dispatch}
                logoImg={logos[datoCmsXChair.title]}
              />
              <Colors
                colors={colorSwatchs}
                colorCB={state.colorCB}
                dispatch={dispatch}
                extraColors={extraColors}
                seatWidth={state.width}
                memoryFoam={state.foam}
              />
              <Headrest
                title={datoCmsXChair.title}
                headrestImg={headrest.images[0]}
                dispatch={dispatch}
                headrestBool={state.headrest}
                price={headrest.priceRangeV2.maxVariantPrice.amount}
              />
              {chairWidth ? (
                <Width
                  activeColor={state.activeColor}
                  title={datoCmsXChair.title}
                  dispatch={dispatch}
                  widthBool={state.width}
                  price={chairWidth.variants[0].price}
                />
              ) : null}
              {memoryFoam ? (
                <MemoryFoam
                  activeColor={state.activeColor}
                  title={datoCmsXChair.title}
                  dispatch={dispatch}
                  foamBool={state.foam}
                  price={memoryFoam.variants[0].price}
                />
              ) : null}
              <Wheels
                wheels={wheels.variants}
                wheelsCB={state.wheelsCB}
                dispatch={dispatch}
                title={datoCmsXChair.title}
              />
            </div>
          </div>
        </div>
        {width < 768 && (
          <ChairCart price={state.price} comparePrice={state.compareAtPrice} />
        )}{" "}
        <Details
          extraFeatureText={datoCmsXChair.extraFeatureText}
          logoImg={logos[datoCmsXChair.title]}
          features={datoCmsXChair.features}
          specSheet={datoCmsXChair.specSheet}
        />
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
      extraFeatureText
      specSheet {
        gatsbyImageData(layout: CONSTRAINED, width: 1000)
        alt
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      features: chairFeatures {
        smallTitle
        largeTitle
        description
        imageOnTheLeftOrRight
        featureImage {
          alt
          gatsbyImageData(layout: CONSTRAINED, width: 450)
        }
      }
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
        }
        title
        description
      }
    }
    memoryFoam: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      title
      variants {
        price
        storefrontId
      }
    }
    chairWidth: shopifyProduct(storefrontId: { eq: $width }) {
      title
      variants {
        price
        storefrontId
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
          gatsbyImageData(layout: CONSTRAINED, height: 103)
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

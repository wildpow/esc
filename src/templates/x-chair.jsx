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
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";

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
  breakpoints,
  spacing,
} from "../styles/theme.styled";
import Details from "../components/X-Chair/Details";
import ImageCarousel from "../components/X-Chair/NewImageCaroucel";

const XchairRoot = styled.form`
  .chairTitle {
    margin: 0;
    position: absolute;
    background-color: ${colors.gray[100]};
    padding: 7px 10px;
    font-family: ${fonts.sans};
    border: 2px solid ${colors.blue[800]};
    top: -20px;
    z-index: 20;
    left: 15px;
    color: ${colors.gray[800]};
  }
  .featureWrapper {
    padding-left: 0px;
    margin-top: 31px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding-right: 0px;
  }
  background-color: white;
  width: 100%;
  .mainRootContent {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0px 5px 0 5px;
    position: relative;
    flex-direction: column;
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
    position: relative;
    width: 100%;
  }
  .featureWrapper {
    border-top: 2px solid ${colors.gray[500]};
    /* border-bottom: 2px solid ${colors.gray[500]}; */
  }
  @media (min-width: ${breakpoints.phablet}) {
    .featureWrapper {
      margin: ${spacing[8]} auto 0 auto;
      width: auto;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
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
    .mainRootContent {
      flex-direction: row;
      padding: 20px 20px 20px 20px;
      align-items: flex-end;
    }
    .gallery {
      width: 50%;
    }
    .features {
      width: 100%;
    }
    .featureWrapper {
      width: 60%;
      /* border: 2px solid ${colors.gray[500]};
      box-shadow: ${boxShadow.md};
      border-radius: ${radius.default}; */
      /* padding-left: 25px; */
    }
  }
  @media (min-width: 1250px) {
    .gallery {
      width: 50%;
    }
    .featureWrapper {
      width: 50%;
      padding-left: 25px;
      border: 2px solid ${colors.gray[500]};
      box-shadow: ${boxShadow.md};
      border-radius: ${radius.default};
    }
  }
`;
const Heading = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    width: 100%;
    font-family: ${fonts.sans};
    font-size: ${fontSize.xl};
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    ::after {
      content: "";
      position: absolute;
      width: calc(100% - 55px);
      height: 6px;
      border-radius: 40px;

      bottom: 5px;
      left: 45px;
      background-color: #ec1221;
      background-color: #cc2228;
    }
  }
  .title {
    max-width: 45px;
    padding-top: -3px;
  }
  @media (min-width: ${breakpoints.phablet}) {
    .title {
      max-width: 60px;
    }
    h2 {
      font-size: ${fontSize["2xl"]};
      ::after {
        width: calc(100% - 85px);
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        bottom: 10px;
        left: 65px;
      }
    }
  }
  @media (min-width: ${breakpoints.md}) {
    h2 {
      font-size: ${fontSize["3xl"]};
      ::after {
        left: 75px;
      }
    }
    .title {
      max-width: 80px;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    h2 {
      font-size: ${fontSize["4xl"]};
    }
  }
`;
export default function XChair({ data }) {
  const { datoCmsXChair, headrest, wheels, memoryFoam, chairWidth } = data;
  function generateColorData(mainColors, extra1, extra2) {
    const colorData = {};
    const mainColorSwatchs = [];
    const extraColorSwatchs = [];
    const extraColorSwatchs2 = [];
    let extraColors = null;
    let indexCount = 0;
    if (extra1 && extra2) {
      console.log("POOP");
      mainColors.forEach((element, index) => {
        colorData[element.colorTitle] = {
          default: element.default,
          headrest: element.withHeadrestImages,
        };
        mainColorSwatchs.push({
          title: element.colorTitle,
          img: element.colorSwatch.gatsbyImageData,
          alt: element.colorSwatch.alt,
          index: indexCount ? indexCount + 1 : indexCount,
        });
        indexCount += 1;
      });
      extra1.forEach((element, index) => {
        colorData[element.colorTitle] = {
          default: element.default,
          headrest: element.withHeadrestImages,
        };
        extraColorSwatchs.push({
          title: element.colorTitle,
          img: element.colorSwatch.gatsbyImageData,
          alt: element.colorSwatch.alt,
          index: indexCount ? indexCount + 1 : indexCount,
        });
        indexCount += 1;
      });
      extra2.forEach((element, index) => {
        colorData[element.colorTitle] = {
          default: element.default,
          headrest: element.withHeadrestImages,
        };
        extraColorSwatchs2.push({
          title: element.colorTitle,
          img: element.colorSwatch.gatsbyImageData,
          alt: element.colorSwatch.alt,
          index: indexCount ? indexCount + 1 : indexCount,
        });
        indexCount += 1;
      });
      extraColors = {
        "Premium Leather": extraColorSwatchs,
        Brisa: extraColorSwatchs2,
      };
    } else {
      mainColors.forEach((element, index) => {
        colorData[element.colorTitle] = {
          default: element.default,
          headrest: element.withHeadrestImages,
        };
        mainColorSwatchs.push({
          title: element.colorTitle,
          img: element.colorSwatch.gatsbyImageData,
          alt: element.colorSwatch.alt,
          index,
        });
      });
    }
    return {
      allColorData: colorData,
      mainSwatches: mainColorSwatchs,
      extraColors,
    };
  }
  const models = getModels();
  const { width } = useWindowSize();
  const logos = getLogos();
  let colorSwatchs;
  let colorCB;
  let colorData;
  let extraColors;
  console.log(
    generateColorData(
      datoCmsXChair.colors,
      datoCmsXChair.premiumLeather,
      datoCmsXChair.brisa
    )
  );
  const newColorData = [
    ...datoCmsXChair.colors,
    ...datoCmsXChair.premiumLeather,
    ...datoCmsXChair.brisa,
  ];
  const poop = {};
  const poop2 = [];
  newColorData.forEach((element, i) => {
    poop[element.colorTitle] = {
      default: element.default,
      headrest: element.withHeadrestImages,
    };
    poop2.push({
      title: element.colorTitle,
      img: element.colorSwatch.gatsbyImageData,
      alt: element.colorSwatch.alt,
      index: i,
    });
  });
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
    datoCmsXChair.shopifyInfo[0].variants,
    datoCmsXChair
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
      {/* {console.log(newColorData, colorData)}
      {console.log(colorSwatchs, "colorSwatchs")}
      {console.log(poop2, "poop2")} */}
      {console.log(extraColors, "extraColors")}
      <HelmetDatoCms seo={datoCmsXChair.seoMetaTags} />
      <XchairRoot onSubmit={handleSubmit}>
        <BreadWrapper>
          <BreadCrumbs next="x-chair" here={datoCmsXChair.slug} />
        </BreadWrapper>
        <Heading>
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
        <div className="mainRootContent">
          <div className="gallery">
            <ImageCarousel
              imagesArray={poop[state.activeColor][state.activeHeadrest]}
            />
            {width >= 1024 && (
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
                popupContent={datoCmsXChair.colorPopupContent}
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
        {width < 1024 && (
          <ChairCart price={state.price} comparePrice={state.compareAtPrice} />
        )}
        <Details
          extraFeatureText={datoCmsXChair.extraFeatureText}
          logoImg={logos[datoCmsXChair.title]}
          features={datoCmsXChair.features}
          specSheet={datoCmsXChair.specSheet}
        />
        <BreadWrapper>
          <BreadCrumbs next="x-chair" here={datoCmsXChair.slug} />
        </BreadWrapper>
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
      colorPopupContent
      premiumLeather {
        colorTitle
        colorSwatch {
          alt
          gatsbyImageData(layout: FIXED, width: 60, height: 60)
        }
        default: defaultImages {
          alt
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
        }
        withHeadrestImages {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
        }
      }
      brisa {
        colorTitle
        default: defaultImages {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
          alt
        }
        withHeadrestImages {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
          alt
        }
        colorSwatch {
          alt
          gatsbyImageData(layout: FIXED, width: 60, height: 60)
        }
      }
      colors {
        colorTitle
        default: defaultImages {
          alt
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
        }
        withHeadrestImages {
          alt
          gatsbyImageData(
            layout: CONSTRAINED
            width: 1000
            placeholder: TRACED_SVG
          )
        }
        colorSwatch {
          alt
          gatsbyImageData(layout: FIXED, width: 60, height: 60)
        }
      }
      slug
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
          gatsbyImageData(layout: CONSTRAINED, height: 206)
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

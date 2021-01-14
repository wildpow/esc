import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import ImageCarousel from "../components/SingleProduct/ImageCarousel";
import {
  Wrapper,
  Main,
  MainInfo,
  Warranty,
  Description,
  Article,
  Profile,
  MainTitle,
  // List,
  Construction,
  // Info,
} from "../components/SingleProduct/SingleProduct.styled";
import dateSEO from "../functions/dateSEO";
import MattressForm from "../components/SingleProduct/MattressForm";
import { useWindowSize } from "../context/WindowSizeContext";
import FeatureList from "../components/SingleProduct/FeatureList";

const Base = ({ data }) => {
  const { width } = useWindowSize();
  const { datoCmsProduct: product } = data;
  const mergeFeatureLists = (smallList, bigList) => {
    const ids = new Set(bigList.map((d) => d.id));
    return [...bigList, ...smallList.filter((d) => !ids.has(d.id))];
  };
  return (
    <Layout>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <BreadWrapper>
          <BreadCrumbs
            next={product.typeOfProduct.title}
            here={product.title}
          />
        </BreadWrapper>
        <Wrapper>
          <HelmetDatoCms seo={product.seoMetaTags}>
            <script type="application/ld+json">
              {`

        {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${product.title}",
    "url": "https://www.escmattresscenter.com/${product.typeOfProduct.title.toLowerCase()}/${
                product.slug
              }",
    "image": "${product.threeImageBlock[0].coverImage.url}",
    "description": "${product.description}",
    "brand": {
        "@type": "Brand",
        "name": "${product.brand}"
    },
    "sku": "ESC${product.brand.toUpperCase()}.${product.slug}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": "${Math.trunc(
          product.shopifyInfo[0].priceRange.maxVariantPrice.amount,
        )}",
        "lowPrice": "${Math.trunc(
          product.shopifyInfo[0].priceRange.minVariantPrice.amount,
        )}",
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${product.shopifyInfo[0].variants.length}"

    }
}
        `}
            </script>
          </HelmetDatoCms>
          <header>
            <MainTitle>{product.title}</MainTitle>
          </header>
          <Main>
            <ImageCarousel
              saleBanner={product.shopifyInfo[0].metafields[0].value}
              cover={product.threeImageBlock[0].coverImage}
              img1={product.threeImageBlock[0].image2}
              img2={product.threeImageBlock[0].image3}
              base
            />
            <MainInfo>
              {width > 768 && (
                <FeatureList top list={product.productFeatures} width={width} />
              )}
              <MattressForm
                variants={product.shopifyInfo[0].variants}
                priceMin={
                  product.shopifyInfo[0].priceRange.minVariantPrice.amount
                }
                priceMax={
                  product.shopifyInfo[0].priceRange.maxVariantPrice.amount
                }
                maxQty={4}
              />
            </MainInfo>
          </Main>
          <header id="moreInfo">
            <MainTitle red>OVERVIEW & SPECS</MainTitle>
          </header>
          <Article>
            <Description>{product.description}</Description>
            <Profile>{`Profile: ${product.height}`}</Profile>
            <Construction>
              {width < 767 ? (
                <FeatureList
                  list={mergeFeatureLists(
                    product.productFeatures,
                    product.fullFeatureList,
                  )}
                  width={width}
                />
              ) : (
                <FeatureList list={product.fullFeatureList} width={width} />
              )}
            </Construction>
            <Warranty>{product.warranty}</Warranty>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs
            next={product.typeOfProduct.title}
            here={product.title}
          />
        </BreadWrapper>
      </div>
    </Layout>
  );
};
Base.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Base;

export const query = graphql`
  query singleProduct($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      typeOfProduct {
        title
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      brand
      description
      slug
      warranty
      height
      productFeatures {
        id
        title
        description
      }
      fullFeatureList {
        id
        title
        description
      }
      threeImageBlock {
        coverImage {
          alt
          url
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        image2 {
          alt
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        image3 {
          alt
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      shopifyInfo {
        variants {
          compareAtPrice
          price
          title
          shopifyId
          compareAtPrice
        }
        metafields {
          value
          key
          id
        }
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
`;

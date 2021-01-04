import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import useMobileDetect from "../components/SingleProduct/useMobileDect";
import Layout from "../components/Layout";
import {
  Article,
  Description,
  List,
  Construction,
  Info,
  Main,
  MainInfo,
  MainTitle,
  Profile,
  Warranty,
  Wrapper,
} from "../components/SingleProduct/SingleProduct.styled";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
// import DropDown from "../components/SingleProduct/priceDropDown.mattress";
// import ShopifyDropDown from "../components/SingleProduct/priceDropdownShopify.matt";
import dateSEO from "../functions/dateSEO";
import ImageCarousel from "../components/SingleProduct/ImageCarousel";
import FirmnessScale from "../components/SingleProduct/FirmessScaleMobile";
import MattressForm from "../components/SingleProduct/MattressForm";
import { useWindowSize } from "../context/WindowSizeContext";

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mattress = ({ data }) => {
  const {
    datoCmsNewMattress: mattress,
    shopifyBase,
    shopify2Inch,
    shopify5Inch,
    shopify9Inch,
  } = data;
  const detectMobile = useMobileDetect();
  const { width } = useWindowSize();
  const saleBanner = mattress.shopifyInfo[0].metafields.filter(
    (item) => item.key === "saleBanner",
  );
  return (
    <Layout>
      <HelmetDatoCms seo={mattress.seoMetaTags}>
        <script type="application/ld+json">
          {`

        {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${mattress.brand.displayName} ${mattress.subline.name} ${
            mattress.nameWithout
          }",
    "url": "https://www.escmattresscenter.com/brands/${
      mattress.brand.urlName
    }/${mattress.slug}",
    "image": "${mattress.images[0].coverImage.url}",
    "description": "${mattress.description}",
    "brand": {
        "@type": "Brand",
        "name": "${mattress.brand.displayName}"
    },
    "sku": "ESC${mattress.brand.urlName.toUpperCase()}.${mattress.nameWithout}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": ${
          mattress.shopifyInfo[0].priceRange.maxVariantPrice.amount
        },
        "lowPrice": ${
          mattress.shopifyInfo[0].priceRange.minVariantPrice.amount
        },
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${
          Object.values(mattress.shopifyInfo[0].variants).filter(
            (value) => value !== 0,
          ).length
        }"

    }
}
        `}
        </script>
      </HelmetDatoCms>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <BreadWrapper>
          <BreadCrumbs
            next="Brands"
            next2={mattress.brand.urlName}
            here={`${mattress.subline.name} ${mattress.name}`}
          />
        </BreadWrapper>
        <Wrapper>
          <header>
            <MainTitle>
              {`${mattress.brand.displayName} ${mattress.subline.name} ${mattress.nameWithout}`}
            </MainTitle>
          </header>
          <Main>
            <LeftSide>
              <ImageCarousel
                isMobile={detectMobile.isMobile()}
                cover={mattress.images[0].coverImage}
                img1={mattress.images[0].image2}
                img2={mattress.images[0].image3}
                saleBanner={saleBanner.length === 1 ? saleBanner[0].value : ""}
                mattName={`${mattress.brand.displayName} ${mattress.nameWithout}`}
                firmness={mattress.firmness}
              />
              {detectMobile.isMobile() && (
                <FirmnessScale firmness={mattress.firmness} />
              )}
            </LeftSide>
            <MainInfo>
              {width > 767 && (
                <List>
                  <h3>Features</h3>
                  <ul>
                    {mattress.topSmallFeatureList.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                    <Info>
                      <AnchorLink href="#moreInfo">See more details</AnchorLink>
                    </Info>
                  </ul>
                </List>
              )}
              <MattressForm
                variants={mattress.shopifyInfo[0].variants}
                priceMin={
                  mattress.shopifyInfo[0].priceRange.minVariantPrice.amount
                }
                priceMax={
                  mattress.shopifyInfo[0].priceRange.maxVariantPrice.amount
                }
                matt
                maxQty={4}
                boxVariants={[shopify2Inch, shopify5Inch, shopify9Inch]}
                shopifyBase={shopifyBase}
              />
            </MainInfo>
          </Main>
          <header id="moreInfo">
            <MainTitle red>OVERVIEW & SPECS</MainTitle>
          </header>
          <Article>
            <Description>{mattress.description}</Description>
            <Profile>{`Profile: ${mattress.profile}`}</Profile>
            <Construction>
              <h3>Key Features:</h3>
              <ul>
                {mattress.bottomFeatureList.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </Construction>
            <Warranty>{mattress.warrantyTitle}</Warranty>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs
            next="Brands"
            next2={mattress.brand.urlName}
            here={`${mattress.subline.name} ${mattress.nameWithout}`}
          />
        </BreadWrapper>
      </div>
    </Layout>
  );
};
Mattress.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Mattress;

export const query = graphql`
  query singleMattress(
    $slug: String!
    $shopifyBase: String!
    $shopify2Inch: String!
    $shopify5Inch: String!
    $shopify9Inch: String!
  ) {
    shopifyBase: shopifyProduct(shopifyId: { eq: $shopifyBase }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify2Inch: shopifyProduct(shopifyId: { eq: $shopify2Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify5Inch: shopifyProduct(shopifyId: { eq: $shopify5Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify9Inch: shopifyProduct(shopifyId: { eq: $shopify9Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    datoCmsNewMattress(slug: { eq: $slug }) {
      nameWithout
      firmness
      slug
      description
      profile
      warrantyTitle
      subline {
        name
      }
      brand {
        urlName
        displayName
      }
      topSmallFeatureList {
        id
        title
        description
      }
      bottomFeatureList {
        id
        title
        description
      }
      images {
        coverImage {
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          url
        }
        image2 {
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          url
        }
        image3 {
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          url
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      shopifyInfo {
        metafields {
          key
          value
        }
        title
        vendor
        shopifyId
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        variants {
          compareAtPrice
          price
          title
          shopifyId
        }
      }
    }
  }
`;

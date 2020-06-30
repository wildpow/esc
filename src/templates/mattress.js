import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import useMobileDetect from "../components/singleProduct/useMobileDect";
import Layout from "../components/layout";
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
} from "../components/singleProduct/singleProduct.styles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import DropDown from "../components/singleProduct/priceDropDown.mattress";
import ShopifyDropDown from "../components/singleProduct/priceDropdownShopify.matt";
import dateSEO from "../functions/dateSEO";
import ImageCarousel from "../components/singleProduct/ImageCarousel";
import FirmnessScale from "../components/singleProduct/FirmessScaleMobile";

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mattress = ({ data }) => {
  const {
    datoCmsMattress: mattress,
    shopify2Inch,
    shopify5Inch,
    shopify9Inch,
    shopifyMattress,
  } = data;
  const detectMobile = useMobileDetect();
  return (
    <Layout>
      <HelmetDatoCms seo={mattress.seoMetaTags}>
        <script type="application/ld+json">
          {`

        {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${mattress.brand.displayName} ${mattress.subline.name} ${
            mattress.name
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
    "sku": "ESC${mattress.brand.urlName.toUpperCase()}.${mattress.name}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": ${mattress.priceHigh},
        "lowPrice": ${mattress.priceLow},
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${
          Object.values(mattress.price[0]).filter((value) => value !== 0).length
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
              {`${mattress.brand.displayName} ${mattress.subline.name} ${mattress.name}`}
            </MainTitle>
          </header>
          <Main>
            <LeftSide>
              <ImageCarousel
                isMobile={detectMobile.isMobile()}
                cover={mattress.images[0].coverImage}
                img1={mattress.images[0].image2}
                img2={mattress.images[0].image3}
                saleBanner={mattress.saleInfo[0].saleBanner}
                mattName={`${mattress.brand.displayName} ${mattress.name}`}
                firmness={mattress.firmness}
              />
              {detectMobile.isMobile() && (
                <FirmnessScale firmness={mattress.firmness} />
              )}
            </LeftSide>
            <MainInfo>
              <List>
                <h3>Features</h3>
                <ul>
                  {mattress.listFeature.map((item) => (
                    <li key={item.id}>{item.feature}</li>
                  ))}
                  <Info>
                    <AnchorLink href="#moreInfo">See more details</AnchorLink>
                  </Info>
                </ul>
              </List>
              {shopifyMattress === null ? (
                <DropDown
                  typeOfDiscount={mattress.saleInfo[0].typeOfDiscount}
                  freeBoxSpring={mattress.saleInfo[0].freeBox}
                  discount={mattress.saleInfo[0].discount}
                  prices={mattress.price[0]}
                  boxPrices={
                    mattress.subline.name === "iComfort"
                      ? mattress.brand.boxPrice[1]
                      : mattress.brand.boxPrice[0]
                  }
                  mattress={mattress.name}
                  subline={mattress.subline.name}
                />
              ) : (
                <ShopifyDropDown
                  shopify2Inch={shopify2Inch}
                  shopify5Inch={shopify5Inch}
                  shopify9Inch={shopify9Inch}
                  shopifyMattress={shopifyMattress}
                />
              )}
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
                {mattress.construction.map((item) => (
                  <li key={item.id}>{item.feature}</li>
                ))}
              </ul>
            </Construction>
            <Warranty>{mattress.warranty}</Warranty>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs
            next="Brands"
            next2={mattress.brand.urlName}
            here={`${mattress.subline.name} ${mattress.name}`}
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
  query SingleMattress(
    $slug: String!
    $shopifyMatt: String!
    $shopify2Inch: String!
    $shopify5Inch: String!
    $shopify9Inch: String!
  ) {
    shopifyMattress: shopifyProduct(shopifyId: { eq: $shopifyMatt }) {
      title
      vendor
      shopifyId
      variants {
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
        price
        title
        shopifyId
      }
    }
    datoCmsMattress(slug: { eq: $slug }) {
      shopMattConnection
      priceLow
      priceHigh
      slug
      name
      firmness
      id
      description
      profile
      warranty
      listFeature {
        feature
        id
      }
      construction {
        feature
        id
      }
      saleInfo {
        saleBanner
        discount
        typeOfDiscount
        freeBox
      }
      price {
        twin
        twinxl
        full
        queen
        king
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
      subline {
        name
      }
      brand {
        displayName
        urlName
        boxPrice {
          twin
          twinxl
          full
          queen
          king
        }
      }
    }
  }
`;

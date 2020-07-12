import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import ImageCarousel from "../components/SingleProduct/ImageCarousel";
// import PriceDropDown from "../components/SingleProduct/PriceDropDown.base";
import {
  Wrapper,
  Main,
  MainInfo,
  Warranty,
  Description,
  Article,
  Profile,
  MainTitle,
  List,
  Construction,
  Info,
} from "../components/SingleProduct/SingleProduct.styled";
import dateSEO from "../functions/dateSEO";
import MattressForm from "../components/SingleProduct/MattressForm";
import { useWindowSize } from "../context/WindowSizeContext";

const Base = ({ data }) => {
  const { width } = useWindowSize();
  const { datoCmsAdjustableBase: adjBase, shopifyBase } = data;
  const removeZeroPrices = Object.values(adjBase.price[0]).filter(
    (value) => value !== 0,
  );
  return (
    <Layout>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <BreadWrapper>
          <BreadCrumbs next="Adjustable" here={adjBase.fullName} />
        </BreadWrapper>
        <Wrapper>
          <HelmetDatoCms seo={adjBase.seoMetaTags}>
            <script type="application/ld+json">
              {`

        {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${adjBase.fullName}",
    "url": "https://www.escmattresscenter.com/adjustable/${adjBase.slug}",
    "image": "${adjBase.images3[0].url}",
    "description": "${adjBase.description}",
    "brand": {
        "@type": "Brand",
        "name": "${adjBase.brand}"
    },
    "sku": "ESC${adjBase.brand.toUpperCase()}.${adjBase.slug}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": "${removeZeroPrices[0]}",
        "lowPrice": "${removeZeroPrices[removeZeroPrices.length - 1]}",
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${removeZeroPrices.length}"

    }
}
        `}
            </script>
          </HelmetDatoCms>
          <header>
            <MainTitle>{adjBase.fullName}</MainTitle>
          </header>
          <Main>
            <ImageCarousel
              saleBanner={adjBase.sale[0].saleBanner}
              cover={adjBase.images3[0]}
              img1={adjBase.images3[1]}
              img2={adjBase.images3[2]}
              base
            />
            <MainInfo>
              {width > 768 && (
                <List>
                  <h3>Features</h3>
                  <ul>
                    {adjBase.smallFeatureList.map((item) => (
                      <li key={item.id}>{item.feature}</li>
                    ))}
                    <Info>
                      <AnchorLink href="#moreInfo">See more details</AnchorLink>
                    </Info>
                  </ul>
                </List>
              )}
              <MattressForm
                variants={shopifyBase.variants}
                priceMin={shopifyBase.priceRange.minVariantPrice.amount}
                priceMax={shopifyBase.priceRange.maxVariantPrice.amount}
                maxQty={4}
              />
            </MainInfo>
          </Main>
          <header id="moreInfo">
            <MainTitle red>OVERVIEW & SPECS</MainTitle>
          </header>
          <Article>
            <Description>{adjBase.description}</Description>
            <Profile>{`Profile: ${adjBase.height}`}</Profile>
            <Construction>
              <h3>Key Features:</h3>
              <ul>
                {adjBase.fullFeatureList.map((item) => (
                  <li key={item.id}>{item.feature}</li>
                ))}
              </ul>
            </Construction>
            <Warranty>{adjBase.warranty}</Warranty>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs next="adjustable" here={adjBase.fullName} />
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
  query singleAdjustable($slug: String!, $shopifyBase: String!) {
    shopifyBase: shopifyProduct(shopifyId: { eq: $shopifyBase }) {
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
        price
        title
        shopifyId
        compareAtPrice
      }
    }
    datoCmsAdjustableBase(slug: { eq: $slug }) {
      brand
      slug
      fullName
      description
      images3 {
        fluid(
          maxWidth: 500
          imgixParams: { auto: "compress", lossless: true }
        ) {
          ...GatsbyDatoCmsFluid
        }
        url
        alt
      }
      warranty
      height
      price {
        twin
        twinxl
        full
        queen
        king
      }
      sale {
        saleBanner
        discount
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      smallFeatureList {
        feature
        id
      }
      fullFeatureList {
        feature
        id
      }
    }
  }
`;

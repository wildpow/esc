import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
// import AccDropDown from "../components/accessories/AccDropDown";
import {
  Article,
  Description,
  List,
  // Construction,
  // Info,
  Main,
  MainInfo,
  MainTitle,
  // Profile,
  // Warranty,
  Wrapper,
} from "../components/SingleProduct/SingleProduct.styled";
import ImageCarousel from "../components/SingleProduct/ImageCarousel";
import MattressForm from "../components/SingleProduct/MattressForm";
import dateSEO from "../functions/dateSEO";

const SmList = styled(List)`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`;

const LgList = styled(List)`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Accessory = ({ data }) => {
  const { shopifyProduct: product } = data;
  return (
    <Layout>
      <Helmet>
        <title>{`${product.title} at ESC Mattress Center`}</title>
        <meta property="og:title" content={product.title} />
        <meta name="twitter:title" content={product.title} />
        <meta
          name="description"
          content={`${product.description} at ESC Mattress Center in Everett, WA`}
        />
        <meta
          property="og:description"
          content={`${product.description} at ESC Mattress Center in Everett, WA`}
        />
        <meta
          name="twitter:description"
          content={`${product.description} at ESC Mattress Center in Everett, WA`}
        />
        <meta
          name="twitter:site"
          content="@https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* This time needs to change!!!!!!!!!!!!!!!!!!!! */}
        {/* <meta property="article:modified_time" content="2020-07-11T19:50:32Z" />
        <meta
          property="article:published_time"
          content="2020-07-11T19:50:32Z"
        /> */}
        <meta
          property="article:publisher"
          content="https://www.facebook.com/ESCMattressCenter/"
        />
        <meta property="og:locale" content="en_EN" />
        <meta property=" og:type" content="product" />
        <meta property="og:site_name" content="E.S.C Mattress Center" />
        <meta property="og:image" content={product.images.originalSrc} />
        <meta name="twitter:image" content={product.images.originalSrc} />

        <script type="application/ld+json">
          {`

        {  
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${product.title}",
    "url": "https://www.escmattresscenter.com/accessories/${product.handle}",
    "image": "${product.images[0].originalSrc}",
    "description": "${product.description}",
    "brand": {
        "@type": "${product.productType}",
        "name": "${product.title}"
    },
    "sku": "ESC${product.title}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": ${product.priceRange.maxVariantPrice.amount},
        "lowPrice": ${product.priceRange.minVariantPrice.amount},
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${product.variants.length}"

    }
}
        `}
        </script>
      </Helmet>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <BreadWrapper>
          <BreadCrumbs
            acc
            next="Accessories"
            next2={product.productType}
            here={product.title}
          />
        </BreadWrapper>
        <Wrapper>
          <header>
            <MainTitle>{product.title}</MainTitle>
          </header>
          <Main>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ImageCarousel
                base
                cover={product.images[0].localFile.childImageSharp}
                img1={product.images[1].localFile.childImageSharp}
                img2={product.images[2].localFile.childImageSharp}
                mattName={product.title}
              />
            </div>
            <MainInfo>
              <SmList>
                <h3>{product.metafields[0].key}</h3>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: product.metafields[0].value,
                  }}
                />
              </SmList>

              <MattressForm
                variants={product.variants}
                priceMin={product.priceRange.minVariantPrice.amount}
                priceMax={product.priceRange.maxVariantPrice.amount}
              />
              {/* <AccDropDown product={product} /> */}
            </MainInfo>
          </Main>
          <header id="moreInfo">
            <MainTitle red>OVERVIEW & SPECS</MainTitle>
          </header>
          <Article>
            <Description>{product.description}</Description>
            <LgList>
              <h3>{product.metafields[0].key}</h3>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: product.metafields[0].value,
                }}
              />
            </LgList>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs
            acc
            next="Accessories"
            next2={product.productType}
            here={product.title}
          />
        </BreadWrapper>
      </div>
    </Layout>
  );
};

Accessory.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const query = graphql`
  query SingleAccessory($id: String!) {
    shopifyProduct(shopifyId: { eq: $id }) {
      title
      metafields {
        key
        value
        id
      }
      images {
        originalSrc
      }
      handle
      shopifyId
      productType
      tags
      vendor
      availableForSale
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
        shopifyId
        price
        title
        compareAtPrice
      }
      description
      descriptionHtml
      title
      images {
        originalSrc
        localFile {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          currencyCode
          amount
        }
        maxVariantPrice {
          currencyCode
          amount
        }
      }
    }
  }
`;
export default Accessory;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
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

const SmList = styled(List)`
  display: flex;
  @media (max-width: 768px) {
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

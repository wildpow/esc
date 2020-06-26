import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
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
} from "../components/singleProduct/singleProduct.styles";
import ImageCarousel from "../components/singleProduct/ImageCarousel";
import AccessoryForm from "../components/accessories/AccessoryForm";

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
              <List>
                <h3>{product.metafields[0].key}</h3>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: product.metafields[0].value,
                  }}
                />
              </List>
              <AccessoryForm
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

import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Main,
  StyledLink,
  H3,
  InfoWrapper,
  ImageContainer,
  // AdjMarkdown,
} from "../styles/adjustableStyles";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import Layout from "../components/Layout";
import { colors, fonts, fontSize } from "../utils/styles";

export const AdjMarkdown = styled.div`
  font-family: ${(props) => props.theme.MainFont3};
  padding: 0px;
  /* margin-top: 7%;
  width: 50%; */
  /* display: none; */
  padding-top: 10px;
  h3 {
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
    font-size: 1.3rem;
    color: ${colors.blue["900"]};
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
    padding-left: 20px;
    /* margin-left: 20px; */
  }
  ul {
    list-style: square;
    margin-top: 10px;
    padding-right: 10px;
    font-size: 1rem;
  }
  li {
    line-height: 1.35rem;
    padding-bottom: 2px;
    font-size: 0.9rem;
    color: ${colors.gray["700"]};
  }
  /* @media (min-width: 568px) {
    display: block;
  } */
  @media (min-width: 640px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 731px) {
    /* margin-top: 5%; */
    h3 {
      padding-bottom: 3px;
      font-size: 1.6rem;
    }
    li {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
    }
    li {
      padding-bottom: 2px;
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1024px) {
    padding-top: 20px;
    h3 {
      font-size: 2rem;
      padding-bottom: 4px;
      font-weight: 700;
    }
    li {
      font-size: 1.4rem;
      line-height: 2.1rem;
      letter-spacing: 0.03rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-size: 2rem;
      padding-left: 20px;
    }
  }
`;

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
`;
export const Banner = styled.div`
  font-family: ${(props) => props.theme.MainFont1};
  font-weight: 400;
  text-align: center;
  z-index: 10;
  background-color: ${(props) => props.theme.mainColor2};
  color: white;
  position: absolute;
  font-size: 0.8rem;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 60%;
  margin-left: 0px;
  letter-spacing: 0.105rem;
  top: 6%;
  :after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${(props) => props.theme.mainColor2};
    transform-origin: bottom left;
    transform: skew(-21deg, 0deg);
  }
  @media (min-width: 375px) and (orientation: portrait) {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 0.9rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 1.2rem;
    width: 85%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    font-size: 1rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
  }
  @media (min-width: 813px) and (orientation: landscape) {
    font-size: 1.1rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 1.3rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
  }
  @media (min-width: 1024px) and (orientation: portrait) {
    font-size: 1.4rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 80%;
  }
  @media (min-width: 1300px) {
    width: 70%;
    font-size: 1.4rem;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  justify-self: center;
  align-self: center;
  @media (min-width: 568px) {
    width: 50%;
  }
`;
// ADD PRICE RANGE TO ADJUSTABLE LIST
export const PriceRange = styled.div`
  color: ${(props) => props.theme.newColor2};
  font-weight: 400;
  font-family: ${(props) => props.theme.MainFont1};
  /* text-align: center;
  z-index: 5; */
  padding-left: 20px;
  font-size: ${fontSize.xl};
  padding-bottom: 20px;
  font-weight: 700;
  align-self: flex-start;
  @media (min-width: 768px) {
    letter-spacing: 0.05rem;
    align-self: flex-end;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    font-size: ${fontSize["3xl"]};
    align-self: flex-end;
    padding-right: 20px;
  }
`;
const PriceRangeer = styled.div`
  color: ${(props) => props.theme.newColor2};
  font-weight: 400;
  font-family: ${(props) => props.theme.MainFont1};
  /* text-align: center;
  z-index: 5; */
  font-size: ${fontSize.xl};
  padding-right: 20px;
  /* padding-top: 20px; */
  padding-bottom: 20px;
  font-weight: 700;
  text-align: end;
  align-self: flex-end;
  @media (min-width: 568px) {
    display: none;
  }
  @media (min-width: 768px) {
    letter-spacing: 0.05rem;
  }
`;
const Stuff = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  display: none;

  @media (min-width: 568px) {
    display: flex;
  }
`;
const Adjustables = ({ data }) => {
  const { allDatoCmsProduct } = data;
  const sortedBases = allDatoCmsProduct.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
  );
  return (
    <Layout>
      <Main MarginTop>
        <BreadWrapper hidenLarge>
          <BreadCrumbs here="Adjustable" />
        </BreadWrapper>
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        {sortedBases.map((base) => (
          <StyledLink to={`/adjustable/${base.slug}`} key={base.id}>
            <H3>{base.title}</H3>
            <InfoWrapper>
              <ImageWrapper>
                <BannerWrapper>
                  {base.shopifyInfo[0].metafields[0].value.length > 3 && (
                    <Banner>{base.shopifyInfo[0].metafields[0].value}</Banner>
                  )}
                  <ImageContainer>
                    <Img
                      fluid={base.threeImageBlock[0].coverImage.fluid}
                      alt={base.threeImageBlock[0].coverImage.alt}
                    />
                  </ImageContainer>
                </BannerWrapper>
              </ImageWrapper>
              <Stuff>
                <AdjMarkdown>
                  <h3>Features</h3>
                  <ul>
                    {base.productFeatures.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </AdjMarkdown>
                <PriceRange>
                  {`$${Math.trunc(
                    base.shopifyInfo[0].priceRange.minVariantPrice.amount,
                  )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount,
          )}`}
                </PriceRange>
              </Stuff>
            </InfoWrapper>
            <PriceRangeer>
              {`$${Math.trunc(
                base.shopifyInfo[0].priceRange.minVariantPrice.amount,
              )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount,
          )}`}
            </PriceRangeer>
          </StyledLink>
        ))}
        <BreadWrapper hidenLarge Bottom>
          <BreadCrumbs here="Adjustable" />
        </BreadWrapper>
      </Main>
    </Layout>
  );
};

export default Adjustables;
Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const allAdjustables = graphql`
  query allAjustables {
    datoCmsSeo(name: { eq: "adjustable" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Adjustable Base" } } }
    ) {
      nodes {
        title
        id
        slug
        productFeatures {
          title
          description
          id
        }
        shopifyInfo {
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          metafields {
            id
            key
            value
          }
        }
        threeImageBlock {
          coverImage {
            alt
            fluid(
              maxWidth: 350
              imgixParams: { auto: "compress", lossless: true }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

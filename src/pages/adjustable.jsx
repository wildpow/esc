import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import Layout from "../components/Layout";
import {
  colors,
  fonts,
  fontSize,
  spacing,
  boxShadowHover,
  FadeInAnimation,
} from "../styles/theme.styled";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  ${FadeInAnimation}
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1022px) {
    padding-bottom: 25px;
    padding-top: 25px;
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;
  color: black;
  margin-bottom: 20px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  ${boxShadowHover}
`;

const H3 = styled.h3`
  font-family: ${fonts.sans};
  background-color: ${colors.blue["900"]};
  color: ${colors.gray["100"]};
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  @media (min-width: 560px) {
    font-size: 1.4rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 731px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    letter-spacing: 0.19rem;
    font-size: 1.75rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.8rem;
    text-align: left;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

const ImageContainer = styled.div`
  color: white;
  width: 240px;
  height: 240px;
  margin: 0 auto;
  @media (min-width: 991px) {
    width: 350px;
    height: 350px;
    align-self: center;
  }
`;

const AdjMarkdown = styled.div`
  font-family: ${fonts.serif};
  padding: 0px;
  padding-top: 10px;
  h3 {
    border-bottom: 4px solid ${colors.brandRed};
    font-size: 1.3rem;
    color: ${colors.blue["900"]};
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
    padding-left: 20px;
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
  @media (min-width: 640px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 731px) {
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

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
`;
const Banner = styled.div`
  font-family: ${fonts.sans};
  font-weight: 400;
  text-align: center;
  z-index: 10;
  background-color: ${colors.brandRed};
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
    background: ${colors.brandRed};
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

const priceRange = css`
  color: ${colors.gray[700]};
  font-family: ${fonts.sans};
  font-size: ${fontSize.xl};
  font-weight: 700;
  padding-bottom: ${spacing[5]};
  @media (min-width: 768px) {
    letter-spacing: 0.05rem;
  }
`;
const PriceRangeLg = styled.div`
  ${priceRange}
  padding-left: 20px;
  align-self: flex-start;
  @media (min-width: 768px) {
    align-self: flex-end;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    font-size: ${fontSize["3xl"]};
  }
`;
const PriceRangeSm = styled.div`
  ${priceRange}
  padding-right: 20px;
  align-self: flex-end;
  @media (min-width: 568px) {
    display: none;
  }
`;
const FeaturePriceWrapper = styled.div`
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
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
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
                  {base.saleBanner.length > 3 && (
                    <Banner>{base.saleBanner}</Banner>
                  )}
                  <ImageContainer>
                    <GatsbyImage
                      image={getImage(base.threeImageBlock[0].coverImage)}
                      alt={base.threeImageBlock[0].coverImage.alt}
                    />
                  </ImageContainer>
                </BannerWrapper>
              </ImageWrapper>
              <FeaturePriceWrapper>
                <AdjMarkdown>
                  <h3>Features</h3>
                  <ul>
                    {base.productFeatures.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </AdjMarkdown>
                <PriceRangeLg>
                  {`$${Math.trunc(
                    base.shopifyInfo[0].priceRange.minVariantPrice.amount
                  )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
                </PriceRangeLg>
              </FeaturePriceWrapper>
            </InfoWrapper>
            <PriceRangeSm>
              {`$${Math.trunc(
                base.shopifyInfo[0].priceRange.minVariantPrice.amount
              )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
            </PriceRangeSm>
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
      filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
    ) {
      nodes {
        title
        saleBanner
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
        }
        threeImageBlock {
          coverImage {
            alt
            gatsbyImageData(layout: CONSTRAINED, width: 350)
          }
        }
      }
    }
  }
`;

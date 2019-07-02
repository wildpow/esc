import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import ImageViewer from "../components/imageViewer_NEW";
// import DropDown from "../components/dropDown_NEW";
import PriceDropDown from "../components/priceDropDown_NEW";
import {
  Wrapper,
  Main,
  MainInfo,
  // PriceWrapper,
  // Price,
  // PriceTitle,
  Warranty,
  Description,
  Article,
  // StyledMarkDown,
  Profile,
  MainTitle,
  // InfoAnchor,
  // Stuff,
  // Construction,
} from "../styles/singleMattStyles";
// import SEO from "../components/seo";

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${props => props.theme.MainFont3};
  font-weight: 400;
  margin-left: 5px;
  color: ${props => props.theme.newColor2};
  padding: 0px;
  h3 {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    padding-bottom: 2px;
    padding-left: 20px;
  }
  ul {
    list-style: square;
    margin-top: 2px;
    font-size: 0.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  ul li {
    padding-bottom: 2px;
  }

  @media (min-width: 360px) {
    ul {
      margin-top: 10px;
    }
  }

  @media (min-width: 550px) {
    padding: 0px 0px 0px 10px;
    h3 {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${props => props.theme.mainColor2};
      padding-bottom: 2px;
      padding-left: 20px;
    }
    ul {
      list-style: square;
      margin-top: 10px;
      font-size: 1rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0px 30px 10px 30px;

    h3 {
      padding-left: 20px;
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1300px) {
    h3 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 2.1rem;
    }
  }

  @media print {
    h3 {
      font-size: 1.3rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

const Construction = styled(List)`
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
    }
    ul {
      font-size: 1.6rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;

const Info = styled.li`
  padding-top: 10px;
  list-style: none;
  a {
    display: none;
    font-size: 0.9rem;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.mainColor2};
    &:hover {
      color: ${props => props.theme.mainColor1};
    }
    @media (orientation: landscape) {
      display: block;
    }
    @media (min-width: 568px) {
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      display: block;
      font-size: 1.2rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
    @media print {
      display: none;
    }
  }
`;
const Base = ({ data }) => {
  const { datoCmsAdjustableBase: adjBase } = data;
  return (
    <Layout>
      <BreadWrapper>
        <BreadCrumbs next="Adjustable" here={adjBase.fullName} />
      </BreadWrapper>
      <Wrapper>
        <HelmetDatoCms seo={adjBase.seoMetaTags} />
        <header>
          <MainTitle>{adjBase.fullName}</MainTitle>
        </header>
        <Main>
          <ImageViewer
            saleBanner={adjBase.sale[0].saleBanner}
            cover={adjBase.images3[0]}
            img1={adjBase.images3[1]}
            img2={adjBase.images3[2]}
            base
          />
          <MainInfo>
            <List>
              <h3>Features</h3>
              <ul>
                {adjBase.smallFeatureList.map(item => (
                  <li key={item.feature}>{item.feature}</li>
                ))}
                <Info>
                  <AnchorLink href="#moreInfo">See more details</AnchorLink>
                </Info>
              </ul>
            </List>
            <PriceDropDown
              price={adjBase.price[0]}
              discount={adjBase.sale[0].discount}
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
              {adjBase.fullFeatureList.map(item => (
                <li key={item.feature}>{item.feature}</li>
              ))}
            </ul>
          </Construction>
          <Warranty>{adjBase.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs next="adjustable" here={adjBase.fullName} />
      </BreadWrapper>
    </Layout>
  );
};
Base.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Base;

export const query = graphql`
  query singleAdjustable($uri: String!) {
    datoCmsAdjustableBase(uri: { eq: $uri }) {
      fullName
      description
      images3 {
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
      }
      fullFeatureList {
        feature
      }
    }
  }
`;

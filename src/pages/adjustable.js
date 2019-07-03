import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Main,
  StyledLink,
  H3,
  InfoWrapper,
  Img,
  // AdjMarkdown,
} from "../styles/adjustableStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const AdjMarkdown = styled.div`
  font-family: ${props => props.theme.MainFont3};
  padding: 0px;
  margin-top: 7%;
  width: 50%;
  display: none;
  h3 {
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
    padding-left: 20px;
    margin-left: 20px;
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
  }
  @media (min-width: 568px) {
    display: block;
  }
  @media (min-width: 640px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 731px) {
    margin-top: 5%;
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
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  text-align: center;
  z-index: 10;
  background-color: ${props => props.theme.mainColor2};
  color: white;
  position: absolute;
  font-size: 0.8rem;
  /* padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 10px;
  padding-left: 5px; */
  padding-top: 5px;
  padding-bottom: 5px;
  /* padding-right: 15px;
  padding-left: 15px; */
  width: 60%;
  margin-left: 0px;
  letter-spacing: 0.105rem;
  /* margin-top: 10px; */
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
    background: ${props => props.theme.mainColor2};
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
    /* text-align: left;
    padding-left: 10%; */
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
const Adjustables = ({ data }) => (
  <Layout>
    <Main MarginTop>
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Adjustable" />
      </BreadWrapper>
      <SEO
        title="ESC: Ajustable Bases"
        description="E.S.C. Mattress Center carry many different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."
        ogTitle="E.S.C. Mattress Center | Adjustable Bases"
      />
      {data.allDatoCmsAdjustableBase.edges.map(base => (
        <StyledLink to={`/adjustable/${base.node.uri}`} key={base.node.id}>
          <H3>{base.node.fullName}</H3>
          <InfoWrapper>
            <ImageWrapper>
              <BannerWrapper>
                {base.node.sale[0].saleBanner.length > 3 && (
                  <Banner>{base.node.sale[0].saleBanner}</Banner>
                )}
                <Img
                  src={base.node.images3[0].url}
                  alt={base.node.images3[0].alt}
                />
              </BannerWrapper>
            </ImageWrapper>
            <AdjMarkdown>
              <h3>Features</h3>
              <ul>
                {base.node.smallFeatureList.map(item => (
                  <li key={item.feature}>{item.feature}</li>
                ))}
              </ul>
            </AdjMarkdown>
          </InfoWrapper>
        </StyledLink>
      ))}
      <BreadWrapper hidenLarge Bottom>
        <BreadCrumbs here="Adjustable" />
      </BreadWrapper>
    </Main>
  </Layout>
);

Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Adjustables;

export const allAdjustables = graphql`
  query allAjustables {
    allDatoCmsAdjustableBase(sort: { fields: position }) {
      edges {
        node {
          id
          fullName
          smallFeatureList {
            feature
          }
          uri
          sale {
            saleBanner
          }
          images3 {
            url
            alt
          }
        }
      }
    }
  }
`;

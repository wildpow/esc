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
  AdjMarkdown,
} from "../styles/adjustableStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
      {data.gcms.allAdjBaseses.map(base => (
        <StyledLink to={`/adjustable/${base.uri}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <ImageWrapper>
              <BannerWrapper>
                {base.saleBanner !== null ? (
                  <>
                    {base.saleBanner.length > 3 && (
                      <Banner>{base.saleBanner}</Banner>
                    )}
                  </>
                ) : null}
                <Img
                  src={`https://media.graphcms.com/resize=w:400,h:400,fit:clip/${
                    base.coverImg.handle
                  }`}
                  alt={`${base.fullName} Ajustable base`}
                />
              </BannerWrapper>
            </ImageWrapper>
            <AdjMarkdown source={base.features} escapeHtml={false} />
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
  query allAdjustables {
    gcms {
      allAdjBaseses(filter: { isPublished: true }, orderBy: value_ASC) {
        fullName
        features
        uri
        id
        saleBanner
        coverImg {
          handle
          height
          width
        }
      }
    }
  }
`;

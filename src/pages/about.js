import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import {
  fonts,
  fontSize,
  spacing,
  colors,
  breakpoints,
  boxShadow,
} from "../utils/styles";
import Article from "../components/About/article";
import Reviews from "../components/About/reviews";
import Hero from "../components/About/hero";
import ThreeImage from "../components/About/threeImg";
import Brands from "../components/About/brands";

const AboutRoot = styled.div`
  .flow > * + * {
    margin-top: var(--flow-space, 1em);
  }
  /* margin-bottom: 50px; */
  /* max-width: 1440px; */
  background-color: white;
  box-shadow: ${boxShadow.default};
`;

const PopWrapper = styled.div`
  /* padding-top: 80px; */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to top, ${colors.red[900]} 55%, white 0%);
  padding-bottom: 40px;
  .popImg {
    max-width: 400px;
    flex: 1;
    width: 100%;
  }
  .paragraph {
    /* background-color: ${colors.red[900]}; */
    width: 100%;
    display: flex;
    justify-content: center;
    p {
      line-height: ${spacing[8]};
      font-size: ${fontSize.lg};
      max-width: 1320px;
      color: white;
      font-family: ${fonts.sans};
      text-align: center;
      width: 100%;
    }
  }
  @media (min-width: ${breakpoints.xsm}) {
    background: linear-gradient(to top, ${colors.red[900]} 50%, white 0%);
  }
  @media (min-width: ${breakpoints.sm}) {
    background: linear-gradient(to top, ${colors.red[900]} 52%, white 0%);
  }
  @media (min-width: ${breakpoints.md}) {
    background: linear-gradient(to top, ${colors.red[900]} 46%, white 0%);
  }
  @media (min-width: ${breakpoints.lg}) {
    background: linear-gradient(to top, ${colors.red[900]} 40%, white 0%);

    .paragraph {
      p {
        font-size: ${fontSize["2xl"]};
      }
    }
  }
`;
const Flow = styled.div`
  margin-top: ${({ mt }) => mt}em;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: ${({ mt }) => mt + 5}em;
  }
`;
const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  const flow = "7em";
  return (
    <Layout>
      <AboutRoot>
        {console.log(data)}
        <Hero
          heroAlt={datoCmsAboutPage.hero.alt}
          heroText={datoCmsAboutPage.heroText}
          heroImg={datoCmsAboutPage.hero.fluid}
        />
        <ThreeImage
          threeImage={datoCmsAboutPage.threeImage}
          threeImageText={datoCmsAboutPage.threeImageText}
        />
        <Flow mt={7}>
          <Article
            text={datoCmsAboutPage.firstImageText}
            image={datoCmsAboutPage.firstImage.fluid}
            alt={datoCmsAboutPage.firstImage.alt}
          />
        </Flow>
        <Flow mt={7}>
          <Reviews
            maxIndex={datoCmsAboutPage.reviews.length - 1}
            content={datoCmsAboutPage.reviews}
          />
        </Flow>
        <Flow mt={7}>
          <Article
            rotate
            text={datoCmsAboutPage.secondText}
            image={datoCmsAboutPage.secondImage.fluid}
            alt={datoCmsAboutPage.secondImage.alt}
          />
        </Flow>
        <Flow mt={7}>
          <Brands
            brandImages={datoCmsAboutPage.brands}
            brandText={datoCmsAboutPage.brandText}
          />
        </Flow>
        <Flow mt={7}>
          <PopWrapper>
            <Img fluid={data.datoCmsAboutPage.pop.fluid} className="popImg" />
            <div className="paragraph">
              <p>
                We are located at 10121 Evergreen Way #30, Everett WA 98204.
                <br />
                We are on Everett Mall Way next to Outback Steakhouse and across
                the street from Enterprise car rentals.
              </p>
            </div>
          </PopWrapper>
        </Flow>
      </AboutRoot>
    </Layout>
  );
};
About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const about = graphql`
  query about {
    datoCmsAboutPage {
      heroText
      hero {
        alt
        fluid(maxWidth: 1440, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      threeImageText
      threeImage {
        alt
        filename
        fluid(
          maxWidth: 420
          maxHeight: 380
          imgixParams: { auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
        fixed(width: 413) {
          ...GatsbyDatoCmsFixed
        }
      }
      firstImageText
      firstImage {
        alt
        fluid(maxWidth: 420, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      brandText
      brands {
        alt
        fluid(maxWidth: 425, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      reviews {
        comment
        nameOfReviewer
      }
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      secondText
      secondImage {
        alt
        fluid(maxWidth: 420, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      pop {
        alt
        fluid(maxWidth: 420, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
export default About;

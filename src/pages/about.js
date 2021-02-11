import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
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
import TabBox from "../components/Landing/TabBox";

const AboutRoot = styled.div`
  background-color: white;
  box-shadow: ${boxShadow.default};
`;

const PopWrapper = styled.div`
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
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  @media (min-width: ${breakpoints.xsm}) {
    background: linear-gradient(to top, ${colors.red[900]} 50%, white 0%);
  }
  @media (min-width: ${breakpoints.sm}) {
    background: linear-gradient(to top, ${colors.red[900]} 52%, white 0%);
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (min-width: ${breakpoints.md}) {
    background: linear-gradient(to top, ${colors.red[900]} 46%, white 0%);
  }
  @media (min-width: ${breakpoints.lg}) {
    background: linear-gradient(to top, ${colors.red[900]} 45%, white 0%);

    .paragraph {
      p {
        font-size: ${fontSize["2xl"]};
      }
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    background: linear-gradient(to top, ${colors.red[900]} 42%, white 0%);
  }
`;
const Flow = styled.div`
  margin-top: ${({ mt }) => mt}em;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: ${({ mt }) => mt + 5}em;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-top: ${({ mt }) => mt + 8}em;
  }
`;

const CleanStoreFlow = styled(Flow)`
  max-width: 1320px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${breakpoints.md}) {
    width: 85%;
  }
`;
const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsAboutPage.seoLink.seoMetaTags} />
      <AboutRoot>
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
            text={datoCmsAboutPage.articleSection[0].text}
            image={datoCmsAboutPage.articleSection[0].image.fluid}
            alt={datoCmsAboutPage.articleSection[0].image.alt}
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
            text={datoCmsAboutPage.articleSection[1].text}
            image={datoCmsAboutPage.articleSection[1].image.fluid}
            alt={datoCmsAboutPage.articleSection[1].image.alt}
          />
        </Flow>
        <Flow mt={7}>
          <Brands
            brandImages={datoCmsAboutPage.brands}
            brandText={datoCmsAboutPage.brandText}
          />
        </Flow>
        {datoCmsAboutPage.optionalTabComponent && (
          <CleanStoreFlow mt={7}>
            <TabBox
              about
              tabs={datoCmsAboutPage.optionalTabComponent.box}
              hero={datoCmsAboutPage.optionalTabComponent.topImage}
              heroText={datoCmsAboutPage.optionalTabComponent.topText}
              topButtonName={
                datoCmsAboutPage.optionalTabComponent.topButtonName
              }
              topButtonUrl={datoCmsAboutPage.optionalTabComponent.topButtonUrl}
            />
          </CleanStoreFlow>
        )}
        <Flow mt={7}>
          <PopWrapper>
            <Img
              fluid={datoCmsAboutPage.pop.fluid}
              className="popImg"
              alt={datoCmsAboutPage.pop.alt}
            />
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
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      articleSection {
        text
        image {
          alt
          fluid(maxWidth: 420, imgixParams: { auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      optionalTabComponent {
        name
        topText
        topImage {
          fluid(
            maxWidth: 458 # maxHeight: 126
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          height
          url
          width
          title
        }
        box {
          title
          description
          picture {
            fluid(
              maxWidth: 528
              # maxHeight: 316
              imgixParams: { auto: "compress", lossless: true }
            ) {
              ...GatsbyDatoCmsFluid
            }
            alt
            title
            url
          }
        }
        topButtonUrl
        topButtonName
      }
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

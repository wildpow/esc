import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { fonts, fontSize, spacing, colors } from "../utils/styles";

const HeroWrapper = styled.div`
  position: relative;
  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    left: 0;
    background-image: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0.75) 65%,
      rgba(255, 255, 255, 0.8) 70%,
      rgba(255, 255, 255, 0.85) 75%,
      rgba(255, 255, 255, 0.9) 80%,
      rgba(255, 255, 255, 0.95) 85%,
      /* rgba(255, 255, 255, 0.8) 90%,
      rgba(255, 255, 255, 0.9) 95%, */
        rgba(255, 255, 255, 0.95) 90%,
      /* rgba(255, 255, 255, 0.9) 95%, */ rgba(255, 255, 255, 0.95) 100%
    );
  }
  img {
    width: 100%;
  }
  .content-wrapper {
    position: absolute;
    z-index: 100;
    color: black;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    blockquote {
      margin-top: 0;
      width: 40%;
      font-size: 2.4rem;
      font-family: ${fonts.serif};
      line-height: ${spacing[12]};
    }
  }
  .cite {
    padding-top: 20px;
    font-family: ${fonts.sans};
    span {
      display: block;
      line-height: ${spacing[5]};
      font-size: ${fontSize.base};
    }
  }
`;
const ThreeImageWrapper = styled.article`
  align-items: center;
  p {
    color: white;
    font-family: ${fonts.serif};
    padding-top: 40px;
    font-size: ${fontSize.lg};
    padding-bottom: 40px;
    max-width: 768px;
    line-height: ${spacing[8]};
  }
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, ${colors.blue[900]} 50%, white 0%);
  .threeImageContainer {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    .image {
      height: 376px;
      width: 413px;
      max-width: 400px;
      max-height: 370px;
    }
    .n {
      margin-top: 30px;
    }
  }
`;
const ArticleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 20%;
    width: 100%;
    height: 30%;
    background-color: ${colors.red[900]};
    z-index: 0;
  }
  article {
    display: flex;
    max-width: 1320px;
    justify-content: space-between;
  }
  /* height: 100%;
  width: 100%; */
  /* justify-content: center; */
  .image-wrapper {
    z-index: 1;
    /* flex: 1; */
    height: 400px;
    width: 48%;
  }
  .para-wrapper {
    width: 48%;
    height: 50%;
    font-family: ${fonts.serif};
    font-size: ${fontSize.lg};
    line-height: ${spacing[8]};
    z-index: 1;
    p {
      margin-top: 0;
    }
  }
`;
const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  return (
    <Layout>
      {console.log(data)}
      <HeroWrapper>
        <Img fluid={datoCmsAboutPage.hero.fluid} />
        <div className="content-wrapper">
          <blockquote>
            {datoCmsAboutPage.heroText}
            <div className="cite">
              <span>- William Wellauer Co-owner</span>
              <span>&nbsp;&nbsp;E.S.C. Mattress Center</span>
            </div>
          </blockquote>
        </div>
      </HeroWrapper>
      <ThreeImageWrapper>
        <p>{datoCmsAboutPage.threeImageText}</p>
        <div className="threeImageContainer" style={{ maxWidth: "1320px" }}>
          {datoCmsAboutPage.threeImage.map((img, index) => (
            <div className={`image ${index === 1 && "n"}`}>
              <Img fluid={img.fluid} alt={img.alt} />
            </div>
          ))}
        </div>
      </ThreeImageWrapper>
      <ArticleWrapper>
        <article>
          <div className="para-wrapper">
            <p>{datoCmsAboutPage.firstImageText}</p>
          </div>
          <div className="image-wrapper">
            <Img
              style={{ width: "100%", height: "100%" }}
              fluid={datoCmsAboutPage.firstImage.fluid}
              alt={datoCmsAboutPage.firstImage.alt}
            />
          </div>
        </article>
      </ArticleWrapper>
    </Layout>
  );
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
    }
  }
`;
export default About;

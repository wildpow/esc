import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { fonts, fontSize, spacing, colors, breakpoints } from "../utils/styles";
import Article from "../components/About/article";
import Reviews from "../components/About/reviews";

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

    background: rgba(255, 255, 255, 0.75);
  }
  .hero_img {
    height: 200px;
  }
  .content-wrapper {
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    max-width: 1320px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 100;
    color: black;
    /* top: 0;
    left: 0; */
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    blockquote {
      margin: 0;
      width: 100%;
      font-size: ${fontSize.base};
      font-family: ${fonts.serif};
      line-height: ${spacing[5]};
      padding-left: 5px;
    }
  }
  .cite {
    padding-top: 20px;
    font-family: ${fonts.sans};
    span {
      display: block;
      line-height: ${spacing[5]};
      font-size: ${fontSize.sm};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .hero_img {
      height: 100%;
    }
    ::before {
      background: none;
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
    .content-wrapper {
      blockquote {
        padding-left: 0px;
        font-size: 2.4rem;
        width: 48%;
        line-height: ${spacing[12]};
      }
    }
  }
`;
const ThreeImageWrapper = styled.article`
  align-items: center;

  p {
    color: white;
    font-family: ${fonts.serif};
    padding-top: 40px;
    font-size: ${fontSize.base};
    padding-bottom: 40px;
    max-width: 768px;
    line-height: ${spacing[6]};
    padding-left: 5px;
    padding-right: 5px;
    background-color: ${colors.blue[900]};
  }
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, ${colors.blue[900]} 50%, white 0%);
  .threeImageContainer {
    display: flex;
    height: 100%;
    width: 100%;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    .image {
      height: 100%;
      width: 413px;
      max-width: 400px;
      max-height: 370px;
    }
    .n {
      display: none;
      margin-top: 30px;
      /* width: 500px; */
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .threeImageContainer {
      .image {
        height: 376px;
        width: 413px;
        max-width: 400px;
        max-height: 370px;
      }
    }
    p {
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 40px;
      font-size: ${fontSize.lg};
      padding-bottom: 40px;
      max-width: 768px;
      line-height: ${spacing[8]};
    }
    .n {
      display: initial;
    }
  }
`;
const BrandsWrapper = styled.div`
  background-color: ${colors.blue[900]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 60px;
  margin-bottom: 60px; */
  align-items: center;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  .brand__container {
    overflow-x: scroll;
    overflow-y: hidden;
    /* -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    display: -webkit-box; */
    display: flex;
    gap: 15px;
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
    /* background-color: ${colors.gray["100"]}; */
    /* ::-webkit-scrollbar {
      width: 25px;
      height: 25px;
    } */
    /* ::-webkit-scrollbar-thumb {
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#ff8a00),
        to(#e52e71)
      );
      background: ${colors.blue["900"]};
      border-radius: 30px;
      box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
        inset -2px -2px 2px rgba(0, 0, 0, 0.25);
    } */
    /* ::-webkit-scrollbar-track {
      background: ${colors.gray["300"]};
    } */
  }
  .brand_img {
    /* flex: 1; */
    justify-self: center;
    width: 100%;
    width: 300px;
    /* width: 420000px; */
  }
  p {
    color: white;
    font-family: ${fonts.serif};
    padding-top: 40px;
    font-size: ${fontSize["2xl"]};
    padding-bottom: 40px;
    max-width: 768px;
    text-align: center;
    margin-top: 0;
    line-height: ${spacing[10]};
  }
  @media (min-width: ${breakpoints.lg}) {
    background-color: ${colors.blue[900]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    align-items: center;
    .brand__container {
      overflow-x: auto;
      overflow-y: auto;
      padding-top: 40px;
      padding-bottom: 40px;
      max-width: 1320px;
      display: grid;
      grid-template-columns: repeat(3, minMax(200px, 450px));
      grid-gap: 35px;
      justify-content: center;
    }
    .brand_img {
      /* flex: 1; */
      justify-self: center;
      width: 100%;
      max-width: 300px;
      /* width: 420000px; */
    }
    p {
      color: white;
      font-family: ${fonts.serif};
      padding-top: 40px;
      font-size: ${fontSize["2xl"]};
      padding-bottom: 40px;
      max-width: 768px;
      text-align: center;
      margin-top: 0;
      line-height: ${spacing[10]};
    }
  }
`;

const AboutRoot = styled.div`
  padding-bottom: 50px;
  background-color: white;
`;
const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  return (
    <Layout>
      <AboutRoot>
        {console.log(data)}
        <HeroWrapper>
          <Img
            fluid={datoCmsAboutPage.hero.fluid}
            // style={{ height: "200px" }}
            className="hero_img"
          />
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
              <div className={`image ${index === 1 && "n"}`} key={img.filename}>
                <Img fluid={img.fluid} alt={img.alt} />
              </div>
            ))}
          </div>
        </ThreeImageWrapper>
        <Article
          text={datoCmsAboutPage.firstImageText}
          image={datoCmsAboutPage.firstImage.fluid}
          alt={datoCmsAboutPage.firstImage.alt}
        />
        <Reviews
          maxIndex={datoCmsAboutPage.reviews.length - 1}
          content={datoCmsAboutPage.reviews}
        />

        <Article
          rotate
          text={datoCmsAboutPage.secondText}
          image={datoCmsAboutPage.secondImage.fluid}
          alt={datoCmsAboutPage.secondImage.alt}
        />

        {/* <BrandsWrapper>
          <div className="brand__container">
            {datoCmsAboutPage.brands.map((img) => (
              <div className="brand_img">
                <Img fluid={img.fluid} />
              </div>
            ))}
          </div>
          <p>{datoCmsAboutPage.brandText}</p>
        </BrandsWrapper> */}
      </AboutRoot>
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
    }
  }
`;
export default About;

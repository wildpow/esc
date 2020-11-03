import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import {
  fonts,
  fontSize,
  spacing,
  colors,
  breakpoints,
  radius,
  boxShadow,
} from "../../utils/styles";

const ArticleWrapper = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  background-color: white;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 20%;
    width: 100%;
    height: 150px;
    background-color: ${colors.red[900]};
    z-index: 0;
  }
  article {
    flex-direction: column-reverse;
    padding: 10px;
    display: flex;
    max-width: 1320px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.gray[400]};
    border-radius: ${radius.large}px;
    width: 90%;
    background-color: white;
    box-shadow: ${boxShadow.md};
    z-index: 1;
  }
  /* height: 100%;
  width: 100%; */
  /* justify-content: center; */
  .image-wrapper {
    background-color: white;
    z-index: 1;
    /* flex: 1; */
    height: 200px;
    width: 100%;
  }
  .para-wrapper {
    width: 100%;
    /* height: 50%; */
    font-family: ${fonts.serif};
    font-size: ${fontSize.sm};
    line-height: ${spacing[6]};
    z-index: 1;
    padding: 0px;
    background-color: white;
    p {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 20px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .para-wrapper {
      font-size: ${fontSize.base};
      font-weight: 300;
      p {
        font-size: ${fontSize.lg};
        line-height: ${spacing[8]};
      }
    }
    article {
      width: 85%;
      padding: 20px;
    }
    .image-wrapper {
      height: 300px;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    article {
      padding: 30px;
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    ::after {
      top: auto;
      bottom: 20%;
      width: 100%;
      height: 30%;
    }
    article {
      justify-content: space-between;
      flex-direction: ${({ rotate }) => (rotate ? "row-reverse" : "row")};
      /* border: none;
      border-radius: none;
      box-shadow: none; */
      /* background-color: transparent;
      border: 1px solid ${colors.gray[300]};
      border-radius: ${radius.large}px; */
    }
    .image-wrapper {
      height: 400px;
      width: 48%;
    }
    .para-wrapper {
      align-self: flex-start;
      /* font-size: ${fontSize.lg}; */
      font-size: ${fontSize["2xl"]};
      /* line-height: ${spacing[6]}; */
      line-height: ${spacing[8]};
      width: 48%;
      /* height: 50%; */
      padding: 0;
      background-color: transparent;
      p {
        font-weight: 300;
        padding-top: 0;
        margin: auto;
      }
    }
  }
`;
const Article = ({ text, image, rotate, alt }) => (
  <ArticleWrapper rotate={rotate}>
    <article>
      <div className="para-wrapper">
        <p>{text}</p>
      </div>
      <div className="image-wrapper">
        <Img
          style={{ width: "100%", height: "100%" }}
          fluid={image}
          alt={alt}
        />
      </div>
    </article>
  </ArticleWrapper>
);
Article.defaultProps = {
  text: "YOU DID NOT SEND ANY TEXT DOWN SO THIS IS THE DEFAULT",
  alt: "E.S.C. Mattress Center 'sleep like the experts do'",
  rotate: false,
};
Article.propTypes = {
  text: PropTypes.string,
  image: PropTypes.instanceOf(Object).isRequired,
  rotate: PropTypes.bool,
  alt: PropTypes.string,
};

export default Article;

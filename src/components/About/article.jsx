import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { fonts, fontSize, spacing, colors } from "../../utils/styles";

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
    flex-direction: ${({ rotate }) => (rotate ? "row-reverse" : "row")};
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
    line-height: ${spacing[6]};
    z-index: 1;
    p {
      margin-top: 0;
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

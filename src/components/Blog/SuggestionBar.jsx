import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { fonts } from "../../utils/styles";

const StyledLink = styled(Link)`
  padding-right: 2px;
  padding-left: 2px;
  padding-bottom: 5px;
  background: white;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 100px 1fr;
  text-decoration: none;
  grid-template-areas:
    "ThumbImg Title"
    "Description Description";
  display: grid;
  position: relative;
  @media (min-width: 568px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  @media (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 15px;
  }
  h4 {
    grid-area: Title;
    align-self: center;
    justify-self: start;
    justify-items: start;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    font-family: ${(props) => props.theme.MainFont1};
    color: black;
    z-index: 10;
    @media (min-width: 375px) {
      font-size: 1.2rem;
    }
    @media (min-width: 568px) {
      font-size: 1.25rem;
      line-height: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
  span {
    top: 73px;
    position: absolute;
    background: ${(props) => props.theme.mainColor1};
    height: 20px;
    width: 100%;
    /* border-radius: 4px; */
    opacity: 0.3;
    grid-column: span 2;
  }
`;

const ThumbImg = styled.img`
  grid-area: ThumbImg;
  width: 70px;
  align-self: center;
  justify-self: center;
  z-index: 10;
`;

const SuggestionRoot = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  margin-top: 20px;
  /* border-top: 2px solid black; */
  /* width: 100%; */
  flex-direction: column;
  margin: 0 auto;
  align-content: center;
  @media (min-width: 568px) {
    flex-direction: row;
  }
`;

const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  /* margin: 1rem 3rem 0 3rem; */
  max-width: 300px;
  margin: 0 auto;
  /* width: 49%; */
  font-family: ${fonts.sans};
  a {
    text-decoration: none;
  }
  a h4 {
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    max-width: 370px;
  }
`;

const SuggestionBar = ({ prev, next }) => {
  return (
    <SuggestionRoot>
      <PostSuggestion>
        {prev && (
          <StyledLink to={`/blog/${prev.slug}`}>
            <ThumbImg
              src={prev.blogListImage.url}
              alt={
                prev.blogListImage.alt === null
                  ? `The blog post called ${prev.title}`
                  : prev.blogListImage.alt
              }
            />
            <h4>{prev.title}</h4>
            <span />
          </StyledLink>
        )}
      </PostSuggestion>
      <PostSuggestion>
        {next && (
          <StyledLink to={`/blog/${next.slug}`}>
            <ThumbImg
              src={next.blogListImage.url}
              alt={
                next.blogListImage.alt === null
                  ? `The blog post called ${next.title}`
                  : next.blogListImage.alt
              }
            />
            <h4>{next.title}</h4>
            <span />
          </StyledLink>
        )}
      </PostSuggestion>
    </SuggestionRoot>
  );
};

SuggestionBar.propTypes = {
  next: PropTypes.instanceOf(Object).isRequired,
  prev: PropTypes.instanceOf(Object).isRequired,
};

export default SuggestionBar;

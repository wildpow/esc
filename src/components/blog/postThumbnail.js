import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { FadeIn } from "../../styles/mainStyles";

const StyledLink = styled(Link)`
  padding-right: 2px;
  padding-left: 2px;
  padding-bottom: 5px;
  background: white;
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  grid-template-columns: 80px 1fr;
  grid-template-rows: 100px 1fr;
  text-decoration: none;
  grid-template-areas:
    "img title"
    "descrip descrip";
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
    padding-bottom: 5px;
  }
  h3 {
    align-self: center;
    justify-self: start;
    justify-items: start;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    grid-area: title;
    font-family: ${props => props.theme.MainFont1};
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
    background: ${props => props.theme.mainColor1};
    height: 20px;
    width: 100%;
    /* border-radius: 4px; */
    opacity: 0.3;
    grid-column: span 2;
  }
`;
const Img = styled.img`
  grid-area: img;
  width: 70px;
  align-self: center;
  justify-self: center;
  z-index: 10;
  transition: transform 0.25s ease-in;
  transform: ${props =>
    props.isHovering ? "scale3d(1.1, 1.1, 1)" : "scale3d(1, 1, 1)"};
`;
const Description = styled.p`
  font-family: ${props => props.theme.MainFont3};
  grid-area: descrip;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4rem;
  color: black;
  text-decoration: ${props => (props.isHovering ? "underline" : "none")};
  text-decoration-color: ${props =>
    props.isHovering ? props.theme.mainColor2 : "none"};
  text-underline-position: under;
  font-weight: 300;
  @media (min-width: 568px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  @media (min-width: 1028px) {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
  }
`;

const PostThumbnail = ({ post, isHovering, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledLink
      to={`/blog/${post.slug}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Img
        src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
          post.coverImage.handle
        }`}
        alt={`The blog post called ${post.title}`}
        isHovering={isHovering}
      />
      <h3>{post.title}</h3>
      <span />
      <Description isHovering={isHovering}>{post.description}</Description>
    </StyledLink>
  );
};

PostThumbnail.defaultProps = {
  isHovering: false,
};
PostThumbnail.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovering: PropTypes.bool,
  post: PropTypes.instanceOf(Object).isRequired,
};
export default PostThumbnail;

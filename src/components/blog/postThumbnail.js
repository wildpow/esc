import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FadeIn } from "../../styles/mainStyles";
// import TruncateMarkup from "react-truncate-markup";

const StyledLink = styled(Link)`
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
  /* border: 2px solid black; */
  img {
    grid-area: img;
    width: 70px;
    align-self: center;
    justify-self: center;
    z-index: 10;
  }
  h3 {
    align-self: center;
    justify-self: start;
    justify-items: start;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    grid-area: title;
    font-family: ${props => props.theme.MainFont1};
    color: black;
    z-index: 10;

    /* text-decoration: underline; */
  }
  span {
    top: 73px;
    position: absolute;
    background: ${props => props.theme.mainColor1};
    height: 20px;
    width: 100%;
    border-radius: 4px;
    opacity: 0.3;
    grid-column: span 2;
  }
`;

const Description = styled.p`
  font-family: ${props => props.theme.MainFont3};
  /* border-top: 2px solid blue; */
  grid-area: descrip;
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: black;
`;
const PostThumbnail = ({ numberOfPosts, allPosts }) => {
  const posts = allPosts.slice(0, numberOfPosts);
  return (
    <>
      {posts.map(post => (
        <StyledLink to={`/blog/${post.slug}`} key={postMessage.id}>
          <img
            src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
              post.coverImage.handle
            }`}
            alt={`The blog post called ${post.title}`}
          />
          <h3>{post.title}</h3>
          <span />
          {/* <TruncateMarkup lines={4}> */}
          <Description>{post.description}</Description>
          {/* </TruncateMarkup> */}
        </StyledLink>
      ))}
    </>
  );
};

export default PostThumbnail;

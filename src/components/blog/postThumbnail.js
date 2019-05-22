import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import TruncateMarkup from "react-truncate-markup";

const StyledLink = styled(Link)`
  text-decoration: none;
  /* padding: 10px; */
  font-family: ${props => props.theme.MainFont1};
  color: black;
  background-color: white;
  transition: ${props => props.theme.hoverTransition};
  box-shadow: ${props => props.theme.hoverBoxBefore};
  &:hover {
    transform: ${props => props.theme.hoverTransform};
    box-shadow: ${props => props.theme.hoverBoxAfter};
  }
`;
const DIV = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas:
    "title title"
    "image description";
  img {
    align-self: center;
    grid-area: image;
    width: 105px;
    justify-self: center;
  }
  h3 {
    text-shadow: ${props => props.theme.newTextShadow};
    font-weight: 900;
    display: grid;
    align-content: center;
    grid-area: title;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.mainColor1};
    font-size: 1.5rem;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
  }
`;
const Description = styled.p`
  font-family: ${props => props.theme.MainFont3};
  grid-area: description;
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-left: 7px;
  padding-right: 15px;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 300;
  margin-left: 5px;
  line-height: 1.6rem;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-self: center;
  align-self: center;
`;
const PostThumbnail = ({ numberOfPosts, allPosts }) => {
  const posts = allPosts.slice(0, numberOfPosts);
  return (
    <>
      {posts.map(post => (
        <StyledLink to={`/blog/${post.slug}`} key={postMessage.id}>
          <DIV>
            <img
              src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
                post.coverImage.handle
              }`}
              alt={`The blog post called ${post.title}`}
            />
            <h3>{post.title}</h3>
            <TruncateMarkup lines={6}>
              <Description>{post.description}</Description>
            </TruncateMarkup>
          </DIV>
        </StyledLink>
      ))}
    </>
  );
};

export default PostThumbnail;

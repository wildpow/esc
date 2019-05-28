import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostThumbnail from "../components/blog/postThumbnail";
import { FadeIn } from "../styles/mainStyles";

const PostsContainer = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-area: posts;
`;

const BlogContainer = styled.div`
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-areas:
    "header"
    "posts"
    "footer";
`;
const Button = styled.button`
  font-family: ${props => props.theme.MainFont1};
  grid-area: footer;
  background: ${props => props.theme.mainColor1};
  width: 100%;
  box-shadow: ${props => props.theme.hoverBoxBefore};
  font-size: 16px;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  padding: 16px 24px;
  border: ${props => props.theme.Border};
  /* border-radius: 7px; */
  cursor: pointer;
  margin-bottom: 10px;
  letter-spacing: 0.2rem;
  transition: ${props => props.theme.hoverTransition};
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: ${props => props.theme.hoverBoxAfter};
    transform: ${props => props.theme.hoverTransform};
  }
`;
const Header = styled.header`
  grid-area: header;
  background: ${props => props.theme.mainColor1};
  color: white;
  font-family: ${props => props.theme.MainFont1};
  padding: 15px;
  font-size: 1.5rem;
  line-height: 2rem;
  text-shadow: ${props => props.theme.newTextShadow};
  text-align: center;
  box-shadow: ${props => props.theme.newBoxShadow};
`;
const Blog = ({ data }) => {
  const { allPosts } = data.gcms;
  const [numberOfPosts, setNumberOfPosts] = useState(6);
  return (
    <Layout>
      <BlogContainer>
        <Header>
          Come read about ways to achieve better sleep, and live healthier from
          people who have been helping people sleep better for 20+ years. Check
          here to see our schedule of professional speakers speaking on sleep
          topics.
        </Header>
        <PostsContainer>
          <PostThumbnail allPosts={allPosts} numberOfPosts={numberOfPosts} />
        </PostsContainer>
        {numberOfPosts < allPosts.length && (
          <Button
            onClick={() => setNumberOfPosts(numberOfPosts + 4)}
            type="button"
          >
            Show More Posts
          </Button>
        )}
      </BlogContainer>
    </Layout>
  );
};

export default Blog;

export const blogList = graphql`
  query blogList {
    gcms {
      allPosts(orderBy: dateAndTime_DESC, filter: { isPublished: true }) {
        slug
        title
        content
        dateAndTime
        description
        coverImage {
          handle
        }
        id
      }
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostThumbnail from "../components/blog/postThumbnail";

const PostsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-area: posts;
`;

const BlogContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "posts"
    "footer";
`;
const Button = styled.button`
  grid-area: "footer";
`;
const Header = styled.header`
  grid-area: header;
`;
const Blog = ({ data }) => {
  const { allPosts } = data.gcms;
  const [numberOfPosts, setNumberOfPosts] = useState(4);
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
        dateAndTime
        coverImage {
          handle
        }
        id
      }
    }
  }
`;

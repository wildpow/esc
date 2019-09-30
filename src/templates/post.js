import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import { Marker, BottomImg, Main } from "../styles/postStyles";
import { H2 } from "../styles/mainStyles";

const PostBread = styled(BreadWrapper)`
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 568px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1022px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1300px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;
const Post = ({ data }) => {
  const post = data.datoCmsBlog;
  return (
    <Layout>
      <HelmetDatoCms seo={post.seoMetaTags} />
      <PostBread>
        <BreadCrumbs next="Blog" here={post.title} />
      </PostBread>
      <Main>
        <header>
          <H2>{post.title}</H2>
        </header>
        <article>
          <Marker source={post.postContent} escapeHtml={false} />
        </article>
        {post.bottomImage ? (
          <BottomImg
            src={post.bottomImage.url}
            alt={`Image related to ${post.title}`}
          />
        ) : null}
      </Main>
      <PostBread>
        <BreadCrumbs next="Blog" here={post.title} />
      </PostBread>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Post;

export const postQuery = graphql`
  query singlePost($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      description
      id
      slug
      title
      postDate
      blogListImage {
        alt
        url
      }
      postContent
      bottomImage {
        alt
        url
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

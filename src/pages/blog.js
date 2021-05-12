import React, { useState } from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { styled, theme, css } from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostThumbnail from "../components/Blog";
import FadeIn from "../keyframes/fadeIn.styled";

const PostsContainer = css`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-area: posts;
  @media (min-width: 768px) {
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const BlogContainer = css`
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
  display: grid;
  grid-gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;
  grid-template-areas:
    "header"
    "posts"
    "footer";
  @media (min-width: 768px) {
    grid-gap: 20px;
  }
`;
const Button = css`
  font-family: ${theme`fontFamily.sans`};
  grid-area: footer;
  background: ${theme`colors.brandRed`};
  width: 100%;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;
  font-size: 16px;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  padding: 16px 24px;
  border: 1px solid #eee;
  cursor: pointer;
  margin-bottom: 10px;
  letter-spacing: 0.2rem;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
      0px 8px 16px rgba(71, 63, 79, 0.16);
    transform: translateY(-4px);
  }
`;
const Header = css`
  grid-area: header;
  background: ${theme`colors.brandBlue`};
  color: white;
  font-family: ${theme`fontFamily.sans`};
  padding: 5px;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
  @media (min-width: 568px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media (min-width: 768px) {
    box-shadow: ${theme`boxShadow.md`};
    padding: 15px;
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`;
const Blog = ({ data }) => {
  const [hover, setHover] = useState({});
  const [numPosts, setNumPosts] = useState(6);
  const posts = data.allDatoCmsNewBlog.nodes.slice(0, numPosts);
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <div className={BlogContainer}>
        <header className={Header}>
          Thank you for checking out our sleep blog. Below are some mattress and
          sleep-related posts to help you research your better night’s sleep;
          all brought to you from our team of local sleep experts with over
          twenty years of mattress industry experience.
        </header>
        <div className={PostsContainer}>
          {posts.map((post, index) => (
            <PostThumbnail
              onMouseEnter={() => setHover({ ...hover, [index]: true })}
              onMouseLeave={() => setHover({ ...hover, [index]: false })}
              isHovering={hover[index]}
              key={post.id}
              post={post}
            />
          ))}
        </div>
        {numPosts < data.allDatoCmsNewBlog.nodes.length && (
          <button
            className={Button}
            onClick={() => setNumPosts(numPosts + 4)}
            type="button"
          >
            Show More Posts
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const blogList = graphql`
  query blogList {
    datoCmsSeo(name: { eq: "blog" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsNewBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        content

        excerptImage {
          alt
          url
        }
      }
    }
  }
`;

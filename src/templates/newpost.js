import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";

import tw, { styled } from "twin.macro";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { fonts } from "../utils/styles";

const PostRoot = styled.div`
  padding-bottom: 20px;
  background-color: white;
  margin: 0 auto;
  article h1,
  article h2,
  article h3,
  article h4 {
    font-family: ${fonts.sans};
  }
  article p {
    margin: 0 auto;
    font-family: ${fonts.serif};
  }
  article {
    margin: 0 auto;
  }
  article ul li {
    list-style: none;
  }
  article ol li {
    list-style: none;
  }
  article ul .task-list-item {
    ::before {
      display: none;
    }
  }
  article a {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .mainWrapper {
    display: flex;
  }
  .sidebar {
    width: 250px;
    border: 2px solid blue;
    ul li {
      list-style: none;
    }
  }
`;

const Article = tw.article`
prose sm:prose-lg md:prose-xl lg:prose-2xl
`;
const NewPost = ({ data }) => {
  const { allDatoCmsNewBlog, datoCmsNewBlog } = data;
  return (
    <Layout>
      <PostRoot>
        <Img
          alt={datoCmsNewBlog.coverImage.alt}
          fluid={datoCmsNewBlog.coverImage.fluid}
        />
        <div className="mainWrapper">
          <div className="sidebar">
            <h3>Other articles</h3>
            <ul>
              {allDatoCmsNewBlog.nodes.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`}>
                    <h4>{post.title}</h4>
                  </Link>
                  <p>{post.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
          <Article
            dangerouslySetInnerHTML={{
              __html: datoCmsNewBlog.contentNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </PostRoot>
    </Layout>
  );
};

export default NewPost;

export const newPostQuery = graphql`
  query newSinglePost($slug: String!) {
    allDatoCmsNewBlog(filter: { slug: { ne: $slug } }) {
      nodes {
        title
        slug
        id
        excerpt
        excerptImage {
          alt
          url
        }
      }
    }
    datoCmsNewBlog(slug: { eq: $slug }) {
      id
      slug
      title
      date
      coverImage {
        alt
        fluid(
          maxWidth: 1440
          imgixParams: { auto: "compress", lossless: true }
        ) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

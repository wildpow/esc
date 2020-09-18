import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import tw, { styled } from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { fonts, colors } from "../utils/styles";
import SuggestionBar from "../components/Blog/SuggestionBar";

const PostRoot = styled.div`
  padding-bottom: 20px;
  background-color: white;
  margin: 0 auto;
  article h1,
  article h2,
  article h3,
  article h4,
  article h5 {
    font-family: ${fonts.sans};
    padding-left: 5px;
  }
  article p {
    margin: 0 auto;
    font-family: ${fonts.serif};
    padding-left: 5px;
    padding-right: 5px;
  }
  article a {
    color: ${colors.blue[700]};
    position: relative;
    padding-left: 5px;
    margin-right: 3px;
    /* display: inline-block;
    vertical-align: middle; */
    padding-bottom: 0px;
    overflow: hidden;
    /* line-height: 1.3rem; */
    text-decoration: none;
    background-color: transparent;
    ::before {
      content: "";
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 4px;
      background: ${colors.red[400]};
      opacity: 0.6;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  article a:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  article {
    margin: 0 auto;
  }
  article ul li {
    list-style: none;
    font-family: ${fonts.sans};
  }
  article ol li {
    list-style: none;
    font-family: ${fonts.sans};
  }
  article ul .task-list-item {
    ::before {
      display: none;
    }
  }

  article a {
    /* margin-bottom: 10px; */
    /* margin-top: 10px; */
    margin-right: -5px;
    margin-left: -5px;
  }
  img {
    /* padding-bottom: 20px; */
  }
`;

const Article = tw.article`
  prose sm:prose-lg md:prose-xl lg:prose-2xl lg:pb-10 lg:pt-10
`;

const NewPost = ({ data, pageContext }) => {
  const { datoCmsNewBlog } = data;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsNewBlog.seoMetaTags} />
      <BreadWrapper>
        <BreadCrumbs next="Blog" here={datoCmsNewBlog.title} />
      </BreadWrapper>
      <PostRoot>
        <Img
          alt={datoCmsNewBlog.coverImage.alt}
          fluid={datoCmsNewBlog.coverImage.fluid}
        />

        <Article
          dangerouslySetInnerHTML={{
            __html: datoCmsNewBlog.contentNode.childMarkdownRemark.html,
          }}
        />
        <SuggestionBar prev={prev} next={next} />
      </PostRoot>
    </Layout>
  );
};

NewPost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

export default NewPost;

export const newPostQuery = graphql`
  query newSinglePost($slug: String!) {
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

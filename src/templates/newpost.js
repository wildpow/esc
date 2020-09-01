import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import tw, { styled } from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { fonts } from "../utils/styles";
import SuggestionBar from "../components/Blog/SuggestionBar";

const PostRoot = styled.div`
  padding-bottom: 20px;
  background-color: white;
  margin: 0 auto;
  article h1,
  article h2,
  article h3,
  article h4 {
    font-family: ${fonts.sans};
    padding-left: 5px;
  }
  article p {
    margin: 0 auto;
    font-family: ${fonts.serif};
    padding-left: 5px;
    padding-right: 5px;
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
    /* margin-bottom: 10px; */
    /* margin-top: 10px; */
    margin-right: -5px;
    margin-left: -5px;
  }
  img {
    padding-bottom: 20px;
  }
`;

const Article = tw.article`
  prose sm:prose-lg md:prose-xl lg:prose-2xl lg:pb-10
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

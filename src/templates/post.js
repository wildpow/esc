import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
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
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: -5px;
    margin-left: -5px;
  }
`;

const Article = tw.article`
prose sm:prose-lg md:prose-xl lg:prose-2xl lg:pb-10
`;

const Post = ({ data, pageContext }) => {
  const { datoCmsBlog } = data;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBlog.seoMetaTags} />
      <BreadWrapper>
        <BreadCrumbs next="Blog" here={datoCmsBlog.title} />
      </BreadWrapper>
      <PostRoot>
        <Article
          dangerouslySetInnerHTML={{
            __html: datoCmsBlog.postContentNode.childMarkdownRemark.html,
          }}
        />
        <SuggestionBar prev={prev} next={next} />
      </PostRoot>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};
export default Post;

export const postQuery = graphql`
  query singlePost($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      postContentNode {
        childMarkdownRemark {
          html
        }
      }
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

import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { fonts } from "../utils/styles";

const StyledLink = styled(Link)`
  padding-right: 2px;
  padding-left: 2px;
  padding-bottom: 5px;
  background: white;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 100px 1fr;
  text-decoration: none;
  grid-template-areas:
    "ThumbImg Title"
    "Description Description";
  display: grid;
  position: relative;
  @media (min-width: 568px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  @media (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 15px;
  }
  h4 {
    grid-area: Title;
    align-self: center;
    justify-self: start;
    justify-items: start;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    font-family: ${(props) => props.theme.MainFont1};
    color: black;
    z-index: 10;
    @media (min-width: 375px) {
      font-size: 1.2rem;
    }
    @media (min-width: 568px) {
      font-size: 1.25rem;
      line-height: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
  span {
    top: 73px;
    position: absolute;
    background: ${(props) => props.theme.mainColor1};
    height: 20px;
    width: 100%;
    /* border-radius: 4px; */
    opacity: 0.3;
    grid-column: span 2;
  }
`;
const ThumbImg = styled.img`
  grid-area: ThumbImg;
  width: 70px;
  align-self: center;
  justify-self: center;
  z-index: 10;
`;
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
const SuggestionBar = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  margin-top: 20px;
  /* border-top: 2px solid black; */
  /* width: 100%; */
  flex-direction: column;
  margin: 0 auto;
  align-content: center;
  @media (min-width: 568px) {
    flex-direction: row;
  }
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  /* margin: 1rem 3rem 0 3rem; */
  max-width: 300px;
  margin: 0 auto;
  /* width: 49%; */
  font-family: ${fonts.sans};
  a {
    text-decoration: none;
  }
  a h4 {
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    max-width: 370px;
  }
`;
const Post = ({ data, pageContext }) => {
  const { datoCmsBlog } = data;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsBlog.seoMetaTags} />
      {console.log(pageContext)}
      <BreadWrapper>
        <BreadCrumbs next="Blog" here={datoCmsBlog.title} />
      </BreadWrapper>
      <PostRoot>
        <Article
          dangerouslySetInnerHTML={{
            __html: datoCmsBlog.postContentNode.childMarkdownRemark.html,
          }}
        />
        <SuggestionBar>
          <PostSuggestion>
            {prev && (
              <StyledLink to={`/blog/${prev.slug}`}>
                <ThumbImg
                  src={prev.blogListImage.url}
                  alt={
                    prev.blogListImage.alt === null
                      ? `The blog post called ${prev.title}`
                      : prev.blogListImage.alt
                  }
                />

                <h4>{prev.title}</h4>
                <span />
              </StyledLink>
            )}
          </PostSuggestion>
          <PostSuggestion>
            {next && (
              <StyledLink to={`/blog/${next.slug}`}>
                <ThumbImg
                  src={next.blogListImage.url}
                  alt={
                    next.blogListImage.alt === null
                      ? `The blog post called ${next.title}`
                      : next.blogListImage.alt
                  }
                />
                <h4>{next.title}</h4>
                <span />
              </StyledLink>
            )}
          </PostSuggestion>
        </SuggestionBar>
      </PostRoot>
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

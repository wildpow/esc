import { useState } from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostThumbnail from "../components/Blog/PostThumbnail";
import {
  boxShadowHover,
  colors,
  FadeInAnimation,
  fonts,
} from "../styles/theme.styled";

const PostsContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-area: posts;
  @media (min-width: 768px) {
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const BlogContainer = styled.div`
  ${FadeInAnimation}
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
const Button = styled.button`
  font-family: ${fonts.sans};
  grid-area: footer;
  background: ${colors.red["900"]};
  width: 100%;
  font-size: 16px;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  padding: 16px 24px;
  border: 1px solid #eee;
  /* border-radius: 7px; */
  cursor: pointer;
  margin-bottom: 10px;
  letter-spacing: 0.2rem;
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
  ${boxShadowHover}
`;
const Header = styled.header`
  grid-area: header;
  background: ${colors.brandBlue};
  color: white;
  font-family: ${fonts.sans};
  padding: 5px;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
  @media (min-width: 568px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media (min-width: 768px) {
    box-shadow: 0px 6px 6px -6px rgba(52, 52, 52, 0.41);
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
      <BlogContainer>
        <Header>
          Thank you for checking out our sleep blog. Below are some mattress and
          sleep-related posts to help you research your better night’s sleep;
          all brought to you from our team of local sleep experts with over
          twenty years of mattress industry experience.
        </Header>
        <PostsContainer>
          {posts.map((post, index) => (
            <PostThumbnail
              onMouseEnter={() => setHover({ ...hover, [index]: true })}
              onMouseLeave={() => setHover({ ...hover, [index]: false })}
              isHovering={hover[index]}
              key={post.id}
              post={post}
            />
          ))}
        </PostsContainer>
        {numPosts < data.allDatoCmsNewBlog.nodes.length && (
          <Button onClick={() => setNumPosts(numPosts + 4)} type="button">
            Show More Posts
          </Button>
        )}
      </BlogContainer>
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

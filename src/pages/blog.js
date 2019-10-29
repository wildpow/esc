import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostThumbnail from "../components/blog/postThumbnail_NEW";
import { FadeIn } from "../styles/mainStyles";
// import SEO from "../components/seo";

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
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  display: grid;
  grid-gap: 10px;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  grid-template-areas:
    "header"
    "posts"
    "footer";
  @media (min-width: 768px) {
    grid-gap: 20px;
    margin-top: 20px;
  }
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
  padding: 5px;
  font-size: 1rem;
  line-height: 1.4rem;
  /* text-shadow: ${props => props.theme.newTextShadow}; */
  text-align: center;
  @media (min-width: 568px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-shadow: ${props => props.theme.newTextShadow};
  }
  @media (min-width: 768px) {
    box-shadow: ${props => props.theme.newBoxShadow};
    padding: 15px;
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`;
class Blog extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      numberOfPosts: 6,
      isHovered: {},
    };
  }

  setNumberOfPosts = () => {
    const { numberOfPosts } = this.state;
    this.setState({ numberOfPosts: numberOfPosts + 4 });
  };

  handleMouseEnter = index => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  handleMouseLeave = index => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  render() {
    const { data } = this.props;
    const { isHovered, numberOfPosts } = this.state;
    const posts = data.allDatoCmsBlog.nodes.slice(0, numberOfPosts);
    return (
      <Layout>
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        <BlogContainer>
          <Header>
            Thank you for checking out our sleep blog. Below are some mattress
            and sleep-related posts to help you research your better night’s
            sleep; all brought to you from our team of local sleep experts with
            over twenty years of mattress industry experience.
          </Header>
          <PostsContainer>
            {posts.map((post, index) => (
              <PostThumbnail
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={() => this.handleMouseLeave(index)}
                isHovering={isHovered[index]}
                key={post.id}
                post={post}
              />
            ))}
          </PostsContainer>
          {numberOfPosts < data.allDatoCmsBlog.nodes.length && (
            <Button onClick={() => this.setNumberOfPosts()} type="button">
              Show More Posts
            </Button>
          )}
        </BlogContainer>
      </Layout>
    );
  }
}

export default Blog;

export const blogList = graphql`
  query blogList {
    datoCmsSeo(name: { eq: "blog" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsBlog(sort: { fields: postDate, order: DESC }) {
      nodes {
        id
        slug
        title
        postDate
        description
        postContent
        bottomImage {
          url
          alt
        }
        blogListImage {
          alt
          url
        }
      }
    }
  }
`;

import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { fonts, colors } from "../styles/theme.styled";
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
    text-indent: 42px;
  }
  article a {
    color: ${colors.blue[700]};
    position: relative;
    padding-left: 5px;
    margin-right: 3px;
    padding-bottom: 0px;
    overflow: hidden;
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
    margin-right: -5px;
    margin-left: -5px;
  }
`;

const Article = tw.article`
  prose sm:prose-lg md:prose-xl lg:prose-2xl lg:pb-10 lg:pt-10
`;
const NewPost = ({ data, pageContext }) => {
  const { datoCmsNewBlog } = data;
  const { next, prev } = pageContext;
  let dateModified = null;
  datoCmsNewBlog.seoMetaTags.tags.forEach((element) => {
    if (element.hasOwnProperty("attributes")) {
      if (element.attributes.hasOwnProperty("property")) {
        if (element.attributes.property === "article:modified_time") {
          dateModified = element.attributes.content;
        }
      }
    }
  });
  return (
    <Layout bgWhite>
      <HelmetDatoCms seo={datoCmsNewBlog.seoMetaTags}>
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
      "@type": "BlogPosting",
      "url": "https://www.escmattresscenter.com/blog/${datoCmsNewBlog.slug}",
      "headline": "${datoCmsNewBlog.title}",
      "inLanguage": "en-US",
		"isFamilyFriendly": "true",
      "image": "${datoCmsNewBlog.coverImage.url}",
      "datePublished": "${datoCmsNewBlog.date}",
      "dateModified": "${dateModified || datoCmsNewBlog.date}",
      "description": "${datoCmsNewBlog.excerpt.replace(/['"]+/g, " ")}",
      "articleBody": "${datoCmsNewBlog.content.replace(/['"]+/g, " ")}"
        }
        `}
        </script>
      </HelmetDatoCms>
      <BreadWrapper>
        <BreadCrumbs next="Blog" here={datoCmsNewBlog.title} />
      </BreadWrapper>
      <PostRoot>
        <GatsbyImage
          alt={datoCmsNewBlog.coverImage.alt}
          image={getImage(datoCmsNewBlog.coverImage)}
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
      content
      excerpt
      coverImage {
        url
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 1536)
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

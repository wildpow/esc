import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const NewPost = ({ data }) => {
  return (
    <Layout>
      {console.log(data)}
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsNewBlog.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
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
        url
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

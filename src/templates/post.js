import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import { Marker, BottomImg, Main } from "../styles/postStyles";
import { H2 } from "../styles/mainStyles";
import SEO from "../components/seo";

const Post = ({ data }) => {
  const post = data.gcms.Post;

  function makeTitle(slug) {
    const words = slug.split("-");

    for (let i = 0; i < words.length; i += 1) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
  }

  return (
    <Layout>
      <SEO
        title={makeTitle(post.slug)}
        ogTitle={`E.S.C. Mattress Center | ${post.title}`}
        description={post.description}
      />
      <BreadWrapper Blog>
        <BreadCrumbs next="Blog" here={makeTitle(post.slug)} />
      </BreadWrapper>
      <Main>
        <header>
          <H2>{post.title}</H2>
        </header>
        <article>
          <Marker source={post.content} escapeHtml={false} />
        </article>
        {post.bottomimg ? (
          <BottomImg
            src={`https://media.graphcms.com/resize=w:${
              post.bottomimg.width
            },h:${post.bottomimg.height},fit:clip/${post.bottomimg.handle}`}
            alt={`Image related to ${post.title}`}
          />
        ) : null}
      </Main>
      <BreadWrapper Blog>
        <BreadCrumbs next="Blog" here={post.title} />
      </BreadWrapper>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Post;

export const postQuery = graphql`
  query SinglePost($slug: String!) {
    gcms {
      Post(slug: $slug) {
        description
        id
        slug
        isPublished
        title
        dateAndTime
        coverImage {
          handle
        }
        content
        bottomimg {
          handle
          width
          height
        }
      }
    }
  }
`;

import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown";

const PostThumbnail = ({ numberOfPosts, allPosts }) => {
  const posts = allPosts.slice(0, numberOfPosts);
  return (
    <>
      {posts.map(post => (
        <Link to={`/blog/${post.slug}`} key={postMessage.id}>
          <img
            src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
              post.coverImage.handle
            }`}
            alt={`The blog post called ${post.title}`}
          />
          <h3>{post.title}</h3>
          <Markdown source={post.content} escapeHtml={false} />
        </Link>
      ))}
    </>
  );
};

export default PostThumbnail;

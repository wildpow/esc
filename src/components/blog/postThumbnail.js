import React from "react";
import { Link } from "gatsby";

const PostThumbnail = ({ numberOfPosts, allPosts }) => {
  const posts = allPosts.slice(0, numberOfPosts);
  return (
    <>
      {posts.map(post => (
        <Link to={`/blog/${post.slug}`} key={postMessage.id}>
          {post.title}
        </Link>
      ))}
    </>
  );
};

export default PostThumbnail;

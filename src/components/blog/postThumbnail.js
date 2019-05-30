import React from "react";
import PropTypes from "prop-types";
import { StyledLink, ThumbImg, Description } from "./postThumbStyles";

const PostThumbnail = ({ post, isHovering, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledLink
      to={`/blog/${post.slug}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onMouseEnter}
      onTouchEnd={onMouseLeave}
    >
      <ThumbImg
        src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
          post.coverImage.handle
        }`}
        alt={`The blog post called ${post.title}`}
        isHovering={isHovering}
      />
      <h3>{post.title}</h3>
      <span />
      <Description isHovering={isHovering}>{post.description}</Description>
    </StyledLink>
  );
};

PostThumbnail.defaultProps = {
  isHovering: false,
};
PostThumbnail.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovering: PropTypes.bool,
  post: PropTypes.instanceOf(Object).isRequired,
};
export default PostThumbnail;

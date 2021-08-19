import PropTypes from "prop-types";
import { StyledLink, ThumbImg, Description } from "./postThumbnail.styled";

const PostThumbnail = ({ post, isHovering, onMouseEnter, onMouseLeave }) => (
  <StyledLink
    to={`/blog/${post.slug}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchStart={onMouseEnter}
    onTouchEnd={onMouseLeave}
  >
    <ThumbImg
      src={post.excerptImage.url}
      alt={
        post.excerptImage.alt === null
          ? `The blog post called ${post.title}`
          : post.excerptImage.alt
      }
      isHovering={isHovering}
    />
    <h3>{post.title}</h3>
    <span />
    <Description isHovering={isHovering}>{post.excerpt}</Description>
  </StyledLink>
);

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

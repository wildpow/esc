import React from "react";
import PropTypes from "prop-types";
import { StyledLink, InfoWrapper, Img, H3 } from "./blogListStyles";

const BlogList = ({ items, count }) => {
  if (count) items = items.slice(0, count);
  return (
    <>
      {items.map(item => (
        <StyledLink to={`/blog/${item.slug}`} key={item.id}>
          <InfoWrapper>
            <Img
              src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${
                item.coverImage.handle
              }`}
              alt={`Small image for the blog post called ${item.title}`}
            />
          </InfoWrapper>
          <H3>{item.title}</H3>
        </StyledLink>
      ))}
    </>
  );
};
BlogList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  count: PropTypes.number.isRequired,
};
export default BlogList;

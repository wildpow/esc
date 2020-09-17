import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import {
  colors,
  spacing,
  fontSize,
  breakpoints,
  radius,
} from "../../utils/styles";

const TopBlogRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: ${spacing[4]};
  grid-row-gap: ${spacing[4]};
  .post-wrapper {
    border: 1px solid ${colors.gray[500]};
    border-radius: ${radius.large}px;
    padding: ${spacing[4]};
    text-decoration: none;
    :hover {
      box-shadow: 0px 5px 5px 0px ${colors.gray["500"]};
      transition: box-shadow 0.15s ease-in-out;
    }
    p {
      margin: 0;
      padding-bottom: 0;
      font-size: ${fontSize.base};
      line-height: ${spacing[6]};
    }
  }
  .post-title {
    display: flex;
    img {
      max-width: 100px;
    }
    h4 {
      color: ${colors.blue[900]};
      font-size: ${fontSize.lg};
    }
  }
`;
const TopBlogPosts = (data) => {
  return (
    <TopBlogRoot>
      {console.log(data)}
      {data.data.map((item) => {
        return (
          <Link
            key={item.slug}
            className="post-wrapper"
            to={`/blog${item.slug}`}
          >
            <div className="post-title">
              <img src={item.blogListImage.url} alt={item.blogListImage.alt} />
              <h4>{item.title}</h4>
            </div>
            <p>{item.description}</p>
          </Link>
        );
      })}
    </TopBlogRoot>
  );
};

export default TopBlogPosts;

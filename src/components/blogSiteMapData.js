import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SiteLinks } from "../styles/siteMapStyles";

const BlogSiteMapData = () => (
  <StaticQuery
    query={graphql`
      query allblogSiteMap {
        gcms {
          allPosts(orderBy: dateAndTime_DESC, filter: { isPublished: true }) {
            slug
            title
            id
          }
        }
      }
    `}
    render={data => (
      <>
        {data.gcms.allPosts.map(base => (
          <li key={base.id}>
            <SiteLinks to={`/blog/${base.slug}`}>{base.title}</SiteLinks>
          </li>
        ))}
      </>
    )}
  />
);

export default BlogSiteMapData;

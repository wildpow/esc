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
      <React.Fragment>
        {data.allPost.edges.map(base => (
          <li key={base.node.id}>
            <SiteLinks to={`/blog/${base.node.slug}`}>
              {base.node.title}
            </SiteLinks>
          </li>
        ))}
      </React.Fragment>
    )}
  />
);

export default BlogSiteMapData;

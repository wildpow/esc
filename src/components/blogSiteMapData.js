import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SiteLinks } from "../styles/siteMapStyles";

const BlogSiteMapData = () => (
  <StaticQuery
    query={graphql`
      query allblogSiteMap {
        allPost(
          sort: { fields: dateAndTime, order: DESC }
          filter: { isPublished: { eq: true } }
        ) {
          edges {
            node {
              slug
              title
              id
            }
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

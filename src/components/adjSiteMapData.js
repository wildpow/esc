import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SiteLinks } from "../styles/siteMapStyles";

const AdjSiteMapData = () => (
  <StaticQuery
    query={graphql`
      query allAdjSiteMap {
        gcms {
          allAdjBaseses(filter: { isPublished: true }, orderBy: value_ASC) {
            uri
            fullName
            id
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        {data.allAdjBasese.edges.map(base => (
          <li key={base.node.id}>
            <SiteLinks to={`/adjustable/${base.node.uri}`}>
              {base.node.fullName}
            </SiteLinks>
          </li>
        ))}
      </React.Fragment>
    )}
  />
);

export default AdjSiteMapData;

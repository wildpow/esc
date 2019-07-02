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
      <>
        {data.gcms.allAdjBaseses.map(base => (
          <li key={base.id}>
            <SiteLinks to={`/adjustable/${base.uri}`}>
              {base.fullName}
            </SiteLinks>
          </li>
        ))}
      </>
    )}
  />
);

export default AdjSiteMapData;

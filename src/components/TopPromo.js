import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { OutBoundLink, InboundLink } from "../styles/topperStyles";

const TopPromo = () => (
  <StaticQuery
    query={graphql`
      query toppers {
        datoCmsFrontPage {
          topper {
            url
            urlText
            internalLink
          }
        }
      }
    `}
    render={data => {
      const { topper } = data.datoCmsFrontPage;
      return (
        <>
          {topper[0].internalLink ? (
            <InboundLink to={topper[0].url}>{topper[0].urlText}</InboundLink>
          ) : (
            <OutBoundLink
              href="https://subscribe.mainstreethub.com/email/b1278150-e6a6-4cd5-8708-d72ade6c099a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {topper[0].urlText}
            </OutBoundLink>
          )}
        </>
      );
    }}
  />
);

export default TopPromo;

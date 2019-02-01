import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { BigPromo, PromoLink, InboundLink } from "../styles/topperStyles";

const TopPromo = () => (
  <StaticQuery
    query={graphql`
      query toppers {
        gcms {
          allToppers {
            id
            currentpromo
            linkType
            uRL
          }
        }
      }
    `}
    render={data => (
      <>
        {data.gcms.allToppers[0].linkType[0] === "Inbound" ? (
          <InboundLink to={data.gcms.allToppers[0].uRL}>
            <BigPromo>{data.gcms.allToppers[0].currentpromo}</BigPromo>
          </InboundLink>
        ) : (
          <PromoLink
            href="https://subscribe.mainstreethub.com/email/b1278150-e6a6-4cd5-8708-d72ade6c099a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BigPromo>{data.topper.currentpromo}</BigPromo>
          </PromoLink>
        )}
      </>
    )}
  />
);

export default TopPromo;

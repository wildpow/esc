import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Headline, Wrapper, P } from "../styles/homeStyles";

const Front = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query front {
          gcms {
            allFronts {
              id
              title
              textBlock
            }
          }
        }
      `}
      render={data => (
        <>
          <Headline>{data.front.title}</Headline>
          <P>{data.front.textBlock}</P>
        </>
      )}
    />
    <Headline red>“Sleep Like the Experts Do!”</Headline>
  </Wrapper>
);

export default Front;

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Headline, Wrapper, P, FooterLink } from "../styles/homeStyles";

const Front = () => (
  <>
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
            <Headline>{data.gcms.allFronts[0].title}</Headline>
            <P>{data.gcms.allFronts[0].textBlock}</P>
          </>
        )}
      />
      {/* <Headline red>“Sleep Like the Experts Do!”</Headline> */}
    </Wrapper>
    <Wrapper>
      <Headline>ESC = Expert Sleep Center</Headline>
      <P>
        At ESC Mattress Center we have over twenty years industry experience --
        we are the sleep experts and we want to help educate you so you can get
        the great sleep you deserve. With our customer-friendly 90 day comfort
        guarantee we&apos;ve got your back in case you&apos;re not 100%
        satisfied with your purchase.
      </P>
      <Headline red>
        <FooterLink to="/about">Read More</FooterLink>
      </Headline>
    </Wrapper>
  </>
);

export default Front;

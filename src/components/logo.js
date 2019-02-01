import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import {
  Image,
  H1,
  Span,
  StyledLink,
  Wrapper,
  ReadersChoice,
} from "../styles/logoStyles";
import readersChoice from "../images/ReadersChoiceWinner300x.png";
// test
const Logo = () => (
  <Wrapper>
    <Link to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
      <ReadersChoice
        src={readersChoice}
        alt="ESC Mattress Center was voted SnoCo best mattress store in Snohomish County"
      />
    </Link>
    <StyledLink to="/">
      <StaticQuery
        query={graphql`
          query allThePandas {
            gcms {
              allPandaLogoes {
                id
                altText
                logoImage {
                  handle
                  id
                  width
                  height
                }
              }
            }
          }
        `}
        render={data => (
          <Image
            src={`https://media.graphcms.com/resize=w:1905,h:1233,fit:clip/${
              data.gcms.allPandaLogoes[0].logoImage.handle
            }`}
            alt={data.gcms.allPandaLogoes[0].logoImage.altText}
          />
        )}
      />
    </StyledLink>
    <H1>
      <Span>E.S.C. </Span>
      Mattress Center
    </H1>
  </Wrapper>
);

export default Logo;

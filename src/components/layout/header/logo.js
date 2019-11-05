import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import {
  Image,
  H1,
  Span,
  StyledLink,
  Wrapper,
  ReadersChoice,
} from "../../../styles/logoStyles";
import readersChoice from "../../../images/ReadersChoiceWinner300x.png";
// test
const Logo = ({ menuToggle }) => (
  <Wrapper>
    <Link to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
      <ReadersChoice
        menuToggle={menuToggle}
        src={readersChoice}
        alt="ESC Mattress Center was voted SnoCo best mattress store in Snohomish County"
      />
    </Link>
    <StyledLink to="/">
      <StaticQuery
        query={graphql`
          query pandaLogo {
            datoCmsFrontPage {
              pandaLogo {
                url
                alt
              }
            }
          }
        `}
        render={data => {
          const { pandaLogo } = data.datoCmsFrontPage;
          return (
            <Image
              src={pandaLogo.url}
              alt={
                pandaLogo.alt === null
                  ? "E.S.C Mattress Center Panda logo"
                  : pandaLogo.alt
              }
            />
          );
        }}
      />
    </StyledLink>
    <H1>
      <Span>E.S.C. </Span>
      Mattress Center
    </H1>
  </Wrapper>
);

Logo.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
};

export default Logo;

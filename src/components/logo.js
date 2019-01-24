import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Image,
  H1,
  Span,
  StyledLink,
  Wrapper,
  ReadersChoice,
} from '../styles/logoStyles'
import readersChoice from '../images/ReadersChoiceWinner300x.png'
import Link from 'gatsby-link'
//test
const Logo = () => {
  return (
    <Wrapper>
      <Link to="blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
        <ReadersChoice
          src={readersChoice}
          alt="ESC Mattress Center was voted SnoCo best mattress store in Snohomish County"
        />
      </Link>
      <StyledLink to="/">
        <StaticQuery
          query={graphql`
            query allThePandas {
              allPandaLogo {
                edges {
                  node {
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
            }
          `}
          render={data => (
            <Image
              src={`https://media.graphcms.com/resize=w:1905,h:1233,fit:clip/${
                data.allPandaLogo.edges[0].node.logoImage.handle
              }`}
              alt={data.allPandaLogo.edges[0].node.altText}
            />
          )}
        />
      </StyledLink>
      <H1>
        <Span>E.S.C.</Span> Mattress Center{' '}
      </H1>
    </Wrapper>
  )
}

export default Logo

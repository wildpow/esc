import React from 'react'
import logo from '../images/SiteSantaPanda.png'
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
        <Image
          src={logo}
          alt="E S C Mattress Center logo of a sleeping panda"
        />
      </StyledLink>
      <H1>
        <Span>E.S.C.</Span> Mattress Center{' '}
      </H1>
    </Wrapper>
  )
}

export default Logo

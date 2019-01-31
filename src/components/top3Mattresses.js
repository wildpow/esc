import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import {
  Wrapper,
  LinkWrapper,
  StyledLink,
  Divy,
  MattImg,
  PriceRange,
  Name,
  MainWrapper,
  Headline,
} from "../styles/mattListStyles";
import { P } from "../styles/homeStyles";

const NewWrapper = styled(MainWrapper)`
  margin-top: 15px;
  @media (min-width: 1024px) {
    box-shadow: ${props => props.theme.BoxShadow};
    border-top: ${props => props.theme.Border};
    border-right: ${props => props.theme.Border};
    border-left: ${props => props.theme.Border};
  }
`;
const NewP = styled(P)`
  border-top: ${props => props.theme.Border};
`;
const ThreeMattWrapper = styled(Wrapper)`
  margin-bottom: 10px;
  @media (min-width: 375px) {
    /* margin-bottom: 5px; */
    margin-top: 5px;
    margin-bottom: 10px;
  }
  @media (min-width: 411px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media (min-width: 568px) {
    margin-bottom: 5px;
  }
  @media (min-width: 731px) {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1300px) {
    margin-top: 10px;
    /* max-width: 900px; */
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
    /* color: ${props => props.theme.mainColor1}; */
  }
`;

const TopThreeMatts = () => {
  return (
    <StaticQuery
      query={graphql`
        query top3Matts {
          gcms {
            allFront3Mattresses {
              id
              footerURL
              footertagline
              headerTagLine
              mattresses {
                uri
                uriBrandName
                id
                brandName
                priceRange
                subName
                subBrand
                coverImg {
                  handle
                }
              }
            }
          }
        }
      `}
      render={data => (
        <NewWrapper>
          {/* <Wrapper2> */}
          <Headline>
            {data.allFront3Mattress.edges[0].node.headerTagLine}
          </Headline>
          {/* </Wrapper2> */}
          <ThreeMattWrapper>
            {data.allFront3Mattress.edges[0].node.mattresses.map(mattress => (
              <LinkWrapper key={mattress.id}>
                <StyledLink
                  to={`/brands/${mattress.uriBrandName}/${mattress.uri}`}
                >
                  <Divy>
                    <MattImg
                      src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
                        mattress.coverImg.handle
                      }`}
                      alt={`Image of a ${mattress.brandName} ${
                        mattress.subBrand
                      } ${mattress.subName} mattress`}
                    />
                    <PriceRange>
                      {`$${mattress.priceRange[0]} - $${
                        mattress.priceRange[1]
                      }`}
                    </PriceRange>
                  </Divy>
                  <Name>
                    {mattress.brandName}
                    <br />
                    {mattress.subBrand}
                    <br />
                    {mattress.subName}
                  </Name>
                </StyledLink>
              </LinkWrapper>
            ))}
          </ThreeMattWrapper>
          <NewP>
            We believe that no mattress is a one-size-fits-all solution, which
            is why we have over 50 mattresses to choose from at our Everett
            location. If you’d like to browse our current sale mattresses you
            can click below, or visit our showroom on Everett Mall Way. With a
            combined 25 years of experience helping people find the right
            mattress for their sleep needs we’re here to help you start sleeping
            better.
          </NewP>
          <Headline red>
            <FooterLink to={data.allFront3Mattress.edges[0].node.footerURL}>
              {data.allFront3Mattress.edges[0].node.footertagline}
            </FooterLink>
          </Headline>
        </NewWrapper>
      )}
    />
  );
};

export default TopThreeMatts;

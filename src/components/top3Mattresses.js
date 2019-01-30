import React from "react";
import { StaticQuery, graphql } from "gatsby";
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
  Wrapper2,
} from "../styles/mattListStyles";

const TopThreeMatts = () => {
  return (
    <StaticQuery
      query={graphql`
        query top3Matts {
          allFront3Mattress {
            edges {
              node {
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
        }
      `}
      render={data => (
        <MainWrapper>
          <Wrapper2>
            <Headline>
              {data.allFront3Mattress.edges[0].node.headerTagLine}
            </Headline>
          </Wrapper2>
          <Wrapper>
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
          </Wrapper>
        </MainWrapper>
      )}
    />
  );
};

export default TopThreeMatts;

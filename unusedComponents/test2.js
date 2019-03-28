import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2px;
  width: 150px;
  height: 216px;
  margin-top: 15px;
  background-color: white;
  transition: ${props => props.theme.hoverTransition};
  box-shadow: ${props => props.theme.hoverBoxBefore};
  @media (min-width: 360px) {
    margin: 5px;
    width: 165px;
    height: 235px;
  }
  @media (min-width: 414px) {
    width: 185px;
  }
  @media (min-width: 768px) {
    width: 340px;
    height: 365px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 360px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  &:hover {
    transform: ${props => props.theme.hoverTransform};
    box-shadow: ${props => props.theme.hoverBoxAfter};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #1565c0;
`;

export const Divy = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MattImg = styled.img`
  color: white;
  margin: 0 auto;
  width: 110px;
  height: 110px;
  @media (min-width: 360px) {
    width: 130px;
    height: 130px;
  }
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1022px) {
    width: 250px;
    margin-bottom: -10px;
  }
`;

export const PriceRange = styled.div`
  color: ${props => props.theme.newColor2};
  font-weight: 400;
  font-family: ${props => props.theme.MainFont1};
  font-size: 0.7rem;
  text-align: center;
  @media (min-width: 360px) {
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

export const Name = styled.div`
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  font-weight: 400;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 5px;
  font-size: 0.9rem;
  margin: 0;
  @media (min-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2rem;
    margin: 0;
    letter-spacing: 0.05rem;
  }
`;
const NewDiv = styled.div`
  position: relative;
  /* width: 100%; */
  /* justify-content: center;
  align-content: center; */

  /* margin: 0 auto; */
  display: flex;
`;
const Banner = styled.div`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  text-align: center;
  z-index: 10;
  /* width: 100%; */
  background-color: ${props => props.theme.mainColor2};
  color: white;
  position: absolute;
  font-size: 0.6rem;
  padding-top: 3px;
  /* padding-left: 5px;
  padding-right: 5px; */
  padding-bottom: 3px;
  letter-spacing: 0.035rem;
  margin-top: 8px;
  /* margin-right: 10px; */
  :after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${props => props.theme.mainColor2};
    transform-origin: bottom left;
    transform: skew(-21deg, 0deg);
  }
`;
const Test = ({ mattress, url }) => {
  return (
    <LinkWrapper key={mattress.id}>
      <StyledLink to={url}>
        <Divy>
          <NewDiv>
            <Banner>GIFT WITH PURCHASE</Banner>
            <MattImg
              src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
                mattress.coverImg.handle
              }`}
              alt={`Image of a ${mattress.brandName} ${mattress.subBrand} ${
                mattress.subName
              } mattress`}
            />
          </NewDiv>
          <PriceRange>
            {`$${mattress.priceRange[0]} 
          - $${mattress.priceRange[1]}`}
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
  );
};

export default Test;

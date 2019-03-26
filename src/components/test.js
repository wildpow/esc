import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* margin-top: -2px; */
  /* width: 300px;
  height: 360px; */
`;
const Linker = styled(Link)`
  text-decoration: none;
  border: ${props => props.theme.Border};

  display: flex;
  justify-content: center;
  margin: 2px;
  width: 150px;
  height: 216px;
  margin-top: 15px;
  /* border-bottom: medium none; */
  /* box-shadow: ${props => props.theme.newBoxShadow};
  
  border-radius: 0.14rem; */
  background-color: white;
  /* transition: all 0.15s ease-in-out; */
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
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
    /* box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08); */
    /* z-index: 999;
    transform: scale3d(1.05, 1.05, 1); */
    /* box-shadow: 0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16); */
    box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16);
    transform: translateY(-4px);

  }
`;

const MattImg = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  color: white;
  margin: 0 auto 0px auto;
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
    /* margin-bottom: -10px; */
  }
`;
// grid-template-columns: 10px 230px 10px;
// grid-template-rows: 10px 1fr 10px;
const Stuff = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  text-align: center;
  z-index: 1000;
  background-color: ${props => props.theme.mainColor2};
  color: white;
  position: absolute;
  font-size: 1rem;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  width: 100%;
  letter-spacing: 0.085rem;
  /* @media (min-width: 1028px) {
    grid-column-start: 2;
    grid-column-end: 21;
    grid-row-start: 3;
    grid-row-end: 4;
    letter-spacing: 0.1rem;
    margin-left: 8px;
    margin-top: -4px;
    padding-top: 3px;
    padding-bottom: 3px;
  } */

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
    /* -ms-transform: skew(-30deg, 0deg);
    -webkit-transform: skew(-30deg, 0deg); */
    transform: skew(-21deg, 0deg);
  }
`;
const Wraps = styled.div`
  margin-top: -5px;
  z-index: 10;
  /* grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 3; */
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Price = styled.div`
  /* grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3; */
  color: ${props => props.theme.newColor2};
  font-weight: 400;
  font-family: ${props => props.theme.MainFont1};
  font-size: 0.7rem;
  text-align: center;
  margin-bottom: 12px;
  @media (min-width: 360px) {
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;
const Name = styled.div`
  /* grid-column-start: 2;
  grid-column-end: 6; */
  text-align: center;
  /* padding-top: 10px; */
  /* grid-row-start: 3;
  grid-row-end: 3; */
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  /* padding-left: 5px;
  padding-right: 5px; */
  /* padding-bottom: 10px; */
  /* padding-top: 5px; */
  font-size: 0.9rem;
  margin: 0;
  @media (min-width: 768px) {
    /* padding-left: 10px;
    padding-right: 10px; */
    font-size: 1.2rem;
    margin: 0;
    letter-spacing: 0.05rem;

    /* letter-spacing: 0.05rem; */
  }
`;
const Dude = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 10px 230px 10px;
  grid-template-rows: 17px 1fr 1px;
  margin: 0 auto;
`;
const Test = ({ mattress, url }) => {
  return (
    <Linker to={url}>
      <Wrapper>
        <Dude>
          {/* <Stuff>GIFT WITH PURCHASE</Stuff> */}

          <MattImg
            alt={`A ${mattress.brandName} ${mattress.subBrand} ${
              mattress.subName
            } mattress`}
            src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
              mattress.coverImg.handle
            }`}
          />
        </Dude>
        <Wraps>
          <Price>
            {`$${mattress.priceRange[0]} 
          - $${mattress.priceRange[1]}`}
          </Price>
          <Name>
            {mattress.brandName}
            <br />
            {mattress.subBrand}
            <br />
            {mattress.subName}
          </Name>
        </Wraps>
      </Wrapper>
    </Linker>
  );
};

export default Test;

import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import CertifiedBig from "../images/badge1.png";

const BirdLink = styled(OutboundLink)`
  text-decoration: none;
`;
const Wrapper = styled.div`
  transition: all 0.25s ease-in;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 180px;
  border-radius: 5px;
  font-family: ${props => props.theme.MainFont1};
  font-weight: 100;
  box-shadow: ${props => props.theme.BoxShadow};
  background-color: ${props => props.theme.mainColor1};
  /* @media (min-width: 1366px) {
    margin-top: 10px;
  } */
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  img {
    height: 7em;
  }
`;
const Rating = styled.div`
  margin-left: 20px;
  color: white;
  display: flex;
  font-family: ${props => props.theme.MainFont1};
  justify-content: start;
  img {
    margin-right: 5px;
    width: 22px;
    height: 22px;
  }
  h6 {
    font-size: 1.2em;
    margin: 0;
  }
`;
const AvgContainer = styled.div`
  /* margin-top: -6px; */
  font-size: 1.3em;
  margin-left: 4px;
  font-family: ${props => props.theme.MainFont1};
`;

const Text = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
  h4 {
    font-size: 2em;
    margin: 0px;
    padding: 0px;
    color: white;
  }
`;
const BirdBig = props => {
  const { avgRating, reviewCount, star } = props;
  const starsArr = [];
  for (let i = 0; i < Math.round(avgRating); i += 1) {
    starsArr.push(<img src={star} alt="start for rating" key={i + 200} />);
  }
  return (
    <BirdLink
      href="https://birdeye.com/esc-mattress-center-154743411347922"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Wrapper>
        <Top>
          <Text>
            <h4>{reviewCount}</h4>
            <h4>Certified</h4>
            <h4>Reviews</h4>
          </Text>
          <img alt="BirdEye certified seal" src={CertifiedBig} />
        </Top>
        <Rating>
          {starsArr}
          <AvgContainer>{avgRating}</AvgContainer>
        </Rating>
      </Wrapper>
    </BirdLink>
  );
};

export default BirdBig;

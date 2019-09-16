import React from "react";
import styled from "styled-components";
import aquasoxImg from "../images/test.png";
import clothesForKidsImg from "../images/clothes_for_kids_transparent.png";

const Wrapper = styled.div`
  transition: all 0.25s ease-in;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  width: 145px;
  height: 75px;
  font-family: ${props => props.theme.MainFont2};
  font-weight: 100;
  box-shadow: ${props => props.theme.BoxShadow};
  background-color: ${props => props.theme.mainColor1};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  h4 {
    font-weight: 300;

    margin: 0;
    letter-spacing: 0.05em;
  }
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    /* line-height: 1.1em;
    letter-spacing: 0.14em; */
    height: 90px;
    h4 {
      text-align: center;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;

export const Aquasox = () => (
  <Wrapper>
    <h4>Proud partner of</h4>
    <h4>our local teams</h4>
    <img src={aquasoxImg} />
  </Wrapper>
);

export const ClothesForKids = () => (
  <Wrapper>
    <h4>Clothes for kids</h4>
    <h4>donation location</h4>
  </Wrapper>
);

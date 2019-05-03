import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fafafa;
  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.4);
  /* border-radius: 4px; */
  margin: 6px;
  padding: 15px;
  text-align: center;
  /* box-shadow: 0 10px 6px -6px rgba(255, 255, 255, 0.1); */
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
  @media (min-width: 640px) and (min-height: 360px) {
    margin: 8px;
    padding: 17px;
  }
  @media (min-width: 640px) and (min-height: 375px) {
    margin: 8px;
    padding: 20px;
  }
  @media (min-width: 731px) and (min-height: 411px) {
    margin: 8px;
    padding: 20px;
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 736px) and (min-height: 414px) {
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 812px) and (min-height: 375px) {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
    padding: 16px;
  }
`;

const Wrapper = styled.div`
  display: none;

  @media (orientation: landscape) and (max-height: 600px) {
    display: flex;
    flex-direction: row;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 1px;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 400px) {
    display: none;
  }
`;
const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  padding: 0px;
  text-align: center;
  justify-content: space-evenly;
`;

const Div = styled.div`
  height: 140px;
  position: relative;

  @media (orientation: portrait) {
    display: none;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 400px) {
    display: none;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 450px) {
    display: none;
  }
  @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
    display: none;
  }
`;
const Home = styled(StyledLink)`
  position: absolute;
  top: 53px;
  left: 5px;
  padding: 15px;
  width: 30.5%;
  text-align: center;
  @media (max-height: 315px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 400px) {
    display: none;
  }
  @media (min-width: 800px) and (min-height: 375px) {
    width: 31%;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 450px) {
    display: none;
  }
  @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
    display: none;
  }
`;
const Landscape = () => {
  return (
    <>
      <Div>
        <Home
          activeStyle={{
            backgroundColor: "rgba(235, 28, 26, 0.9)",
          }}
          to="/"
        >
          Home
        </Home>
      </Div>
      <Wrapper>
        <Holder>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/brands"
          >
            Brands
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/adjustable"
          >
            Ajustable
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/accessories"
          >
            Accessories
          </StyledLink>
        </Holder>
        <Holder>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/financing"
          >
            Financing
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/blog"
          >
            Our Blog
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/about"
          >
            About Us
          </StyledLink>
        </Holder>
        <Holder>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/warranty"
          >
            Warranty
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/policies"
          >
            Policies
          </StyledLink>
          <StyledLink
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/sitemap"
          >
            Site Map
          </StyledLink>
        </Holder>
      </Wrapper>
    </>
  );
};

export default Landscape;

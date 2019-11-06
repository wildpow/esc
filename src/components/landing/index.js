import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";
import TabBox from "./TabBox";
import WindowDimensionsProvider from "../context/WindowDimensions";

// 1440 should be the max page size and Section should Only define content
const Section = styled.section`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  /* margin-top: 40px; */
  background-color: white;
  flex-direction: column;
  scroll-behavior: smooth;
  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;

const Hero = styled(Img)`
  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    height: 210px;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const LogoContainer = styled.div`
  text-align: center;
  padding-top: 42px;
  padding-bottom: 28px;
  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
const Logo = styled(Img)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
  max-width: 662px;
  max-height: 116px;
`;
const Container = styled.div`
  font-family: ${props => props.theme.MainFont3};
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  p {
    margin-top: 56px;
    margin-bottom: 30px;
    max-width: 700px;
    color: #00103b;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.MainFont3};
    /* @media screen and (max-width: 770px) {
      margin-right: 1000px;
    } */
    @media screen and (max-width: 375px) {
      font-size: 16px;
      margin-top: 36px;
    }
  }
`;
const Button = styled.a`
  padding: 10px 25px;
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  background: #00103b;
  color: white;
  font-size: 18px;
  margin: 5px;
`;

const Hr = styled.hr`
  border-top: 1px solid #eee;
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`;

const TabBoxContainer = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  padding-top: 0px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  margin-top: 0px;
  @media screen and(min-width: 375px) {
  }
`;
const Landing = ({ data }) => {
  const { headingImg, heroImg, description, tabBox } = data;
  return (
    <WindowDimensionsProvider>
      <div style={{ maxWidth: "1440px", backgroundColor: "white" }}>
        <Section>
          <LogoContainer>
            <Logo fluid={headingImg.fluid} alt={headingImg.alt} />
          </LogoContainer>
          <Hero fluid={heroImg.fluid} alt={heroImg.alt} />
          <Container>
            <p>{description}</p>
            <div>
              <Button>Shop Steans & Foster now!</Button>
              <Button>Contact Us Now!</Button>
            </div>
          </Container>

          {tabBox.map(item => (
            <TabBoxContainer>
              <Hr />

              <TabBox
                key={item.id}
                tabs={item.box}
                hero={item.topImage}
                heroText={item.topText}
              />
            </TabBoxContainer>
          ))}

          <div>
            <Hr />
          </div>
        </Section>
      </div>
    </WindowDimensionsProvider>
  );
};

Landing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Landing;

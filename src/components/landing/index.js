import React from "react";
import styled from "styled-components";
import TabBox from "./TabBox";

// 1440 should be the max page size and Section should Only define content
const Section = styled.section`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  margin-top: 40px;
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

const HeroContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    img {
      height: 210px;
      overflow: hidden;
    }
  }
`;
const LogoContainer = styled.div`
  text-align: center;
  p {
    color: #00103b;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.MainFont3};
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 30px;
  }
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
    width: 700px;
    color: #00103b;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.MainFont3};
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

const Landing = ({ data }) => {
  const { title, headingImg, heroImg, description, tabBox } = data;

  return (
    <div style={{ maxWidth: "1440px", backgroundColor: "white" }}>
      <Section>
        <LogoContainer>
          <img src={headingImg.url} alt={headingImg.alt} />
        </LogoContainer>
        <HeroContainer>
          <img src={heroImg.url} alt={heroImg.alt} />
        </HeroContainer>
        <Container>
          <p>{description}</p>
          <div>
            <Button>Shop Steans & Foster now!</Button>
            <Button>Contact Us Now!</Button>
          </div>
        </Container>
        {tabBox.map(item => (
          <TabBox
            key={item.id}
            tabs={item.box}
            hero={item.topImage}
            heroText={item.topText}
          />
        ))}
      </Section>
      <div>
        <Hr />
      </div>
    </div>
  );
};
export default Landing;

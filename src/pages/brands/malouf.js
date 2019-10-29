import React from "react";
import styled, { css } from "styled-components";
import Layout from "../../components/layout";

import logo from "../../images/new/landing/logo.jpg";
import hero from "../../images/new/landing/hero.jpg";
import finessed from "../../images/new/landing/finessed-to-impress.jpg";
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
  /* border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  z-index: 1000; */
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`;
const Malouf = () => (
  <Layout>
    <Section>
      <LogoContainer>
        <img src={logo} alt="poop" />
      </LogoContainer>
      <HeroContainer>
        <img src={hero} alt="sfgwef" />
      </HeroContainer>
      <Container>
        <p>
          A Stearns & Foster mattress is so exceptional, it’s reluctantly hidden
          under even the finest sheets. But whenever you need a reminder of what
          lavish comfort, true quality and timeless design looks like, all you
          have to do is pull back the covers.
        </p>
        <div>
          <Button>Shop Steans & Foster now!</Button>
          <Button>Contact Us Now!</Button>
        </div>
      </Container>
      <div>
        <Hr />
      </div>
      <LogoContainer>
        <img src={finessed} alt="erfewfg" />
        <p>Design, Comfort, and Quality Craftsmanship in every collection.</p>
      </LogoContainer>
    </Section>
  </Layout>
);

export default Malouf;

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import {
  Main,
  TempurImg,
  StearnsImg,
  SealyImg,
  MainText,
  Footer,
  StyledLink,
  BrandWrapper,
  StearnsWrapper,
} from "../styles/brandsStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import SealyLogo from "../images/sealyLogo.png";
import StearnsLogo from "../images/stearnsLogo.png";
import TempurLogo from "../images/tempurLogo2.png";

const Brands = ({ data }) => (
  <Main MarginTop>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <BreadWrapper hidenLarge>
      <BreadCrumbs here="Brands" />
    </BreadWrapper>
    <StyledLink to="/brands/tempurpedic">
      <BrandWrapper>
        <TempurImg src={TempurLogo} alt="Tempurpedic mattress company logo" />
        <MainText>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they
          changed the way the world sleeps. TEMPUR® material is infinitely
          adaptable, responding to your body temperature, adapting to your
          weight and unique shape, giving you personalized support and alignment
          for undisturbed sleep.
        </MainText>
        <Footer blue>
          Tempur-Pedic:
          <br />
          Life-changing sleep.
        </Footer>
      </BrandWrapper>
    </StyledLink>
    <StearnsWrapper to="/brands/stearns">
      <BrandWrapper>
        <StearnsImg
          src={StearnsLogo}
          alt="Stearn & Foster mattress company Logo"
        />
        <MainText>
          The enduring craftsmanship of Stearns & Foster is their legacy. Since
          1846 their specially-trained craftsmen have been building mattresses
          by hand, using techniques they developed and spent decades perfecting.
          They’re so dedicated to what they do, they sign every one.
        </MainText>
        <Footer blue>
          Stearns & Foster:
          <br />
          Crafting the world’s finest bed.
        </Footer>
      </BrandWrapper>
    </StearnsWrapper>
    <StyledLink to="/brands/sealy">
      <BrandWrapper>
        <SealyImg src={SealyLogo} alt="Sealy Mattress company Logo" />
        <MainText>
          At the heart of every Sealy mattress is the support that’s right for
          you. Only Sealy has Posturepedic Technology™ to provide more support
          where you need it most. By precisely engineering the mattress into
          specific zones, they’re able to target reinforced support, while
          providing exceptional full-body support.
        </MainText>
        <Footer blue>
          Sealy:
          <br />
          Proud supporter of you.
        </Footer>
      </BrandWrapper>
    </StyledLink>
    <BreadWrapper hidenLarge Bottom>
      <BreadCrumbs here="Brands" />
    </BreadWrapper>
  </Main>
);

Brands.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const brandsSEO = graphql`
  query brandsSEO {
    datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Brands;

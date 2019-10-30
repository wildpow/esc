import React from "react";
import styled, { css } from "styled-components";
import Layout from "../../components/layout";

import logo from "../../images/new/landing/logo.jpg";
import hero from "../../images/new/landing/hero.jpg";
import finessed from "../../images/new/landing/finessed-to-impress.jpg";

import ease from "../../images/new/landing/ease.jpg";
import ergo from "../../images/new/landing/ergo.jpg";
import ergoExtend from "../../images/new/landing/ergo-extend.jpg";
import flatFoundation from "../../images/new/landing/flat-foundation.jpg";
import Carousel from "../../components/brands/carousel";

import reserve from "../../images/new/landing/reserve.jpg";
import luxEstateHybrid from "../../images/new/landing/lux-estate-hybrid.jpg";
import luxEstate from "../../images/new/landing/lux-estate.jpg";
import estate from "../../images/new/landing/estate.jpg";
import restOnaSolid from "../../images/new/landing/rest-on-a-solid-foundation.jpg";
import memoryPill from "../../images/new/landing/memory-foam-pillow.jpg";
import latexPillow from "../../images/new/landing/latex-pillow.jpg";
import topItAll from "../../images/new/landing/top-it-all-off.jpg";

const pillow = [
  {
    title: "Memory Foam Pillow",
    desc: [
      "Plush Memory Foam core",
      "Premium stretch-knit cover featuring TENCELTM",
      " Removable and washable cover",
    ],
    pic: memoryPill,
  },
  {
    title: "Latex Pillow",
    desc: [
      "Naturally breathable Talalay latex core",
      "Premium stretch-knit cover featuring TENCELTM",
      "Removable and washable cover",
    ],
    pic: latexPillow,
  },
];

const subBrand = [
  {
    title: "Reserve",
    desc: `The Stearns & Foster® Reserve Collection is our highest expression 
          of craftsmanship. We developed an entirely new mattress-making process 
          to craft its one-of-a-kind design, quality, and feel. Nothing matches 
          the feeling of a Reserve.`,
    pic: reserve,
  },
  {
    title: "Lux Estate Hybrid",
    desc: `The Lux Estate Hybrid Collection takes the comfort of Indulge Memory 
    Foam and adds our own time-honored craftsmanship. It’s a hybrid mattress 
    that’s as cozy as it is supportive—and the only one to earn the Stearns 
    & Foster® name.`,
    pic: luxEstateHybrid,
  },
  {
    title: "Lux Estate",
    desc: `In a perfectly designed bedroom, it’s the little details that matter. 
    The Lux Estate Collection includes all the extra touches you deserve.
    All to deliver next-level comfort.`,
    pic: luxEstate,
  },
  {
    title: "Estate",
    desc: `The Stearns & Foster® Estate Collection is designed to deliver supreme,
     indulging comfort. Crafted by our Certified Master Craftsmen with the world’s
      finest materials, plus designed with IntelliCoil® Technology.`,
    pic: estate,
  },
];
const car = [
  {
    title: "Ease®",
    desc: `Ease® has all the features you need in a power base.
            With nearly unlimited ergonomic positions and presets, 
            the Ease is an essential part of a complete and seamless 
            sleep experience.`,
    pic: ease,
  },
  {
    title: "Ergo®",
    desc: `The TEMPUR-Ergo® power base is an essential part 
            of a holistic sleep system, combining premium technologies 
            like QuietModeTM, USB ports and underbed lighting.`,
    pic: ergo,
  },
  {
    title: "Ergo Extend®",
    desc: `TEMPUR-Ergo® Extend is Tempur-Pedic's most elite power base, 
    combining premium technologies like QuietModeTM and PerfectSeatTM to 
    create the ultimate addition to a holistic sleep experience.`,
    pic: ergoExtend,
  },
  {
    title: "Flat Foundation",
    desc: `Ease® has all the features you need in a power base.
            With nearly unlimited ergonomic positions and presets, 
            the Ease is an essential part of a complete and seamless 
            sleep experience.`,
    pic: flatFoundation,
  },
];

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
      <Carousel
        car={subBrand}
        topImg={finessed}
        topP="Design, Comfort, and Quality Craftsmanship in every collection."
      />
      <div>
        <Hr />
      </div>
      <Carousel
        car={car}
        topImg={restOnaSolid}
        topP="Experience Stearns & Foster® indulgent comfort with a foundation or power base crafted to fit your lifestyle."
      />
      <div>
        <Hr />
      </div>
      <Carousel
        car={pillow}
        topP="The only pillows worthy of your Stearns & Foster mattress."
        topImg={topItAll}
      />
    </Section>
  </Layout>
);

export default Malouf;

import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import {
  MainFooter,
  Wrapper,
  Hours,
  HoursSpan,
  HoursPara,
  Contact,
  // GraphImg,
  // GraphLink,
  MapLink,
  // Divy,
  // BBBLink,
  // BottomBBLink,
} from "../styles/footerStyles";
import {
  BottomLinkWrapper,
  BottomLinks,
  BBLink,
  Wrap,
  BottomIconWrapper,
  GraphIcon,
  Bird667Container,
  BirdContainerSmall,
} from "../styles/newFooterStyles";
import GraphCMS from "../images/powered_by_graphcms.svg";
import BBBHor from "../images/ab_seal_horizontal_black_large.jpg";
import BBBWebpHor from "../images/ab_seal_horizontal_black_large.webp";
import Bird from "./bird";
import ClothesForKids from "../images/clothes_for_kids.png";
import AquasoxPartner from "../images/aquasox_partner.png";

const PartnerImg = styled.img`
  box-shadow: ${props => props.theme.BoxShadow};
  transition: all 0.25s ease-in;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  width: 145px;
  height: 75px;
  @media (min-width: 768px) {
    width: 145px;
    height: 90px;
  }
  @media (min-width: 1366px) {
    width: auto;
    height: auto;
  }
`;
const Icons = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;
const Footer = () => (
  <MainFooter>
    <Wrapper>
      <Icons>
        <OutboundLink
          href="https://www.milb.com/everett"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PartnerImg src={AquasoxPartner} />
        </OutboundLink>
        <Bird667Container>
          <Bird />
        </Bird667Container>
        <OutboundLink
          href="https://clothesforkids.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PartnerImg src={ClothesForKids} />
        </OutboundLink>
      </Icons>

      <Wrap>
        <BirdContainerSmall>
          <Bird />
        </BirdContainerSmall>
      </Wrap>
      <Contact>
        <Hours>
          <HoursSpan>Hours</HoursSpan>
          <HoursPara>
            Mon-Fri 10am - 8pm
            <br />
            Saturday 10am - 7pm
            <br />
            Sunday 10am - 6pm
          </HoursPara>
        </Hours>
        <Hours>
          <HoursSpan>Address</HoursSpan>
          <HoursPara>
            <MapLink
              href="https://goo.gl/maps/nqXkkkAGRdu"
              target="_blank"
              rel="noopener noreferrer"
            >
              10121 Evergreen Way
              <br />
              #30
              <br />
              Everett, Washington 98204
            </MapLink>
          </HoursPara>
        </Hours>
      </Contact>

      <BottomLinkWrapper>
        {/* <BottomLinks to="/current-sale">Current Sale</BottomLinks> */}
        <BottomLinks to="/warranty">Warranty Info</BottomLinks>
        <BottomLinks to="/sitemap">Site Map</BottomLinks>
        <BottomLinks to="/policies">Terms/Policies</BottomLinks>
      </BottomLinkWrapper>
    </Wrapper>
    <BottomIconWrapper>
      <OutboundLink
        href="https://graphcms.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GraphIcon src={GraphCMS} alt="GraphCMS Company logo" />
      </OutboundLink>
      <BBLink
        href="https://www.bbb.org/northwest/customer-reviews/mattress/esc-mattress-center-in-everett-wa-1000056497/add/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <picture>
          <source type="image/webp" srcSet={BBBWebpHor} />
          <img
            src={BBBHor}
            alt="Better Business Bureau seal of approvel, click to leave review"
          />
        </picture>
      </BBLink>
    </BottomIconWrapper>
  </MainFooter>
);

export default Footer;

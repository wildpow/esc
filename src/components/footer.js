import React from "react";
import {
  MainFooter,
  Wrapper,
  Hours,
  HoursSpan,
  HoursPara,
  Contact,
  GraphImg,
  GraphLink,
  MapLink,
  Divy,
  BBBLink,
  BottomBBLink,
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
import SocialIcons from "./socialIcons";
import BBB from "../images/accredited_Business_Seal_in_Black.jpg";
import BBBWebp from "../images/accredited_Business_Seal_in_Black.webp";
import BBBHor from "../images/ab_seal_horizontal_black_large.jpg";
import BBBWebpHor from "../images/ab_seal_horizontal_black_large.webp";
import Bird from "./bird";

const Footer = () => (
  <MainFooter>
    <Wrapper>
      <SocialIcons />

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
        <Bird667Container>
          <Bird />
        </Bird667Container>
        {/* <BBBLink
          href="https://www.bbb.org/northwest/customer-reviews/mattress/esc-mattress-center-in-everett-wa-1000056497/add/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source type="image/webp" srcSet={BBBWebp} />
            <img
              src={BBB}
              alt="Better Business Bureau seal of approvel, click to leave review"
            />
          </picture>
        </BBBLink> */}
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
      {/* <BottomBBLink
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
      </BottomBBLink> */}
      <Wrap>
        <BirdContainerSmall>
          <Bird />
        </BirdContainerSmall>
        <BottomLinkWrapper>
          {/* <BottomLinks to="/current-sale">Sale</BottomLinks> */}
          <BottomLinks to="/warranty">Warranty Info</BottomLinks>
          <BottomLinks to="/sitemap">Site Map</BottomLinks>
          <BottomLinks to="/policies">Terms/Policies</BottomLinks>
        </BottomLinkWrapper>
      </Wrap>
    </Wrapper>
    <BottomIconWrapper>
      <a href="https://graphcms.com/" target="_blank" rel="noopener noreferrer">
        <GraphIcon src={GraphCMS} alt="GraphCMS Company logo" />
      </a>
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

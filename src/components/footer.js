import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import { Location } from "@reach/router";
import SocialIcons from "./socialIcons";
import {
  MainFooter,
  Wrapper,
  Hours,
  HoursSpan,
  HoursPara,
  Contact,
  MapLink,
  BottomLinkWrapper,
  BottomLinks,
  Wrap,
  BottomIconWrapper,
  Bird667Container,
  BirdContainerSmall,
} from "../styles/footerStyles";
// import BBBHor from "../images/ab_seal_horizontal_black_large.jpg";
// import BBBWebpHor from "../images/ab_seal_horizontal_black_large.webp";
import Bird from "./bird";
// import ClothesForKids from "../images/clothes_for_kids_blue.png";
// import AquasoxPartner from "../images/aquasox_partner_blue.png";

export const BbbImg = styled.div`
  transition: all 0.25s ease-in;
  width: 147px;
  height: 60px;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  @media (min-width: 768px) {
    width: 160px;
    height: 65px;
  }
`;

const PartnerImg = styled.div`
  border-radius: 5px;
  transition: all 0.25s ease-in;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, 0.6);
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  width: 145px;
  height: 96.656px;
  @media (min-width: 1366px) {
    width: 270px;
    height: 180px;
  }
`;
const Icons = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-evenly;
  @media print {
    display: none;
  }
`;
const Footer = () => (
  <StaticQuery
    query={graphql`
      query footer {
        datoCmsImage(uniqueName: { eq: "footer" }) {
          uniqueName
          images {
            title
            alt
            fluid(maxWidth: 270, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const { images } = data.datoCmsImage;
      let bbb;
      let clothsForKids;
      let aquasox;
      images.map(img => {
        if (img.title === "bbb") bbb = img;
        if (img.title === "aquosox") aquasox = img;
        if (img.title === "clothes_for_kids") clothsForKids = img;
        return null;
      });
      return (
        <MainFooter>
          <Location>
            {({ location }) => {
              if (location.pathname !== "/") return <SocialIcons bottom />;
              return null;
            }}
          </Location>
          <Wrapper>
            <Icons>
              <OutboundLink
                href="https://www.milb.com/everett"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {aquasox !== null ? (
                  <PartnerImg>
                    <Img
                      fluid={aquasox.fluid}
                      style={{
                        borderRadius: "5px",
                      }}
                      alt={aquasox.alt}
                    />
                  </PartnerImg>
                ) : (
                  <PartnerImg
                    as="img"
                    src="/aquasox_partner_blue.png"
                    alt="Proud sponsors of the Everett Aquasox's a local baseball team"
                  />
                )}
              </OutboundLink>
              <Bird667Container>
                <Bird />
              </Bird667Container>
              <OutboundLink
                href="https://clothesforkids.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {clothsForKids !== null ? (
                  <PartnerImg>
                    <Img
                      fluid={clothsForKids.fluid}
                      style={{
                        borderRadius: "5px",
                      }}
                      alt={clothsForKids.alt}
                    />
                  </PartnerImg>
                ) : (
                  <PartnerImg
                    as="img"
                    src="/clothes_for_kids_blue.png"
                    alt="Clothes for kids drop off location logo with ESC Mattress Center's sleeping panda logo"
                  />
                )}
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
              href="https://www.bbb.org/northwest/customer-reviews/mattress/esc-mattress-center-in-everett-wa-1000056497/add/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {bbb !== null ? (
                <BbbImg>
                  <Img fluid={bbb.fluid} alt={bbb.alt} />
                </BbbImg>
              ) : (
                <BbbImg
                  as="img"
                  src="/bbb.jpg"
                  alt="Better Business Bureau seal of approvel, click to leave review"
                />
              )}
            </OutboundLink>
          </BottomIconWrapper>
        </MainFooter>
      );
    }}
  />
);

export default Footer;

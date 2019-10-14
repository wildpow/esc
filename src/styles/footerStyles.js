import styled from "@emotion/styled";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FlexRow, FlexCol } from "./mainStyles";
import {
  DisplayNonePr1nt,
  MainFooterPr1nt,
  FWrapPr1nt,
  FContactPr1nt,
  FHoursPr1nt,
  FHoursParaPr1nt,
  FHoursSpan,
} from "./_pr1nt/main";

export const MainFooter = styled.footer`
  margin-top: 15px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
  }
  @media (min-width: 1366px) {
    width: 100%;
  }
  ${MainFooterPr1nt}
`;

export const Wrapper = styled.div`
  box-shadow: ${props => props.theme.newBoxShadow};
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: white;
  @media (min-width: 1200px) {
    max-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 220px;
    margin-right: 220px;
  }
  @media (min-width: 1366px) {
    max-width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 135px;
    margin-right: 135px;
  }
  ${FWrapPr1nt}
`;

export const Contact = styled(FlexRow)`
  justify-content: space-around;
  justify-content: space-evenly;
  margin-top: 25px;
  margin-bottom: 10px;
  @media (min-width: 1366px) {
    line-height: 2.4em;
  }
  ${FContactPr1nt}
`;

export const Hours = styled(FlexCol)`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 300;
  text-align: center;
  font-size: 0.9rem;
  width: 160px;
  @media (orientation: landscape) {
    width: 200px;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: 250px;
    line-height: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  ${FHoursPr1nt}
`;

export const HoursPara = styled.p`
  margin-top: 4px;
  margin: 0;
  ${FHoursParaPr1nt}
`;

export const HoursSpan = styled.span`
  text-decoration: underline;
  padding-bottom: 5px;
  ${FHoursSpan}
`;

export const MapLink = styled(OutboundLink)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.mainColor2};
    -webkit-text-decoration-color: ${props => props.theme.mainColor2};
    -moz-text-decoration-color: ${props => props.theme.mainColor2};
  }
`;

export const BottomIconWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 375px) {
    justify-content: space-around;
  }
  @media (min-width: 667px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
  ${DisplayNonePr1nt}
`;

export const BBLink = styled(OutboundLink)`
  transition: transform 0.25s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  img {
    max-width: 9.2rem;
    height: 3.5em;
  }
  @media (min-width: 768px) {
    img {
      max-width: 14rem;
      height: 4.1em;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  ${DisplayNonePr1nt}
`;

export const BottomLinkWrapper = styled.div`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  display: flex;
  width: 100%;
  margin-top: 12px;
  font-size: 0.9em;
  justify-content: space-around;
  text-align: cetner;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 1.3em;
    margin-top: 22px;
    margin-bottom: 12px;
  }
  ${DisplayNonePr1nt}
`;

export const BottomLinks = styled(Link)`
  color: ${props => props.theme.mainColor1};
  transition: color 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.mainColor2};
  }
`;

export const Bird667Container = styled.div`
  display: none;
  @media (min-width: 667px) {
    display: block;
  }
`;

export const BirdContainerSmall = styled.div`
  display: block;
  @media (min-width: 667px) {
    display: none;
  }
  ${DisplayNonePr1nt}
`;

import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import { FlexRow, FlexCol } from "./mainStyles";

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
  @media print {
    margin-top: 0;
  }
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
  @media print {
    border-top: 2px solid ${props => props.theme.mainColor1};

    box-shadow: none;
  }
`;
const ImgHover = styled.img`
  color: white;
  transition: transform 0.25s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
`;
export const Social = styled(FlexRow)`
  justify-content: center;
  padding: 7px 7px 4px 7px;
  background-color: ${props => (props.Red ? props.theme.mainColor2 : "white")};
  @media print {
    display: none;
  }
`;

export const FBimage = styled(ImgHover)`
  max-width: 3rem;
  @media (min-width: 360px) {
    max-width: 3.4rem;
  }
`;

export const Timage = styled(ImgHover)`
  max-width: 3.7rem;
  padding-left: 10px;
  @media (min-width: 360px) {
    max-width: 4rem;
  }
`;

export const InstaImg = styled(ImgHover)`
  max-width: 3.2rem;
  margin-left: 10px;
  @media (min-width: 360px) {
    max-width: 3.5rem;
  }
`;

export const MapsImg = styled(ImgHover)`
  max-width: 3.2rem;
  margin-left: 10px;
  @media (min-width: 360px) {
    max-width: 3.5rem;
  }
`;

export const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-radius: 0.2rem;
  transition: transform 0.25s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

export const YelpImg = styled.img`
  color: white;
  width: 3.3rem;
  max-height: 2.9rem;
  @media (min-width: 360px) {
    width: 3.54rem;
    max-height: 3.15rem;
  }
`;

export const Contact = styled(FlexRow)`
  justify-content: space-around;
  justify-content: space-evenly;
  margin-top: 25px;
  margin-bottom: 10px;
  @media (min-width: 1366px) {
    line-height: 2.4em;
  }
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
  @media print {
    font-size: 1rem;
  }
`;

export const HoursPara = styled.p`
  margin-top: 4px;
  margin: 0;
`;

export const HoursSpan = styled.span`
  text-decoration: underline;
  padding-bottom: 5px;
  @media print {
    font-size: 1.5rem;
    font-weight: bold;
  }
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

export const BottomLinkWrapper = styled(FlexCol)`
  font-weight: 300;
  line-height: 1.7rem;
  justify-content: space-around;
  margin-bottom: 15px;
  margin-top: 5px;
  text-align: center;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const BottomLinks = styled(Link)`
  color: ${props => props.theme.mainColor1};
  &:hover {
    color: ${props => props.theme.mainColor2};
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

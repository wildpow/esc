import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";

// Financing page
export const ApplyNow = styled(OutboundLink)`
  font-size: 1rem;
  float: right;
  margin-top: -30px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px 15px 10px 15px;
  background-color: #66ccff;
  font-family: ${props => props.theme.MainFont1};
  color: ${props => props.theme.newColor1};
  border: none;
  cursor: pointer;
  border-radius: 0.17rem;
  transition: transform 0.25s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  @media (min-width: 360px) {
    margin-top: -10px;
  }
  @media (min-width: 768px) {
    padding: 10px 15px 10px 15px;
    margin-top: -10px;
    margin-right: 20px;
    font-size: 1.2rem;
  }
  @media (min-width: 1028px) {
    font-size: 1.3rem;
  }
`;
// main
export const H2 = styled.h2`
  font-family: ${props => props.theme.MainFont1};
  text-shadow: ${props => props.theme.newTextShadow};
  background-color: ${props =>
    props.red ? props.theme.mainColor2 : props.theme.mainColor1};
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.newColor1};
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  letter-spacing: 0.08rem;
  padding: 12px 5px 12px 5px;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.9rem;
    padding-bottom: 15px;
    padding-top: 15px;
    /* font-weight: 500; */
    line-height: 1.4em;
  }
  @media (min-width: 1300px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 2.4rem;
  }
  @media print {
    font-size: 1rem;
  }
`;
// about
export const AboutH2 = styled(H2)`
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.8rem;
  }
`;
// site map
export const BrandLinks = styled(Link)`
  color: ${props => props.theme.newColor1};
  &:hover {
    color: ${props => props.theme.newColor2};
  }
`;
export const SiteLinks = styled(Link)`
  color: #1565c0;
  font-family: ${props => props.theme.MainFont1};
  &:hover {
    color: #eb1c24;
  }
`;

import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { OutboundLink as GoogleAnalytics } from "gatsby-plugin-google-analytics";
import { DisplayNonePrint } from "./_pr1nt/main";

const SharedLinkStyles = css`
  color: ${props => props.theme.newColor1};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.25s ease-in;
  overflow: hidden;
  white-space: nowrap;
  :hover {
    color: ${props => props.theme.newColor2};
    transform: scale(1.04);
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.newColor1};
  }
`;
export const OutBoundLink = styled(GoogleAnalytics)`
  ${SharedLinkStyles}
`;

export const InboundLink = styled(Link)`
  ${SharedLinkStyles}
`;

export const Top = styled.div`
  width: ${props => (props.menuToggle ? "100vw" : "initial")};
  font-family: ${props => props.theme.MainFont1};
  font-weight: 300;
  background-color: ${props => props.theme.mainColor2};
  box-shadow: ${props => props.theme.newBoxShadow};
  text-shadow: ${props => props.theme.newTextShadow};
  color: ${props => props.theme.newColor1};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 6px 10px 6px;
  font-size: 0.9rem;
  letter-spacing: 0.056rem;
  position: relative;
  z-index: 26;
  @media (min-width: 411px) {
    font-size: 1rem;
  }
  @media (min-width: 568px) {
    font-size: 1.1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 10px 12px;
    letter-spacing: 0.15rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    letter-spacing: 0.19rem;
  }
  ${DisplayNonePrint}
`;

export const Wrapper = styled.div`
  margin-top: 0;
  margin-right: ${props => (props.Right ? "5px" : "0px")};
  margin-left: ${props => (props.Left ? "5px" : "0px")};
  margin-bottom: 0;
  padding: 0;
  align-self: center;
  text-align: center;
  display: flex;

  @media (min-width: 375px) {
    margin-right: ${props => (props.Right ? "1px" : "0px")};
    margin-left: ${props => (props.Left ? "1px" : "0px")};
  }
  @media (orientation: landscape) {
    margin-right: ${props => (props.Right ? "20px" : "0px")};
    margin-left: ${props => (props.Left ? "20px" : "0px")};
  }
  @media (min-width: 768px) {
    margin-right: ${props => (props.Right ? "10px" : "0px")};
    margin-left: ${props => (props.Left ? "10px" : "0px")};
  }
`;

export const BR = styled.br`
  @media (min-width: 415px) {
    display: none;
  }
`;

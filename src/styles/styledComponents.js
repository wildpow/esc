import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";

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

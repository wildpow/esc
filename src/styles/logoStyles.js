import styled from "styled-components";
import { Link } from "gatsby";
import { FlexCol } from "./mainStyles";
import { ImagePrint, H1Print, ReadersPrint } from "./_pr1nt/main";

export const Wrapper = styled(FlexCol)`
  margin-top: -15px;
  @media (min-width: 768px) {
    margin-top: -22px;
  }
  @media (min-width: 1022px) {
    margin-top: -85px;
  }
  @media (min-width: 1300px) {
    margin-top: -90px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  margin: auto;
`;

export const Image = styled.img`
  color: white;
  transition: transform 0.25s ease-in;
  align-self: center;
  height: 6.5em;
  z-index: 3;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  @media (min-width: 500px) {
    height: 8em;
  }
  @media (min-width: 768px) {
    height: 11em;
  }
  ${ImagePrint}
`;

export const H1 = styled.h1`
  font-family: ${props => props.theme.MainFont1};
  color: ${props => props.theme.mainColor2};
  text-shadow: ${props => props.theme.newTextShadow};
  background-color: white;
  z-index: 1;
  align-self: center;
  margin-bottom: 0;
  font-weight: 700;
  border: ${props => props.theme.Border};
  box-shadow: ${props => props.theme.newBoxShadow};
  border-top-left-radius: 0.11rem;
  border-top-right-radius: 0.11rem;
  padding: 5px 15px 5px 15px;
  font-size: 1.7rem;
  margin-top: -26px;
  @media (min-width: 360px) {
    font-size: 1.8rem;
  }
  @media (min-width: 500px) {
    font-size: 2.5rem;
    margin-top: -32px;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
    margin-top: -44px;
    letter-spacing: 0.05rem;
  }
  ${H1Print}
`;
export const Span = styled.span`
  color: ${props => props.theme.mainColor1};
  /* font-style: italic; */
  font-family: ${props => props.theme.MainFont1};
  font-weight: 700;
  font-style: italic;
`;

export const ReadersChoice = styled.img`
  max-width: 75px;
  float: left;
  position: absolute;
  left: 9px;
  top: 39px;
  z-index: 51;
  opacity: ${props => (props.menuToggle ? 0.2 : 1)};
  transition: transform 0.25s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  @media (min-width: 568px) {
    left: 17px;
    top: 34px;
    max-width: 88px;
  }
  @media (min-width: 768px) {
    max-width: 138px;
    top: 38px;
    left: 21px;
  }
  @media (min-width: 1024px) {
    float: right;
    left: auto;
    max-width: 140px;
    right: 27px;
    top: 118px;
  }
  @media (min-width: 1200px) {
    right: 60px;
  }
  @media (min-width: 1300px) {
    right: 125px;
    top: 124px;
  }
  @media (min-width: 1400px) {
    right: 140px;
  }
  @media (min-width: 1500px) {
    right: 190px;
  }
  @media (min-width: 1600px) {
    right: 256px;
  }
  @media (min-width: 1800px) {
    right: 300px;
  }
  ${ReadersPrint}
`;

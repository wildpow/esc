import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FlexCol, FadeIn } from "./mainStyles";

export const Main = styled(FlexCol)`
  /* margin-top: 15px; */
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  text-align: center;
  @media (min-width: 1022px) {
    flex-direction: row;
    justify-content: center;
    margin-top: ${props => (props.MarginTop ? "15px" : "0")};
  }
`;

export const TempurImg = styled.img`
  color: white;
  width: 19rem;
  align-self: center;
  padding-top: 22px;
  @media (min-width: 360px) {
    width: 22rem;
  }
  @media (min-width: 768px) {
    max-width: 25rem;
  }
  @media (min-width: 1022px) {
    max-width: 20rem;
    margin: auto;
    padding-top: 0px;
  }
`;

export const StearnsImg = styled.img`
  color: white;
  align-self: center;
  width: 14rem;
  padding-top: 30px;
  padding-bottom: 15px;
  @media (min-width: 360px) {
    width: 17rem;
  }
  @media (min-width: 1022px) {
    max-width: 15rem;
    padding-top: 50px;
  }
`;

export const SealyImg = styled.img`
  color: white;
  align-self: center;
  width: 9.1rem;
  height: 10rem;
  padding-top: 20px;
  padding-bottom: 15px;
  @media (min-width: 360px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 1022px) {
    width: 10rem;
    height: 10rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const MainText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  @media (min-width: 360px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const Footer = styled.p`
  font-family: ${props => props.theme.MainFont1};
  background-color: ${props => props.theme.mainColor1};
  margin-bottom: 0;

  padding: 10px 0 10px 0;
  color: ${props => props.theme.newColor1};
  /* border-top: 2px solid black; */
  letter-spacing: 0.12rem;
  font-weight: 400;
  text-shadow: ${props => props.theme.newTextShadow};
  @media (min-width: 1300px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
export const StyledLink = styled(Link)`
  font-family: ${props => props.theme.MainFont3};
  font-weight: 300;
  text-decoration: none;
  flex-basis: 100%;
  color: ${props => props.theme.newColor2};
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  /* border: ${props => props.theme.Border}; */
  box-shadow: ${props => props.theme.hoverBoxBefore};
  transition: ${props => props.theme.hoverTransition};
  /* box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s; */
  &:hover {
    transform: ${props => props.theme.hoverTransform};
    box-shadow: ${props => props.theme.hoverBoxAfter};
    /* box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16);
    transform: translateY(-4px); */
  }
  @media (min-width: 1022px) {
    margin: 0 auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
`;

export const BrandWrapper = styled(FlexCol)`
  justify-content: space-around;
  @media (min-width: 1022px) {
    justify-content: space-between;
  }
`;

export const StearnsWrapper = styled(StyledLink)`
  @media (min-width: 1022px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

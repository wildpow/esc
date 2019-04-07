import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Link } from "gatsby";
import { FadeIn, FlexCol, FlexRow } from "./mainStyles";

export const AdjMarkdown = styled(ReactMarkdown)`
  font-family: ${props => props.theme.MainFont1};
  padding: 30px;
  display: none;
  & p {
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 10px;
    font-size: 1rem;
  }
  & li {
    padding-bottom: 2px;
  }
  @media (min-width: 568px) {
    font-family: ${props => props.theme.MainFont3};
    display: block;
    padding: 30px;

    & p {
      border-bottom: 4px solid ${props => props.theme.mainColor2};
      font-size: 1.6rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size: 1rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 0.9rem;
    }
  }
  @media (min-width: 992px) {
    padding: 30px;

    & p {
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1300px) {
    & p {
      font-weight: 700;
      font-size: 2rem;
    }
  }
`;

export const Main = styled(FlexCol)`
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 1022px) {
    margin-top: ${props => (props.MarginTop ? "15px" : "0")};
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const StyledLink = styled(Link)`
  /* box-shadow: ${props => props.theme.newBoxShadow}; */
  /* border: ${props => props.theme.Border}; */
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;
  color: black;
  margin-bottom: 20px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* transition: all 0.15s ease-in-out; */
  background-color: white;
  transition: ${props => props.theme.hoverTransition};
  box-shadow: ${props => props.theme.hoverBoxBefore};
  &:hover {
    transform: ${props => props.theme.hoverTransform};
  box-shadow: ${props => props.theme.hoverBoxAfter};
    /* z-index: 999;
    transform: scale3d(1.02, 1.02, 1); */
  }
`;

export const H3 = styled.h3`
  text-shadow: ${props => props.theme.newTextShadow};
  font-family: ${props => props.theme.MainFont1};
  background-color: ${props => props.theme.mainColor1};
  color: ${props => props.theme.newColor1};
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  @media (min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    text-align: left;
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 1024px) {
    letter-spacing: 0.19rem;
    font-size: 1.3rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.8rem;
  }
`;

export const InfoWrapper = styled(FlexRow)`
  justify-content: space-around;
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const Img = styled.img`
  color: white;
  width: 240px;
  height: 240px;
  align-self: center;
  @media (min-width: 991px) {
    width: 350px;
    height: 350px;
    align-self: center;
    margin-left: 20px;
  }
`;

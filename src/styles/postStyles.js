import styled from "styled-components";
import Markdown from "react-markdown";
import { FadeIn, FlexCol } from "./mainStyles";

export const Main = styled(FlexCol)`
background-color: white;
  /* border: ${props => props.theme.Border}; */
  box-shadow: ${props => props.theme.newBoxShadow};
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  padding-bottom: 20px;
  @media (min-width: 1200px) {
    margin-left: 220px;
    margin-right: 220px;
  }
`;

export const BottomImg = styled.img`
  margin: auto;
  margin-top: 20px;
  max-width: 100%;
  @media (min-width: 1022px) {
    width: 100%;
    height: 100%;
  }
`;

export const Marker = styled(Markdown)`
  & ol {
    background-color: ${props => props.theme.mainColor1};
    list-style-position: inside;
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  & li {
    font-family: ${props => props.theme.MainFont2};
    margin: auto;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & p {
    font-family: ${props => props.theme.MainFont3};
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    text-indent: 30px;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & img {
    margin: auto;
    margin-top: 20px;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    & p {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
    & li {
      text-align: center;
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    & ol {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    & li {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.6rem;
      line-height: 1.85rem;
      padding-bottom: 10px;
    }
    & p {
      margin-bottom: 0;
      margin-top: 10px;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.6rem;
      line-height: 2.1rem;
      padding-bottom: 20px;
    }
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

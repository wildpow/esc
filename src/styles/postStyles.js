import styled from "styled-components";
import Markdown from "react-markdown";
import { FadeIn, FlexCol } from "./mainStyles";

export const Main = styled(FlexCol)`
  background-color: white;
  box-shadow: ${props => props.theme.newBoxShadow};
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  padding-bottom: 20px;
`;
// w: 800 h: 325
export const BottomImg = styled.img`
  margin: auto;
  margin-top: 20px;
  max-width: 100%;
  @media (min-width: 1022px) {
    height: 100%;
    max-height: 325px;
    max-width: 800px;
  }
`;

export const Marker = styled(Markdown)`
  h2 {
    font-family: ${props => props.theme.MainFont1};
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 10px 20px;
    background-color: ${props => props.theme.mainColor1};
    color: white;
  }
  & ol {
    background-color: ${props => props.theme.mainColor1};
    list-style-position: inside;
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  & li {
    font-family: ${props => props.theme.MainFont2};
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & p {
    font-weight: 300;
    font-family: ${props => props.theme.MainFont3};
    padding-left: 7px;
    padding-right: 7px;
    line-height: 1.5rem;
    font-size: 1rem;
    text-indent: 30px;
    margin-top: 7px;
    padding-bottom: 0px;
  }
  & img {
    margin: auto;
    margin-top: 10px;
    max-width: 100%;
    margin-bottom: 10px;
    display: block;
  }
  @media (min-width: 768px) {
    & p {
      margin-bottom: 0;
      padding-right: 10px;
      padding-left: 10px;
      font-size: 1.25rem;
      line-height: 1.7rem;
    }
    & li {
      margin-bottom: 0;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    & ol {
      /* padding-top: 30px;
      padding-bottom: 30px; */
    }
    & li {
      margin-bottom: 0;
      /* padding-right: 60px;
      padding-left: 60px; */
      font-size: 1.6rem;
      line-height: 1.85rem;
      padding-bottom: 10px;
    }
    & p {
      margin-bottom: 0;
      /* margin-top: 10px; */
      padding-right: 15px;
      padding-left: 15px;
      font-size: 1.4rem;
      line-height: 2rem;
      padding-bottom: 20px;
    }
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

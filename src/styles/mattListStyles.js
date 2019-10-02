import styled from "styled-components";
import { FadeIn, H2, FlexCol, FlexRow } from "./mainStyles";

export const MainWrapper = styled(FlexCol)`
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  justify-content: space-between;
  /* border: 0px solid green; */
`;

export const MainTitle = styled.header`
  display: flex;
  padding: 0px 10px 0px 10px;
  background-color: ${props => props.theme.newColor1};
`;

export const Img = styled.img`
  /* color: white; */
  background: ${props => props.theme.newColor1};
  align-self: center;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  max-height: 10rem;
  max-width: 10rem;
  @media (min-width: 768px) {
    max-height: 15rem;
    max-width: 15rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    max-height: 20rem;
    max-width: 20rem;
  }
`;

export const SealyImgPlace = styled(Img)`
  max-height: 4rem;
  max-width: 4rem;
  @media (min-width: 768px) {
    max-height: 6rem;
    max-width: 6rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    max-height: 10rem;
    max-width: 10rem;
  }
`;

export const StearnsImgPlaceHolder = styled(Img)`
  padding: 10px;
`;

export const Wrapper = styled(FlexRow)`
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  margin-bottom: 10px;
`;

export const Wrapper2 = styled(FlexCol)`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
  box-shadow: ${props => props.theme.BoxShadow};
  align-self: center;
  @media (min-width: 360px) {
    margin-right: 3px;
    margin-left: 3px;
    margin-bottom: 5px;
  }
  @media (min-width: 375px) {
    margin-right: 12px;
    margin-left: 12px;
  }
  @media (min-width: 411px) {
    margin-right: 15px;
    margin-left: 15px;
  }
  @media (min-width: 414px) {
    margin-right: 12px;
    margin-left: 12px;
  }
  @media (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  @media (min-width: 1300px) {
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (min-width: 1366px) {
    margin-right: 50px;
    margin-left: 50px;
  }
`;

export const Headline = styled(H2)`
  line-height: 1.3rem;
  font-size: 1rem;
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  @media (min-width: 1300px) {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1.8rem;
  }
`;

export const P = styled.p`
  font-family: ${props => props.theme.MainFont3};
  text-align: justify;
  text-justify: inter-character !important;
  margin-bottom: 0;
  margin-top: 0;
  padding: 7px 7px 7px 7px;
  font-size: 0.9rem;
  line-height: 1.3rem;
  @media (min-width: 640px) {
    padding: 20px 15px 20px 15px;
    line-height: 1.4rem;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 10px 15px 10px 15px;
  }
  @media (min-width: 1024px) {
    padding: 15px 25px 15px 25px;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

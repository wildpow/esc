import styled from "styled-components";
import { FadeIn, FlexCol } from "./mainStyles";

export const MainArticle = styled.article`
  /* border: ${props => props.theme.Border}; */
  box-shadow: ${props => props.theme.BoxShadow};
  background-color: white;
  color: ${props => props.theme.newColor2};
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  margin-top: 15px;
  padding-bottom: 1px;
  @media (min-width: 1024px) {
    padding-bottom: 15px;
  }
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const WarranyName = styled.h4`
  font-family: ${props => props.theme.MainFont1};
  border-bottom: 4px solid ${props => props.theme.mainColor2};
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: 0.09rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 0.12rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;

export const WarranyNumber = styled.a`
  color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont2};
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.12rem;
  &:hover {
    color: ${props => props.theme.mainColor2};
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }
`;

export const WarrantyTopper = styled.h3`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  color: ${props => props.theme.newColor1};
  text-shadow: ${props => props.theme.newTextShadow};
  background-color: ${props => props.theme.mainColor1};
  padding: 20px;
  line-height: 1.2rem;
  letter-spacing: 0.1rem;
  text-align: center;
  color: white;
  @media (min-width: 768px) {
    line-height: 1.8rem;
    letter-spacing: 0.18rem;
    font-size: 1.3rem;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (min-width: 1024px) {
    padding-left: 140px;
    padding-right: 140px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.22rem;
  }
`;

export const WarrantyWrapper = styled(FlexCol)`
  justify-content: center;
`;

export const P = styled.p`
  font-family: ${props => props.theme.MainFont3};
  font-weight: 300;
  text-indent: 25px;
  line-height: 1.35rem;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.9rem;
    padding-right: 17px;
    padding-left: 17px;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 2.1rem;
    margin-bottom: 10px;
    /* padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 15px;
    padding-top: 15px; */
    padding: 5px 25px;
  }
  @media (min-width: 1300px) {
    font-size: 1.4rem;
    padding: 0px 25px;
  }
`;
// where
export const Heading = styled.h3`
  font-family: ${props => props.theme.MainFont1};
  border-bottom: 4px solid ${props => props.theme.mainColor2};
  padding-bottom: 5px;
  padding-left: 10px;
  margin-bottom: 8px;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-top: 10px;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
`;

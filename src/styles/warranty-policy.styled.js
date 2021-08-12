import styled from "@emotion/styled";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import {
  FadeInAnimation,
  boxShadow,
  colors,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "./theme.styled";

export const MainArticle = styled.article`
  box-shadow: ${boxShadow.md};
  background-color: white;
  color: ${colors.gray["800"]};
  ${FadeInAnimation}
  margin-top: 15px;
  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1024px) {
    padding-bottom: 15px;
  }
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const WarranyName = styled.h4`
  font-family: ${fonts.sans};
  border-bottom: 4px solid ${colors.brandRed};
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

export const WarranyNumber = styled(OutboundLink)`
  color: ${colors.brandBlue};
  font-family: ${fonts.sans};
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.12rem;
  &:hover {
    color: ${colors.brandRed};
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }
`;

export const WarrantyTopper = styled.h3`
  font-family: ${fonts.sans};
  font-weight: 400;
  color: ${colors.gray["100"]};
  background-color: ${colors.brandBlue};
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

export const WarrantyWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-family: ${fonts.serif};
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
    padding: 5px 25px;
  }
  @media (min-width: 1300px) {
    font-size: 1.4rem;
    padding: 0px 25px;
  }
`;
// where
export const Heading = styled.h3`
  font-family: ${fonts.sans};
  border-bottom: 4px solid ${colors.brandRed};
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

// New Styles

export const InfoPara = styled.p`
  margin: 0;
  padding-bottom: ${spacing[2]};
  font-family: ${fonts.serif};
  font-size: ${fontSize.base};
  line-height: 1.5rem /* 24px */;
  font-weight: 400;
  color: ${colors.gray[700]};
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize.xl};
    line-height: 1.75rem /* 28px */;
    padding-bottom: ${spacing[4]};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${fontSize["2xl"]};
    line-height: 2rem /* 32px */;
    padding-bottom: ${spacing[6]};
  }
`;

export const Title = styled.h2`
  align-self: center;
  margin: 0;
  font-family: ${fonts.sans};
  font-size: ${fontSize["2xl"]};
  border-bottom: 4px solid ${colors.blue[800]};
  color: ${colors.gray[800]};
  /* margin-bottom: ${spacing[7]}; */
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize["3xl"]};
    line-height: 2.25rem /* 36px */;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${fontSize["5xl"]};
    line-height: 1;
  }
`;

export const SecondTitle = styled.h3`
  margin: 0;
  margin-bottom: ${spacing[3]};
  margin-top: ${spacing[10]};
  font-family: ${fonts.sans};
  font-size: ${fontSize.xl};
  line-height: 1.75rem;
  font-weight: 500;
  border-bottom: 4px solid ${colors.red[800]};
  color: ${colors.gray[700]};
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize["2xl"]};
  }
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${fontSize["3xl"]};
    line-height: 2.25rem /* 36px */;
  }
`;

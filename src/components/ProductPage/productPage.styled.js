import styled from "@emotion/styled";
import H2 from "../../old/oldHeading.styled";
import {
  boxShadow,
  colors,
  FadeInAnimation,
  fonts,
} from "../../styles/theme.styled";
import {
  DescriptionPrint,
  MainTitlePrint,
  WrapperSingleMattPrint,
} from "../../styles/print.styled";

export const Description = styled.p`
  font-weight: 400;
  color: ${colors.gray["800"]};
  font-family: ${fonts.serif};
  align-self: center;
  border-radius: 0.11rem;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 0.8rem;
  padding: 5px 14px 10px 14px;
  line-height: 1.5rem;
  margin: 0;
  @media (min-width: 360px) {
    font-size: 0.9rem;
  }
  @media (min-width: 550px) {
    font-size: 1rem;
    padding-top: 15px;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    /* padding-right: 40px;
    padding-left: 40px; */
    line-height: 1.7rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.35rem;
    /* padding-right: 60px;
    padding-left: 60px; */
    line-height: 2.3rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.4rem;
    padding-top: 10px;
    /* padding-right: 80px;
    padding-left: 80px; */
    line-height: 2.35rem;
    padding-bottom: 10px;
  }
  ${DescriptionPrint}
`;

export const Main = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  padding-top: 5px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
    align-items: initial;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media print {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const MainTitle = styled(H2)`
  font-weight: 700;
  background-color: ${({ red }) => (red ? colors.brandRed : colors.brandBlue)};
  @media (min-width: 768px) {
    text-align: left;
    padding-left: 40px;
  }
  @media (min-width: 1022px) {
    padding-left: 60px;
  }
  @media (min-width: 1300px) {
    padding-left: 80px;
  }
  ${MainTitlePrint}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${boxShadow.md};
  background-color: white;
  justify-content: center;
  border-radius: 0.11rem;
  ${FadeInAnimation}
  ${WrapperSingleMattPrint}
`;

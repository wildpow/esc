import styled from "styled-components";
import { colors, fonts } from "../../styles/theme.styled";

export const Headline = styled.h2`
  color: ${colors.gray["100"]};
  font-family: ${fonts.sans};
  text-align: center;
  font-weight: 400;
  background-color: ${({ red }) => (red ? colors.brandRed : colors.brandBlue)};
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  @media (min-width: 412px) {
    letter-spacing: 0.25rem;
    font-size: 1.4rem;
  }
  @media (min-width: 768px) {
    letter-spacing: 0.13rem;
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
    letter-spacing: 0.22rem;
  }
`;

export const P = styled.p`
  font-family: ${fonts.serif};
  text-align: justify;
  text-justify: inter-character !important;
  margin-bottom: 0;
  font-weight: 300;
  margin-top: 0;
  background-color: white;
  padding: 5px 15px 5px 15px;
  font-size: 1rem;
  line-height: 1.55rem;
  color: ${colors.gray["800"]};

  @media (min-width: 640px) {
    padding: 5px 15px 5px 15px;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 5px 15px 5px 15px;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

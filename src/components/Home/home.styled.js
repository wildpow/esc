import { styled } from "linaria/react";
import { colors, fonts, boxShadow } from "../../styles/theme.styled";

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

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: ${boxShadow.md};
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
  @media (min-width: 925px) {
    width: 49%;
  }

  @media (min-width: 1300px) {
    margin-top: 15px;
  }
`;

export const Container = styled.div`
  border-top: 2px solid #f8f8ff;
  background-color: white;
`;

export const FrontRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 925px) {
    flex-direction: row;
  }
`;

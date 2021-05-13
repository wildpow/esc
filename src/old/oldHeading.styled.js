import styled from "styled-components";
import { fonts, colors } from "../styles/theme.styled";

const OldH2 = styled.h2`
  font-family: ${fonts.sans};
  background-color: ${({ red }) => (red ? colors.brandRed : colors.brandBlue)};
  font-weight: 400;
  text-align: center;
  color: ${colors.gray["100"]};
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  letter-spacing: 0.08rem;
  padding: 12px 5px 12px 5px;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.9rem;
    padding-bottom: 15px;
    padding-top: 15px;
    /* font-weight: 500; */
    line-height: 1.4em;
  }
  @media (min-width: 1300px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 2.4rem;
  }
  @media print {
    font-size: 1rem;
  }
`;

export default OldH2;

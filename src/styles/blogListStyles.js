import styled from "styled-components";
import { FadeIn, FlexCol, FlexRow } from "./mainStyles";

export const Main = styled(FlexCol)`
  font-family: ${props => props.theme.MainFont2};
  border: ${props => props.theme.Border};
  box-shadow: ${props => props.theme.BoxShadow};
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  margin-top: 15px;
  border-radius: 0.11rem;
  transition: all 0.2s ease-in;
  text-align: center;
  justify-content: center;
  @media (min-width: 1200px) {
    margin-right: 220px;
    margin-left: 220px;
  }
`;

export const Section = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  @media (min-width: 630px) {
    margin-left: 120px;
    margin-right: 120px;
  }
  @media (min-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (min-width: 1300px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const Homebutton = styled.button`
  background: ${props => props.theme.mainColor1};
  width: 100%;
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 24px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
  &:hover {
    z-index: 999;
    transform: scale3d(1.02, 1.02, 1);
  }
`;
export const ShowMoreWrapper = styled(FlexRow)`
  justify-content: center;
`;

// export const HeaderText = styled.h2`
//   font-size: 1.2rem;
//   letter-spacing: .12rem;
//   padding-right: 5px;
//   padding-left: 5px;
//   @media(min-width: 768px) { font-size: 1.4rem; line-height: 2rem; }
//   @media(min-width: 1024px) { font-size: 1.5rem; }
//   @media(min-width: 1300px) { font-size: 1.8rem; letter-spacing: .1rem; }
// `;

// export const Header = styled.header`
//   font-family: ${MainFont1};
//   background-color: ${Blue};
//   text-shadow: ${TextShadow};
//   color: white;
//   text-align: center;
//   margin-bottom: 20px;
// `;

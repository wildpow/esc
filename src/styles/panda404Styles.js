import styled from "styled-components";
import { FlexCol, FadeIn } from "./mainStyles";

export const Main = styled(FlexCol)`
  font-family: ${props => props.theme.MainFont2};
  border: ${props => props.theme.Border};
  box-shadow: ${props => props.theme.BoxShadow};
  animation-name: ${FadeIn};
  ${props => props.theme.Animation}
  border-radius: .11rem;
  /* transition: all 0.2s ease-in; */
  text-align: center;
  justify-content: center;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const Img = styled.img`
  color: white;
  margin: auto;
  max-width: 20rem;
  /* transition: all 0.2s ease-in; */
  @media (min-width: 800px) {
    max-width: 40rem;
  }
`;

export const Header = styled.header`
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont1};
  text-shadow: ${props => props.theme.TextShadow};
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  color: white;
`;

// export const Title = styled.h2`
//   background-color: ${Blue};
//   font-family: ${MainFont1};
//   text-shadow: ${TextShadow};
//   color: white;
//   margin: 0;
//   font-size: 1rem;
//   letter-spacing: .22rem;
//   padding: 12px 8px 12px 8px;
//   line-height: 1.3rem;
//   @media(min-width: 768px) {
//     font-size: 1.3rem;
//   }
//   @media(min-width: 1024px) {
//     font-size: 1.5rem;
//     letter-spacing: .25rem;
//     padding: 25px 30px 25px 30px;
//   }
// `;

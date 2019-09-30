// import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
// import Markdown from "react-markdown";
import { FlexCol, FlexRow, FadeIn, H2 } from "./mainStyles";
import { MainTitlePr1nt, WrapperSingleMattPr1nt } from "./_pr1nt/main";

export const Article = styled.article`
  display: flex;
  background: rgba(224, 224, 224, 0.42);
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 0px;
`;

export const Description = styled.p`
  font-weight: 400;
  color: black;
  font-family: ${props => props.theme.MainFont3};
  align-self: center;
  border-radius: 0.11rem;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 0.8rem;
  padding: 5px 14px 10px 14px;
  line-height: 1.5rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding-right: 40px;
    padding-left: 40px;
    line-height: 1.7rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.35rem;
    padding-right: 60px;
    padding-left: 60px;
    line-height: 2.3rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.4rem;
    padding-top: 10px;
    padding-right: 80px;
    padding-left: 80px;
    line-height: 2.35rem;
    padding-bottom: 10px;
  }
  @media print {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`;

export const Main = styled(FlexRow)`
  margin-top: 2px;
  background-color: white;

  justify-content: space-around;
  @media (min-width: 360px) {
    margin-top: 4px;
  }
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    justify-content: space-evenly;
    margin-left: 5px;
    margin-bottom: 10px;
  }
`;

export const MainTitle = styled(H2)`
  font-weight: 700;
  background-color: ${props =>
    props.red ? props.theme.mainColor2 : props.theme.mainColor1};
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
  ${MainTitlePr1nt}
`;

export const Profile = styled.p`
  font-family: ${props => props.theme.MainFont2};
  margin-top: 0;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.4rem;
  }
`;

export const Warranty = styled.p`
  font-family: ${props => props.theme.MainFont1};
  text-align: center;
  font-weight: 300;
  font-size: 0.5rem;
  padding-right: 5px;
  padding-left: 5px;
  @media (min-width: 768px) {
    font-size: 1rem;
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

export const Wrapper = styled(FlexCol)`
  box-shadow: ${props => props.theme.newBoxShadow};
  animation-name: ${FadeIn};
  background-color: white;
  ${props => props.theme.Animation}
  justify-content: center;
  border-radius: 0.11rem;
  @media (min-width: 1300px) {
    margin-right: 85px;
    margin-left: 85px;
  }
  ${WrapperSingleMattPr1nt}
`;

// /////////////
// export const PriceList = styled.ul`
//   font-size: 0.3rem;
// `;

export const MainInfo = styled(FlexCol)`
  justify-content: space-around;
`;

// export const PriceWrapper = styled(FlexCol)`
//   justify-content: center;
//   flex-wrap: wrap;
//   @media (min-width: 1028px) {
//     flex-direction: row;
//     justify-content: center;
//   }
// `;

// export const MainImg = styled.img`
//   max-width: 7rem;
//   @media (min-width: 768px) {
//     max-width: 14rem;
//   }
//   @media (min-width: 1024px) {
//     max-width: 17rem;
//   }
// `;

// export const Price = styled(FlexCol)`
//   margin-left: 10px;
//   justify-content: center;
//   justify-items: center;
//   align-content: center;
// `;
// export const PriceTitle = styled.p`
//   font-family: ${props => props.theme.MainFont1};
//   padding-top: 0px;
//   padding-bottom: 3px;
//   margin-top: 0;
//   margin-bottom: 0px;
//   font-size: 0.8rem;
//   @media (min-width: 768px) {
//     font-size: 1rem;
//     padding-top: 0px;
//     padding-bottom: 7px;
//   }
//   @media (min-width: 1022px) {
//     font-size: 1.7rem;
//     padding-left: 20px;
//     margin-bottom: 5px;
//     margin-top: 5px;
//   }
// `;

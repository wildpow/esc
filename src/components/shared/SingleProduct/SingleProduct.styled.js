import styled from "styled-components";
import { FadeIn, H2 } from "../../../styles/mainStyles";
import {
  MainTitlePr1nt,
  WrapperSingleMattPr1nt,
  ListPr1nt,
  // DisplayNonePr1nt,
  DescriptionPr1nt,
} from "../../../styles/_pr1nt/main";
import { colors } from "../../../utils/styles";

export const Article = styled.article`
  display: flex;
  background: ${colors.gray["200"]};
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 0px;
`;

export const Description = styled.p`
  font-weight: 400;
  color: ${colors.gray["800"]};
  font-family: ${(props) => props.theme.MainFont3};
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
  ${DescriptionPr1nt}
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${(props) => props.theme.MainFont3};
  font-weight: 400;
  margin-left: 5px;
  color: ${(props) => props.theme.newColor2};
  padding: 0px;
  h3 {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0;
    color: ${colors.blue["900"]};
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
    padding-bottom: 2px;
    padding-left: 20px;
  }
  ul {
    list-style: square;
    margin-top: 2px;
    font-size: 0.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  ul li {
    padding-bottom: 2px;
    color: ${colors.gray["700"]};
  }

  @media (min-width: 360px) {
    ul {
      margin-top: 10px;
      font-size: 1rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 550px) {
    padding: 0px 0px 0px 10px;
    h3 {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${(props) => props.theme.mainColor2};
      padding-bottom: 2px;
      padding-left: 20px;
    }
    ul {
      list-style: square;
      margin-top: 10px;
    }
    ul li {
      padding-bottom: 4px;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0px 30px 10px 30px;

    h3 {
      padding-left: 20px;
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1300px) {
    h3 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 2.1rem;
    }
  }
  ${ListPr1nt}
`;

export const Construction = styled(List)`
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
    }
    ul {
      font-size: 1.6rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 2px; */
  background-color: white;
  padding-bottom: 25px;
  padding-top: 5px;
  justify-content: space-around;
  @media (min-width: 360px) {
    /* margin-top: 4px; */
    /* margin-bottom: 12px; */
  }
  @media (min-width: 768px) {
    /* margin-bottom: 10px; */
    flex-direction: row;
    align-items: initial;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media (min-width: 1024px) {
    justify-content: space-evenly;
    /* margin-left: 5px; */
    /* margin-bottom: 10px; */
  }
  @media print {
    flex-direction: row;
    margin-top: 0;
  }
`;

// export const Info = styled.li`
//   padding-top: 10px;
//   list-style: none;
//   a {
//     display: none;
//     font-size: 0.9rem;
//     font-family: ${(props) => props.theme.MainFont1};
//     font-weight: 700;
//     letter-spacing: 0.05rem;
//     color: ${colors.red["500"]};
//     &:hover {
//       color: ${(props) => props.theme.mainColor1};
//     }
//     @media (orientation: landscape) {
//       display: block;
//     }
//     @media (min-width: 568px) {
//       font-size: 1rem;
//     }
//     @media (min-width: 768px) {
//       display: block;
//       font-size: 1.2rem;
//     }
//     @media (min-width: 1024px) {
//       font-size: 1.6rem;
//     }
//     ${DisplayNonePr1nt}
//   }
// `;

export const MainTitle = styled(H2)`
  font-weight: 700;
  background-color: ${(props) =>
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
  color: ${colors.gray["700"]};

  font-family: ${(props) => props.theme.MainFont1};
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
  font-family: ${(props) => props.theme.MainFont1};
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.newBoxShadow};
  animation-name: ${FadeIn};
  background-color: white;
  ${(props) => props.theme.Animation}
  justify-content: center;
  border-radius: 0.11rem;
  /* @media (min-width: 1300px) {
    margin-right: 85px;
    margin-left: 85px;
  } */
  ${WrapperSingleMattPr1nt}
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  padding: 18px 7px 0px 7px;
  @media (min-width: 768px) {
    /* padding-left: 10px; */
    padding: 18px 0px 0px 10px;
  }
  @media (min-width: 1024px) {
    padding-top: 14px;
    padding-left: 20px;
  }
`;

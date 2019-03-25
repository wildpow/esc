import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import Markdown from "react-markdown";
import { FlexCol, FlexRow, FadeIn, H2 } from "./mainStyles";

export const PriceList = styled.ul`
  font-size: 0.3rem;
`;

export const Wrapper = styled(FlexCol)`
  /* border: ${props => props.theme.Border}; */
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

export const MainInfo = styled(FlexCol)`
  justify-content: space-around;
`;

export const PriceWrapper = styled(FlexCol)`
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1028px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const MainTitle = styled(H2)`
  @media (min-width: 768px) {
    text-align: left;
    padding-left: 20px;
  }
  @media (min-width: 1300px) {
    padding-left: 30px;
  }
`;

export const MainImg = styled.img`
  max-width: 7rem;
  @media (min-width: 768px) {
    max-width: 14rem;
  }
  @media (min-width: 1024px) {
    max-width: 17rem;
  }
`;

export const Warranty = styled.p`
  font-family: ${props => props.theme.MainFont2};
  text-align: center;
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
  }
`;

export const Description = styled.p`
  font-weight: 300;
  color: ${props => props.theme.newColor2};
  font-family: ${props => props.theme.MainFont3};
  align-self: center;
  border-radius: 0.11rem;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 1rem;
  padding: 5px 14px 10px 14px;
  line-height: 1.3rem;
  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding-right: 40px;
    padding-left: 40px;
    line-height: 1.7rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.8rem;
    padding-right: 60px;
    padding-left: 60px;
    line-height: 2.3rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.7rem;
    padding-top: 30px;
    padding-right: 80px;
    padding-left: 80px;
    line-height: 2.35rem;
    margin: auto;
    padding-bottom: 20px;
  }
`;

export const Overview = styled.header`
  font-family: ${props => props.theme.MainFont1};
  background-color: ${props => props.theme.mainColor2};
  text-shadow: ${props => props.theme.newTextShadow};
  color: ${props => props.theme.newColor1};
  letter-spacing: 0.1rem;
  text-align: center;
  font-size: 0.5rem;
  padding: 0px 12px 0px 12px;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 0.9rem;
    padding: 0px 5px 0px 10px;
  }
  @media (min-width: 1024px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const Article = styled.article`
  display: flex;
  background: rgba(224, 224, 224, 0.42);
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 0px;
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
// 692px
export const StyledMarkDown = styled(Markdown)`
  font-family: ${props => props.theme.MainFont3};
  font-weight: 400;
  margin-left: 5px;
  color: ${props => props.theme.newColor2};
  padding: 0px;
  & p {
    font-size: 0.9rem;

    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 2px;
    font-size: 0.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  & li {
    padding-bottom: 2px;
  }
  @media (min-width: 360px) {
    & ul {
      margin-top: 10px;
    }
  }
  @media (min-width: 550px) {
    /* font-family: ${props => props.theme.MainFont2}; */
    padding: 0px 0px 0px 10px;

    & p {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${props => props.theme.mainColor2};
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size: 1rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }
  @media (min-width: 992px) {
    padding: 0px 30px 10px 30px;

    & p {
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }
`;

export const Price = styled(FlexCol)`
  margin-left: 10px;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;
// where ?
export const PriceTitle = styled.p`
  font-family: ${props => props.theme.MainFont1};
  padding-top: 0px;
  padding-bottom: 3px;
  margin-top: 0;
  margin-bottom: 0px;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    padding-top: 0px;
    padding-bottom: 7px;
  }
  @media (min-width: 1022px) {
    font-size: 1.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;

export const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoAnchor = styled(AnchorLink)`
  display: none;
  margin-left: 5px;
  padding-left: 15px;
  font-size: 0.9rem;
  font-family: ${props => props.theme.MainFont1};
  font-weight: 700;
  letter-spacing: 0.05rem;
  color: ${props => props.theme.mainColor2};
  &:hover {
    color: ${props => props.theme.mainColor1};
  }
  @media (orientation: landscape) {
    display: block;
  }
  @media (min-width: 568px) {
    padding-left: 30px;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    display: block;
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    padding-left: 55px;
    font-size: 1.6rem;
  }
`;

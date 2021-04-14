import { styled } from "goober";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FadeIn } from "../oldKeyframes";
import { colors, fonts } from "../oldTheme";

const MainArticle = styled(`article`)`
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, 0.6);
  background-color: white;
  color: ${colors.gray[50]};
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
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

const WarranyName = styled(`h4`)`
  font-family: ${fonts.sans};
  border-bottom: 4px solid ${colors.red[800]};
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  color: ${colors.gray[900]};
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
  color: ${colors.blue[800]};
  font-family: ${fonts.sans};
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.12rem;
  &:hover {
    color: ${colors.red[800]};
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }
`;

const WarrantyTopper = styled(`h3`)`
  font-family: ${fonts.sans};
  font-weight: 400;
  color: ${colors.gray[50]};
  text-shadow: 0px 6px 6px -6px rgba(52, 52, 52, 0.41);
  background-color: ${colors.blue[800]};
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

const WarrantyWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const P = styled(`p`)`
  font-family: ${fonts.serif};
  font-weight: 300;
  text-indent: 25px;
  line-height: 1.35rem;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 10px;
  color: ${colors.gray[900]};
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
export const Heading = styled(`h3`)`
  font-family: ${fonts.sans};
  border-bottom: 4px solid ${colors.red[800]};
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

export default {
  MainArticle,
  WarranyName,
  WarranyNumber,
  WarrantyWrapper,
  WarrantyTopper,
  Heading,
  P,
};

import styled from "@emotion/styled";
import { Link } from "gatsby";
import { boxShadowHover, colors, fonts } from "../../../styles/theme.styled";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.brandBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  ${boxShadowHover}
`;

export const Topper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
`;
export const Banner = styled.div`
  font-family: ${fonts.sans};
  font-weight: 400;
  text-align: center;
  z-index: 1;
  background-color: ${colors.brandRed};
  color: white;
  position: absolute;
  font-size: 1rem;
  margin-top: 18px;
  padding-right: 27px;
  padding-left: 28px;
  padding-top: 4px;
  padding-bottom: 4px;

  :after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${colors.brandRed};
    transform-origin: bottom left;
    transform: skew(-21deg, 0deg);
  }
  @media (min-width: 1024px) {
    margin-top: 14px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 23px;
    padding-left: 24px;
    letter-spacing: 0.045rem;
  }
`;

export const PriceRange = styled.div`
  color: ${colors.gray["800"]};
  font-weight: 400;
  font-family: ${fonts.sans};
  text-align: center;
  z-index: 5;
  font-weight: 700;
  @media (min-width: 768px) {
    letter-spacing: 0.05rem;
  }
`;
export const Name = styled.div`
  font-family: ${fonts.sans};
  text-decoration: none;
  font-weight: 400;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 5px;
  margin: 0;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 0.05rem;
  }
`;

export const MattImgContainer = styled.div`
  color: white;
  margin: 0 auto 0px auto;
  width: 250px;
  height: 250px;
  @media (min-width: 1022px) {
    margin-bottom: -10px;
  }
`;

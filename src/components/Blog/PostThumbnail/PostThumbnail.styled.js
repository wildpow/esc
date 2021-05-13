import { Link } from "gatsby";
import styled from "styled-components";
import {
  boxShadowHover,
  colors,
  FadeInAnimation,
  fonts,
} from "../../../styles/theme.styled";

export const StyledLink = styled(Link)`
  ${boxShadowHover}
  padding-right: 2px;
  padding-left: 2px;
  padding-bottom: 5px;
  background: white;
  ${FadeInAnimation}
  grid-template-columns: 80px 1fr;
  grid-template-rows: 100px 1fr;
  text-decoration: none;
  grid-template-areas:
    "ThumbImg Title"
    "Description Description";
  display: grid;
  position: relative;
  @media (min-width: 568px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  @media (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 15px;
  }
  h3 {
    grid-area: Title;
    align-self: center;
    justify-self: start;
    justify-items: start;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    font-family: ${fonts.sans};
    color: black;
    z-index: 10;
    @media (min-width: 375px) {
      font-size: 1.2rem;
    }
    @media (min-width: 568px) {
      font-size: 1.25rem;
      line-height: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
  span {
    top: 73px;
    position: absolute;
    background: ${colors.brandBlue};
    height: 20px;
    width: 100%;
    /* border-radius: 4px; */
    opacity: 0.3;
    grid-column: span 2;
  }
`;

export const ThumbImg = styled.img`
  grid-area: ThumbImg;
  width: 70px;
  align-self: center;
  justify-self: center;
  z-index: 10;
  transition: transform 0.25s ease-in;
  transform: ${({ isHovering }) =>
    isHovering ? "scale3d(1.1, 1.1, 1)" : "scale3d(1, 1, 1)"};
`;

export const Description = styled.p`
  grid-area: Description;
  font-family: ${fonts.serif};
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4rem;
  color: black;
  text-decoration: ${({ isHovering }) => (isHovering ? "underline" : "none")};
  text-decoration-color: ${({ isHovering }) =>
    isHovering ? colors.brandRed : "none"};
  text-underline-position: under;
  font-weight: 300;
  @media (min-width: 568px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  @media (min-width: 1028px) {
    font-size: 1.2rem;
    /* font-weight: 500; */
    line-height: 1.6rem;
    /* padding-bottom: 10px; */
  }
`;

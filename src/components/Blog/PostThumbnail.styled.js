import { styled, css, theme } from "twin.macro";
import FadeIn from "../../keyframes/fadeIn.styled";

export const StyledLink = css`
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
      0px 8px 16px rgba(71, 63, 79, 0.16);
  }
  padding-right: 2px;
  padding-left: 2px;
  padding-bottom: 5px;
  background: white;
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
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
    font-weight: 700;
    padding: 0;
    font-size: 1rem;
    line-height: 1.3rem;
    font-family: ${theme`fontFamily.sans`};
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
    background: ${theme`colors.brandBlue`};
    height: 20px;
    width: 100%;
    opacity: 0.3;
    grid-column: span 2;
  }
`;

export const ThumbImg = styled(`img`)`
  grid-area: ThumbImg;
  width: 70px;
  align-self: center;
  justify-self: center;
  z-index: 10;
  transition: transform 0.25s ease-in;
  transform: ${(props) =>
    props.isHovering ? "scale3d(1.1, 1.1, 1)" : "scale3d(1, 1, 1)"};
`;

export const Description = styled("p")`
  grid-area: Description;
  font-family: ${theme`fontFamily.serif`};
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4rem;
  color: black;
  text-decoration: ${(props) => (props.isHovering ? "underline" : "none")};
  text-decoration-color: ${(props) =>
    props.isHovering ? theme`colors.brandRed` : "none"};
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
    line-height: 1.6rem;
  }
`;

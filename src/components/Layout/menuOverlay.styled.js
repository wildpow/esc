import { styled, theme } from "twin.macro";
import FadeIn from "../../keyframes/fadeIn.styled";

const MenuOverLay = styled("div")`
  display: none;
  opacity: 0;
  animation-name: ${FadeIn};
  animation-duration: 0.75s;
  @media (min-width: ${theme`screens.sm`}) {
    z-index: 1;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`;

export default MenuOverLay;

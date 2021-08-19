import styled from "@emotion/styled";
import { breakpoints, FadeInAnimation } from "./theme.styled";

const MenuOverLay = styled.div`
  display: none;
  opacity: 0;
  ${FadeInAnimation}
  @media (min-width: ${breakpoints.sm}) {
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

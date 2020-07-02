import styled from "styled-components";
import { FadeIn } from "../../../../styles/mainStyles";

export const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 93vw;
  height: 87vh;
  animation-name: ${FadeIn};
  ${(props) => props.theme.Animation}
  @media(orientation: landscape) and (max-width: 812px) and (max-height: 450px) {
    width: 92vw;
    height: 97vh;
  }
  @media (min-width: 360px) and (orientation: portrait) {
    height: 77vh;
  }
  @media (min-width: 360px) and (min-height: 666px) and (orientation: portrait) {
    height: 74vh;
  }
  @media (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {
    height: 61vh;
  }
  @media (min-width: 410px) and (orientation: portrait) {
    height: 65vh;
  }
  @media (min-width: 411px) and (min-height: 823px) and (orientation: portrait) {
    height: 58vh;
  }
  @media (min-width: 768px) and (min-height: 823px) and (orientation: portrait) {
    width: 60vw;
    height: 58vh;
  }
  @media (min-width: 823px) and (min-height: 411px) and (orientation: landscape) {
    height: 93vh;
  }
  @media (min-width: 917px) and (min-height: 917px) {
    width: 60vw;
    height: 55vh;
  }
  @media (min-width: 1024px) and (min-height: 768px) and (orientation: landscape) {
    width: 60vw;
    height: 65vh;
  }
  /* @media(min-width: 1024px) {
    width: 60vw; 
    height: 53vh;
  } */
  @media (min-width: 1024px) and (min-height: 1300px) {
    height: 40vh;
  }
  @media (min-width: 1200px) {
    width: 40vw;
    height: 47vh;
  }
  @media (min-width: 400px) and (min-height: 920px) {
    height: 53vh;
  }
  @media (min-width: 769px) and (min-height: 920px) {
    height: 60vh;
  }
  @media (min-width: 931px) and (min-height: 920px) {
    width: 50vw;
    height: 57vh;
  }
  @media (min-width: 931px) and (min-height: 920px) and (orientation: landscape) {
    width: 50vw;
    height: 400px;
  }
  @media (min-width: 1024px) and (min-height: 920px) and (orientation: portrait) {
    width: 46vw;
    height: 41vh;
  }
  @media (min-width: 1024px) and (min-height: 920px) and (orientation: landscape) {
    width: 500px;
    height: 530px;
  }
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
`;

import styled, { keyframes, css } from "styled-components";

export const SlideInKeyframe = keyframes`
  from { transform: translateX(60%); }
  to { transform: translateX(0); }
`;
export const AppearKeyframe = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const LogoAnimate = css`
  animation: 1s ${SlideInKeyframe} forwards, 2.2s ${AppearKeyframe} forwards;
`;
export const FadeIn = styled.div`
  opacity: 0;
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: ${(props) => props.delay};
  transition: all 0.5s ease-in-out;
`;
export const SlideIn = styled.div`
  animation: 0.5s ${SlideInKeyframe} forwards;
  animation-delay: ${(props) => props.delay};
`;

export const ShrinkKeyframe = keyframes`
  0% {width: 0%; }
  100% { width: 100%; }
`;

// export const HomeSmallSlide = styled.div`
//   animation: 0.5s ${SlideInKeyframe} forwards;
//   animation-delay: 0.2s;
// `;

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { set1, set2, set3, set4 } from "./menuItemsData";

const AppearKeyframe = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SlideInKeyframe = keyframes`
  from { transform: translateX(60%); }
  to { transform: translateX(0); }
`;
const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  /* @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
  } */
`;
const FadeIn = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: ${props => props.delay};
  transition: all 0.5s ease-in-out;
`;
const SlideIn = styled.div`
  width: 100%;
  height: 100%;
  animation: 0.5s ${SlideInKeyframe} forwards;
  animation-delay: ${props => props.delay};
`;
const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #fafafa;

  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(17, 75, 95, 0.4);
  }
`;

export const ShrinkKeyframe = keyframes`
  0% {width: 0%; }
  100% { width: 95%; }
`;
const Line = styled.div`
  width: 0%;
  height: 1px;
  background: gray;
  margin: 0 auto;
  animation: 0.9s ${ShrinkKeyframe} forwards;
  animation-delay: ${props => props.delay};
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: none;
  width: 100%;
  height: 100%;
  padding: 25px;
  &:hover {
    transform: translateX(10px);
  }
`;
const NewStuff = () => {
  return (
    <Container>
      {set1.map(item => (
        <>
          <StyledLink key={item.key} to={item.to}>
            <SlideIn delay={`${item.delay}s`}>
              <FadeIn delay={`${item.delay}s`}>
                <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
              </FadeIn>
            </SlideIn>
          </StyledLink>
          <Line delay={`${item.delay}s`} />
        </>
      ))}
      {set2.map(item => (
        <StyledLink key={item.key} to={item.to}>
          <SlideIn delay={`${item.delay}s`}>
            <FadeIn delay={`${item.delay}s`}>
              <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
            </FadeIn>
          </SlideIn>
        </StyledLink>
      ))}
      {set3.map(item => (
        <StyledLink key={item.key} to={item.to}>
          <SlideIn delay={`${item.delay}s`}>
            <FadeIn delay={`${item.delay}s`}>
              <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
            </FadeIn>
          </SlideIn>
        </StyledLink>
      ))}
      {set4.map(item => (
        <StyledLink key={item.key} to={item.to}>
          <SlideIn delay={`${item.delay}s`}>
            <FadeIn delay={`${item.delay}s`}>
              <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
            </FadeIn>
          </SlideIn>
        </StyledLink>
      ))}
    </Container>
  );
};

export default NewStuff;

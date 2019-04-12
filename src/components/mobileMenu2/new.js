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
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 50px;
  }
`;
const FadeIn = styled.div`
  opacity: 0;
  /* width: 100%;
  height: 100%; */
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: ${props => props.delay};
  transition: all 0.5s ease-in-out;
`;
const SlideIn = styled.div`
  /* width: 100%;
  height: 100%; */
  animation: 0.5s ${SlideInKeyframe} forwards;
  animation-delay: ${props => props.delay};
`;
const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2rem;
  /* width: 100%;
  height: 100%; */
  color: #fafafa;
  padding-left: 10px;
  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
`;
const HiddenOnSmallLink = styled(StyledLink)`
  display: none;
  @media (min-width: 768px) {
    display: initial;
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
  @media (orientation: landscape) {
    display: none;
  }
`;
const HiddenLineOnSmall = styled(Line)`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;
const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: none;
  /* width: 100%;
  height: 100%; */
  padding: 15px;
  @media (orientation: landscape) {
    padding: 20px;
  }
  @media (min-width: 768px) {
    padding: 25px;
  }
  &:hover {
    transform: translateX(10px);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;
const NewStuff = () => {
  return (
    <Container>
      <Flex>
        {set1.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              activeStyle={{
                backgroundColor: "rgba(17, 75, 95, 0.2)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            <Line delay={`${item.delay}s`} />
          </>
        ))}
      </Flex>
      <Flex>
        {set2.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            <Line delay={`${item.delay}s`} />
          </>
        ))}
      </Flex>
      <Flex>
        {set3.map(item => (
          <>
            <StyledLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </StyledLink>
            <Line delay={`${item.delay}s`} />
          </>
        ))}
      </Flex>
      <Flex>
        {set4.map(item => (
          <>
            <HiddenOnSmallLink
              key={item.key}
              to={item.to}
              partiallyActive
              activeStyle={{
                backgroundColor: "rgba(235, 28, 26, 0.9)",
              }}
            >
              <SlideIn delay={`${item.delay}s`}>
                <FadeIn delay={`${item.delay}s`}>
                  <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
                </FadeIn>
              </SlideIn>
            </HiddenOnSmallLink>
            {item.key !== 11 && <HiddenLineOnSmall delay={`${item.delay}s`} />}
          </>
        ))}
      </Flex>
    </Container>
  );
};

export default NewStuff;

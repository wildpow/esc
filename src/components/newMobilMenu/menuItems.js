import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { set1, set2, set3, set4 } from "./menuItemsData";
import {
  AppearKeyframe,
  FadeIn,
  SlideIn,
  ShrinkKeyframe,
  HomeSmallSlide,
} from "./mobileItemsStyles";

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fafafa;
  padding-left: 10px;
  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  /* border: 1px dotted rgba(255, 255, 255, 0.4); */
  /* border-radius: 4px; */
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
  @media (min-height: 800px) and (orientation: portrait) {
    font-size: 1.2rem;
  }
  @media (min-height: 900px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
  /* @media (min-height: 900px) and (orientation: portrait) and (max-width: 600px) {
    font-size: 1.4rem;
  } */
`;

const HiddenOnSmallLink = styled(StyledLink)`
  display: none;
  /* @media (min-width: 568px) and (orientation: landscape) {
    display: initial;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: initial;
  } */
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
`;

const Line = styled.div`
  width: 0%;
  height: 1px;
  background: white;
  margin: 0 auto;
  animation: 0.9s ${ShrinkKeyframe} forwards;
  animation-delay: ${props => props.delay};
  @media (orientation: landscape) and (min-width: 568px) {
    display: none;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: initial;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: initial;
  }
`;
const HiddenLineOnSmall = styled(Line)`
  display: none;
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
  @media (min-width: 812px) and (max-height: 375px) {
    display: none;
  }
`;
const HiddenLineAgain = styled(Line)`
  @media (max-width: 414px) {
    display: none;
  }
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: none;
  padding: 15px;
  &:hover {
    transform: translateX(10px);
  }
  @media (min-height: 900px) and (orientation: portrait) {
    padding: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) and (max-width: 568px) {
    flex-direction: column;
    align-self: center;
    width: 100%;
    padding: 0px;
    justify-content: space-evenly;
  }
  @media (orientation: landscape) and (min-width: 667px) {
    text-align: center;
  }
`;
const HomeFlex = styled(Flex)`
  /* @media (orientation: landscape) and (max-width: 736px) {
    display: none;
  } */

  @media (orientation: landscape) and (max-width: 823px) {
    display: none;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: inherit;
  }
`;

const HomeSmall = styled(Link)`
  display: none;
  opacity: 0;
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: 0.2s;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid #eb1c24;
  border-top: 1px solid #eb1c24;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;
  position: absolute;
  top: 55px;
  text-align: center;
  width: 174px;
  border-radius: 2px;
  left: 12px;
  padding: 10px 20px;
  font-size: 1.1rem;
`;
const Homer = styled.div`
  position: relative;
`;
const NewStuff = () => {
  return (
    <Container>
      <Homer>
        <HomeSmall
          activeStyle={{
            backgroundColor: "rgba(17, 75, 95, 0.2)",
          }}
          to={set1[0].to}
        >
          <HomeSmallSlide>{set1[0].label}</HomeSmallSlide>
        </HomeSmall>
      </Homer>
      <HomeFlex>
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
      </HomeFlex>
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
            {item.key !== 8 ? (
              <Line delay={`${item.delay}s`} />
            ) : (
              <HiddenLineAgain delay={`${item.delay}s`} />
            )}
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

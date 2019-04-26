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
  padding-top: 110px;
  /* position: relative; */
  display: flex;
  /* height: 100vh; */
  flex-direction: column;
  @media (orientation: landscape) and (max-width: 1000px) and (max-height: 600px) {
    flex-direction: row;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    flex-direction: row;
  }
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
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
  @media (orientation: landscape) and (max-width: 667px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 8px;
    padding: 0;
  }
  @media (orientation: landscape) and (max-width: 736px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 8px;
    padding: 0;
  }
  @media (min-height: 800px) and (orientation: portrait) {
    font-size: 1.2rem;
  }
  @media (min-height: 900px) {
    font-size: 1.5rem;
  }
  @media (max-height: 380px) and (orientation: landscape) and (min-width: 800px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 8px;
    padding: 0;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 731px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 8px;
    padding: 0;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    border: 1px dotted rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 8px;
    padding: 0;
  }
`;

const HiddenOnSmallLink = styled(StyledLink)`
  display: none;
  @media (orientation: landscape) and (max-width: 667px) {
    display: initial;
  }
  @media (orientation: landscape) and (max-width: 736px) {
    display: initial;
  }
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
  @media (min-height: 900px) {
    display: initial;
  }
  @media (max-height: 380px) and (orientation: landscape) and (min-width: 800px) {
    display: initial;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 731px) {
    display: initial;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
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
  @media (orientation: landscape) and (max-width: 667px) {
    display: none;
  }
  @media (orientation: landscape) and (max-width: 736px) {
    display: none;
  }
  @media (orientation: portrait) and (min-height: 800px) {
    display: initial;
  }
  @media (min-width: 900px) and (orientation: landscape) and (max-height: 500px) {
    display: initial;
  }

  @media (max-height: 380px) and (orientation: landscape) and (min-width: 800px) {
    display: none;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 731px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    display: none;
  }
`;
const HiddenLineOnSmall = styled(Line)`
  @media (max-width: 400px) and (orientation: portrait) {
    display: none;
  }
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
  @media (min-width: 812px) and (max-height: 375px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 651px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 700px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (min-height: 701px) and(max-height: 850px) {
    display: none;
  }
`;
const HiddenLineAgain = styled(Line)`
  @media (min-width: 850px) and (max-width: 1022px) and (min-height: 701px) and (max-height: 850px) {
    display: none;
  }
  @media (max-width: 414px) {
    display: none;
  }
  @media (min-height: 700px) and (orientation: portrait) {
    display: initial;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 651px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 700px) {
    display: none;
  }
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: none;
  padding: 15px;
  &:hover {
    transform: translateX(10px);
  }
  @media (orientation: landscape) and (min-width: 667px) {
    padding: 20px;
  }
  @media (orientation: landscape) and (min-width: 736px) {
    padding: 25px;
  }
  @media (min-height: 900px) {
    padding: 20px;
  }
  @media (max-height: 380px) and (orientation: landscape) and (min-width: 800px) {
    padding: 20px;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 731px) {
    padding: 25px;
  }
  @media (max-height: 375px) and (orientation: landscape) and (min-width: 812px) {
    padding: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) and (max-width: 667px) {
    flex-direction: column;
    align-self: center;
    width: 100%;
    padding: 0px;
    text-align: center;
    justify-content: space-evenly;
  }
  @media (orientation: landscape) and (min-width: 667px) {
    flex-direction: column;
    align-self: center;
    width: 100%;
    padding: 0px;
    text-align: center;
    justify-content: space-evenly;
  }

  @media (min-height: 900px) {
    text-align: left;
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
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    display: none;
  }
`;

const HomeSmall = styled(Link)`
  display: none;
  opacity: 0;
  animation: 0.7s ${AppearKeyframe} forwards;
  animation-delay: 0.2s;
  transition: all 0.5s ease-in-out;
  border: 1px dotted rgba(255, 255, 255, 0.4);

  /* border-top: 1px solid #eb1c24; */
  font-family: Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;
  position: absolute;
  top: 60px;
  text-align: center;
  width: 167px;
  border-radius: 4px;
  left: 12px;
  padding: 12px 20px;
  font-size: 1.1rem;
  @media (orientation: landscape) and (max-width: 600px) {
    display: initial;
  }
  @media (orientation: landscape) and (min-width: 601px) and (max-height: 600px) {
    display: initial;
    width: 200px;
    padding: 18px 20px;
  }
  @media (orientation: landscape) and (min-width: 639px) and (max-width: 641px) {
    width: 191px;
    padding: 15px;
  }
  @media (orientation: landscape) and (min-width: 736px) {
    width: 225px;
    padding: 25px;
  }
  @media (max-height: 380px) and (orientation: landscape) and (min-width: 800px) {
    width: 250px;
    padding: 20px;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 731px) {
    width: 224px;
    padding: 25px;
    top: 55px;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 810px) {
    width: 252px;
    left: 10px;
  }
  @media (max-height: 411px) and (orientation: landscape) and (min-width: 820px) {
    width: 255px;
  }
  @media (max-height: 375px) and (orientation: landscape) and (min-width: 812px) {
    padding: 20px;
    top: 60px;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    width: 320px;
  }
`;

const NewStuff = () => {
  return (
    <Container>
      {/* <Homer> */}
      <HomeSmall
        activeStyle={{
          backgroundColor: "rgba(17, 75, 95, 0.2)",
        }}
        to={set1[0].to}
      >
        <HomeSmallSlide>{set1[0].label}</HomeSmallSlide>
      </HomeSmall>
      {/* </Homer> */}
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

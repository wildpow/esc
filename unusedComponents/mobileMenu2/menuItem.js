import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SlideIn = keyframes`
  from { transform: translateX(60%); }
  to { transform: translateX(0); }
`;
const Container = styled.div`
  opacity: 0;
  animation: 0.7s ${Appear} forwards;
  animation-delay: ${props => props.delay};
  transition: all 0.5s ease-in-out;
`;

const MenuItems = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  width: 100%;
  cursor: pointer;
  color: #fafafa;
  transition: background-color 0.2s ease-in-out;
  animation: 0.5s ${SlideIn} forwards;
  animation-delay: ${props => props.delay};

  background-color: ${props =>
    props.hover ? "rgba(17, 75, 95, 0.4)" : "inital"};
`;

export const Shrink = keyframes`
  0% {width: 0%; }
  100% { width: 90%; }
`;
const Line = styled.div`
  width: 0%;
  height: 1px;
  background: gray;
  margin: 0 auto;
  animation: 0.8s ${Shrink} forwards;
  animation-delay: ${props => props.delay};
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: ${props => (props.hover ? "translateX(10px)" : "none")};
`;

const MenuItem = ({ delay, onClick, children }) => {
  const [hover, setHover] = useState(false);
  return (
    <Container delay={delay} hover={hover}>
      <MenuItems
        delay={delay}
        hover={hover}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ShiftTextOnHover hover={hover}>{children}</ShiftTextOnHover>
      </MenuItems>
      <Line delay={delay} />
    </Container>
  );
};

export default MenuItem;

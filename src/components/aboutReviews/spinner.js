import React from "react";
import styled, { keyframes } from "styled-components";

const Animate = keyframes`
  0%, 40%, 100% { transform: scaleY(0.4) }  
  20% { transform: scaleY(.8) }
`;

const Spinner = styled.div`
  background: transparent;
  justify-self: center;
  align-content: center;
  align-items: center;
  color: ${props => props.theme.mainColor1};
  /* position: fixed; */
  height: 100%;
  width: 100%;
  /* z-index: 5000; */
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  /* padding-top: 25%; */
`;

const Base = styled.div`
  margin-right: 16px;
  background-color: ${props => props.theme.mainColor1};
  height: 153px;
  width: 5px;
  opacity: 0.2;
  display: inline-block;
  animation: ${Animate} 1.2s infinite ease-in-out;
  animation-delay: ${props => (props.delay ? props.delay : "")};
  @media (min-width: 768px) {
    height: 225px;
  }
`;

export default () => (
  <Spinner>
    <Base width="15px" />
    <Base delay="-1.1s" />
    <Base delay="-1s" />
    <Base delay="-0.9s" />
    <Base delay="-0.8s" />
    <Base delay="-0.7s" />
    <Base delay="-0.6s" />
    <Base delay="-0.5s" />
    <Base delay="-0.4s" />
    <Base delay="-0.3s" />
    {/* <Base delay="-0.2s" />
    <Base delay="-0.1s" /> */}
  </Spinner>
);

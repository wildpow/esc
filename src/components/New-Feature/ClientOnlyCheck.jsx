import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import React from "react";
import { colors } from "../../styles/theme.styled";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;
const InitialRender = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1000;
  overflow: hidden;
  background-color: green;
  z-index: 1000;
  :after {
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    -webkit-animation: ${shimmer} 2s infinite;
    animation: ${shimmer} 2s infinite;
    content: "";
    position: absolute;
    overflow: hidden;
    background-color: #dddbdd;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1000;
  }
`;
const Tester = styled.div`
  display: grid;
  grid-template-areas: "hero";

  .poop {
    grid-area: hero;
    position: relative;
    z-index: 1000;
    overflow: hidden;
    outline: ${colors.blue[900]} solid 1px;
    background-color: ${colors.gray[100]};
    :after {
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      -webkit-animation: ${shimmer} 2s infinite;
      animation: ${shimmer} 2s infinite;
      content: "";
      position: absolute;
      overflow: hidden;
      background-color: #dddbdd;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 1000;
    }
  }

  .pooper {
    grid-area: hero;
    background-color: transparent;
  }
`;
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <Tester>
        <div className="pooper">{children}</div>
        <div className="poop" />
      </Tester>
    );
  }

  return children;
  // return (
  //   <Tester>
  //     <div className="pooper">{children}</div>
  //     <div className="poop" />
  //   </Tester>
  // );
};

export default ClientOnly;

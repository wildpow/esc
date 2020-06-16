import React, { useEffect, useState } from "react";
import { node, string } from "prop-types";
import styled, { keyframes } from "styled-components";
import { breakpoints, colors, spacing, boxShadow } from "../../utils/styles";

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`;

const OverLay = styled.div`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`;
const MenuOverLay = styled.div`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`;
const PageContentRoot = styled.main`
  min-height: 100vh;
  box-shadow: ${boxShadow["2xl"]};
  position: relative;
  z-index: 1;
  padding-bottom: ${spacing["20"]};
  background-color: ${colors.gray["100"]};
  /* display: flex;
  flex-direction: column; */
  /* min-height: calc(100vh - 60px); */
  opacity: 1;
  padding-left: 0;
  transition: 0.75s;
  width: 100%;
  will-change: transform;
  &.covered {
    opacity: 0;
    position: fixed;
  }

  &.entry {
    animation: ${deadSimpleEntry};
  }

  @media (min-width: ${breakpoints.md}) {
    transform: translateX(0);
    &.moved {
      filter: blur(1px);
      transform: translateX(-400px);
    }
  }
`;

const PageContent = ({ children, cartStatus, menuStatus }) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    setClassName(cartStatus === "open" || menuStatus === "open" ? "moved" : "");
  }, [cartStatus, menuStatus]);
  return (
    <PageContentRoot className={className}>
      {menuStatus === "open" ? <MenuOverLay /> : null}
      {cartStatus === "open" ? <OverLay /> : null}
      {children}
    </PageContentRoot>
  );
};

PageContent.defaultProps = {
  cartStatus: "closed",
  menuStatus: "closed",
};

PageContent.propTypes = {
  children: node.isRequired,
  cartStatus: string,
  menuStatus: string,
};

export default PageContent;

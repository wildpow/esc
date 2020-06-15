import React, { useEffect, useState } from "react";
import { node, string } from "prop-types";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../utils/styles";

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`;

const OverLay = styled.div`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    background: rgba(0, 0, 0, 0.1);
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
    background: rgba(0, 0, 0, 0.1);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`;
const PageContentRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: calc(100vh - 60px);
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

  @media (min-width: ${breakpoints.lg}) {
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
      {cartStatus === "open" ? <OverLay /> : null}
      {menuStatus === "open" ? <MenuOverLay /> : null}
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

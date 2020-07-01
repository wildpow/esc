import React from "react";
import { node, string } from "prop-types";
import styled, { keyframes } from "styled-components";
import { breakpoints, colors, spacing, boxShadow } from "../../utils/styles";

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`;

const PageContentRoot = styled.main`
  padding-top: ${spacing["4"]};
  min-height: 100vh;
  box-shadow: ${boxShadow["2xl"]};
  position: relative;
  z-index: 1;
  padding-bottom: ${spacing["20"]};
  background-color: ${colors.gray["100"]};
  /* display: flex;
  flex-direction: column; */
  /* min-height: calc(100vh - 60px); */
  will-change: transform;
  opacity: 1;
  padding-left: 0;
  width: 100%;
  transition: all 0.75s;
  &.covered {
    opacity: 0;
    position: fixed;
  }

  &.entry {
    animation: ${deadSimpleEntry};
  }

  @media (min-width: ${breakpoints.sm}) {
    transform: translate3d(0vw, 0, 0);
    &.moved {
      /* filter: blur(1px); */
      transform: translate3d(-400px, 0, 0);
    }
  }
  @media (min-width: ${breakpoints.md}) {
    /* padding-top: ${spacing["10"]}; */
  }
`;

const PageContent = ({ children, moved }) => {
  return (
    <PageContentRoot className={moved}>
      {/* {menuStatus === "open" ? <MenuOverLay /> : null}
      {cartStatus === "open" ? <OverLay /> : null} */}
      {children}
    </PageContentRoot>
  );
};

PageContent.defaultProps = {
  moved: "",
};

PageContent.propTypes = {
  moved: string,
  children: node.isRequired,
};

export default PageContent;

import React from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from "../../images/logo.png";

export const Appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SlideIn = keyframes`
  from { transform: translateX(80%); }
  to { transform: translateX(0); }
`;
const LogoAnimate = css`
  animation: 1s ${SlideIn} forwards, 2.2s ${Appear} forwards;
`;
const Panda = styled.img`
  width: 150px;
  margin: 0 auto;
  margin-top: 40px;
  ${props => props.open && LogoAnimate}
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 0 10px #85888c;
  width: ${props => (props.open ? "300px" : 0)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1565c0;
  opacity: 0.95;
  color: #fafafa;
  transition: width 0.3s ease;
  z-index: 2;
  padding-top: 4.6rem;
`;

const Menu = ({ open, children }) => (
  <Container open={open}>
    {open ? children : null}
    {open ? <Panda src={Logo} open={open} /> : null}
  </Container>
);

export default Menu;

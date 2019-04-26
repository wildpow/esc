import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import MenuItems from "./menuItems";
import logo from "../../images/logo.png";

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
  width: 145px;
  align-self: center;

  margin-right: 25px;
  ${props => props.menuToggle && LogoAnimate}
  @media (orientation: landscape) and (max-width: 850px) {
    display: none;
  }
  @media (min-height: 650px) and (orientation: portrait) {
    width: 165px;
  }
  @media (min-height: 750px) and (orientation: portrait) {
    width: 190px;
  }
  @media (min-height: 900px) {
    width: 220px;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    display: none;
  }
`;

const Container = styled.div`
  box-shadow: 0 0 10px #85888c;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: #1565c0;
  opacity: ${props => (props.menuToggle ? 1 : 0)};
  color: #fafafa;
  z-index: 20;
  width: 70%;
  transition: all 0.4s ease;
  transform: ${props =>
    props.menuToggle ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
  @media (min-width: 850px) and (max-width: 1022px) and (max-height: 650px) {
    width: 100%;
  }
  @media (min-width: 850px) and (max-width: 1022px) and (min-height: 651px) {
    width: 35%;
  }
  @media (orientation: landscape) and (max-width: 850px) {
    width: 100%;
  }
  @media (min-width: 700px) and (max-width: 850px) and (min-height: 750px) and (max-height: 850px) {
    width: 35%;
  }
  @media (min-height: 900px) and (min-width: 600px) {
    width: 45%;
  }
  @media (min-height: 940px) and (min-width: 940px) {
    width: 35%;
  }
`;

function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handler = event => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}

const Menu = ({ menuToggle, closeonEsc }) => {
  useKeyboardEvent("Escape", () => {
    closeonEsc();
  });
  return (
    <Container menuToggle={menuToggle}>
      {menuToggle && <MenuItems />}
      {menuToggle && <Panda src={logo} menuToggle={menuToggle} />}
    </Container>
  );
};

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  closeonEsc: PropTypes.func.isRequired,
};

export default Menu;

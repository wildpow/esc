import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import NewStuff from "./new";
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
  margin-right: 25px;
  /* margin: 0 auto; */
  margin-top: 0px;
  justify-self: center;
  align-self: center;
  @media (orientation: landscape) and (min-width: 568px) {
    display: none;
  }
  @media (min-width: 375px) and (min-height: 812px) {
    display: none;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: initial;
    width: 220px;
    margin-top: 2px;
  }
  ${props => props.menuToggle && LogoAnimate}
`;

const Container = styled.div`
  box-shadow: 0 0 10px #85888c;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  /* justify-content: center;
  align-content: center; */
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
  @media (orientation: landscape) and (max-width: 812px) {
    width: 100%;
  }
  /* @media (orientation: landscape) and (min-width: 568px) {
    width: 80%;
  }
  @media (orientation: landscape) and (min-width: 667px) {
    width: 80%;
  } */

  /* @media (orientation: landscape) and (min-width: 736px) {
    width: 80%;
  } */
  @media (min-width: 768px) and (orientation: portrait) {
    width: 50%;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    width: 40%;
  }
  @media (min-width: 1022px) {
    display: none;
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
      {menuToggle && <NewStuff />}
      {menuToggle && <Panda src={logo} menuToggle={menuToggle} />}
    </Container>
  );
};

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  closeonEsc: PropTypes.func.isRequired,
};

export default Menu;

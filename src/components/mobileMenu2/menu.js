import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NewStuff from "./new";

const Container = styled.div`
  box-shadow: 0 0 10px #85888c;
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
  @media (orientation: landscape) {
    width: 100%;
  }
  @media (orientation: landscape) and (min-width: 736px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
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
    <Container menuToggle={menuToggle}>{menuToggle && <NewStuff />}</Container>
  );
};

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  closeonEsc: PropTypes.func.isRequired,
};

export default Menu;

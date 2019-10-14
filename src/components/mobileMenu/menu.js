import React, { useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Landscape from "./landscape";
import Portrait from "./portrait";

const Container = styled.div`
  box-shadow: 0 0 10px #85888c;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: ${props => props.theme.mainColor1};
  opacity: ${props => (props.menuToggle ? 1 : 0)};
  color: #fafafa;
  z-index: 20;
  width: 70%;
  transition: all 0.4s ease;
  transform: ${props =>
    props.menuToggle ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
  @media (max-width: 300px) {
    width: 100%;
  }
  @media (min-width: 600px) and (min-height: 700px) {
    width: 45%;
  }
  @media (min-width: 800px) and (min-height: 800px) {
    width: 35%;
  }
  @media (max-height: 500px) and (max-width: 900px) {
    width: 100%;
  }
  @media (orientation: landscape) and (max-height: 600px) {
    width: 100%;
  }
  @media (min-height: 550px) and (min-width: 900px) and (max-width: 1022px) {
    width: 40%;
  }
  @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
    width: 40%;
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
      {menuToggle && <Portrait />}
      <Landscape />
    </Container>
  );
};

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  closeonEsc: PropTypes.func.isRequired,
};

export default Menu;

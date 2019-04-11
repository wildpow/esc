import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  box-shadow: 0 0 10px #85888c;
  visibility: ${props => (props.menuToggle ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1565c0;
  opacity: 1;
  color: #fafafa;
  z-index: 20;
  padding-top: 3rem;
  width: 100%;
  transition: transform 0.4s ease;
  transform: ${props =>
    props.menuToggle ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1022px) {
    display: none;
  }
`;
const Menu = ({ menuToggle, children }) => {
  return (
    <Container menuToggle={menuToggle}>
      {menuToggle ? children : null}
    </Container>
  );
};

Menu.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;

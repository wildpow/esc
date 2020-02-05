import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useModalContext } from "../modalContext";

const Line1Active = css`
  transform: translateY(12px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-14px) translateX(0) rotate(-45deg);
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 59px;
  right: 15px;
  z-index: ${props => (props.modal ? "0" : "3")};
  opacity: 0.9;
  @media (max-width: 300px) {
    right: 15%;
  }
  @media (orientation: landscape) and (max-width: 600px) {
    /* top: 52px;
    right: 15px; */
    top: 56px;
    right: 12px;
  }
  @media (orientation: landscape) and (min-width: 601px) {
    right: 20px;
    top: 56px;
  }

  /* desktop button posistion */
  @media (min-height: 900px) and (min-width: 350px) and (max-width: 450px) {
    top: 61px;
  }
  @media (min-height: 900px) and (min-width: 451px) and (max-width: 650px) {
    top: 44px;
  }
  @media (min-height: 900px) and (min-width: 651px) {
    right: 20px;
  }
  /* display desktop menu after landscape ipad */
  @media (min-width: 1022px) {
    display: none;
  }
`;

const HoverCircle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  /* border-radius: 50%; */
  transition: all 0.15s linear;
  border: ${props =>
    props.menuToggle ? "2px solid transparent" : "2px solid transparent"};

  background-color: ${props =>
    props.hover && !props.menuToggle ? "rgba(0, 0, 0, 0.1)" : "initial"};

  width: 55px;
  height: 55px;
`;
const Container = styled.div`
  justify-self: center;
  position: relative;
  display: block;
  cursor: pointer;
  width: 45px;
  height: 25px;
  margin-bottom: 3px;
`;

const Line = styled.div`
  transition: all 0.4s;
  border-radius: 4px;
  display: block;
  position: absolute;
  width: 45px;
  height: 5px;
`;
const LineTop = styled(Line)`
  top: 0;
  transform: ${props =>
    props.hover && !props.menuToggle ? "translateY(-4px)" : "translateY(0)"};
  ${props => props.menuToggle && Line1Active};
  background-color: ${props => (props.menuToggle ? "white" : "#eb1c24")};
`;

const LineMiddle = styled(Line)`
  top: 50%;
  opacity: ${props => (props.menuToggle ? 0 : 1)};
  transform: ${props => (props.menuToggle ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.menuToggle ? "white" : "#1565c0")};
`;

const LineBottom = styled(Line)`
  top: 100%;
  transform: ${props =>
    props.hover && !props.menuToggle ? "translateY(4px)" : "translateY(0)"};
  ${props => props.menuToggle && Line2Active};
  background-color: ${props => (props.menuToggle ? "white" : "#eb1c24")};
`;
const MenuButton = ({ menuToggle, onClick }) => {
  const [hover, setHover] = useState(false);
  const handleMenu = () => {
    setHover(false);
    onClick();
  };
  const { modal } = useModalContext();
  return (
    <ButtonContainer modal={modal}>
      <HoverCircle hover={hover} menuToggle={menuToggle}>
        <Container
          hover={hover}
          menuToggle={menuToggle}
          onClick={handleMenu}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <LineTop menuToggle={menuToggle} hover={hover} />
          <LineMiddle menuToggle={menuToggle} hover={hover} />
          <LineBottom menuToggle={menuToggle} hover={hover} />
        </Container>
      </HoverCircle>
    </ButtonContainer>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  menuToggle: PropTypes.bool.isRequired,
};

export default MenuButton;

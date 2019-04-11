import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(12px) translateX(0) rotate(45deg);
  @media (min-width: 768px) {
    transform: translateY(20px) translateX(0) rotate(45deg);
  }
`;
const Line2Active = css`
  transform: translateY(-14px) translateX(0) rotate(-45deg);
  @media (min-width: 768px) {
    transform: translateY(20px) translateX(0) rotate(45deg);
  }
`;

const HoverCircle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.15s linear;
  border: ${props =>
    props.menuToggle
      ? "1px solid rgba(255,255,255,.2)"
      : "1px solid transparent"};

  background-color: ${props =>
    props.hover && !props.menuToggle ? "rgba(0, 0, 0, 0.1)" : "initial"};

  width: 57px;
  height: 57px;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
const Container = styled.div`
  justify-self: center;
  position: relative;
  display: block;
  cursor: pointer;
  width: 45px;
  height: 25px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    margin-bottom: 9px;
    width: 70px;
    height: 40px;
  }
`;

const Line = styled.div`
  transition: all 0.4s;
  border-radius: 4px;
  display: block;
  position: absolute;
  width: 45px;
  height: 5px;
  @media (min-width: 768px) {
    width: 70px;
    height: 8px;
  }
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
  return (
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
  );
};

export default MenuButton;

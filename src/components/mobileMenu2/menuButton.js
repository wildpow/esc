import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(20px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-20px) translateX(0) rotate(-45deg);
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
    props.open ? "1px solid rgba(0,0,0,.2)" : "1px solid transparent"};

  background-color: ${props =>
    props.hover && !props.open ? "rgba(0, 0, 0, 0.1)" : "initial"};

  width: 90px;
  height: 90px;
`;
const Container = styled.div`
  justify-self: center;
  position: relative;
  display: block;
  cursor: pointer;
  width: 70px;
  height: 40px;
  margin-bottom: 9px;
`;

const Line = styled.div`
  transition: all 0.4s;
  border-radius: 4px;
  display: block;
  position: absolute;
  width: 70px;
  height: 8px;
`;
const LineTop = styled(Line)`
  top: 0;
  transform: ${props =>
    props.hover && !props.open ? "translateY(-4px)" : "translateY(0)"};
  ${props => props.open && Line1Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;

const LineMiddle = styled(Line)`
  top: 50%;
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.open ? "white" : "#1565c0")};
`;

const LineBottom = styled(Line)`
  top: 100%;
  transform: ${props =>
    props.hover && !props.open ? "translateY(4px)" : "translateY(0)"};
  ${props => props.open && Line2Active};
  background-color: ${props => (props.open ? "white" : "#eb1c24")};
`;
const MenuButton = ({ open, onClick }) => {
  const [hover, setHover] = useState(false);
  const handleMenu = () => {
    setHover(false);
    onClick();
  };
  return (
    <HoverCircle hover={hover} open={open}>
      <Container
        hover={hover}
        open={open}
        onClick={handleMenu}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <LineTop open={open} hover={hover} />
        <LineMiddle open={open} hover={hover} />
        <LineBottom open={open} hover={hover} />
      </Container>
    </HoverCircle>
  );
};

export default MenuButton;

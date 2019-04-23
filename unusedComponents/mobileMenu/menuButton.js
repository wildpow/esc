import React, { useState } from "react";
import styled, { css } from "styled-components";

const Line1Active = css`
  transform: translateY(7px) translateX(0) rotate(45deg);
`;
const Line2Active = css`
  transform: translateY(-9px) translateX(0) rotate(-45deg);
`;
const NavWrapper = styled.div`
  cursor: pointer;
  color: #212121;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 600;
  display: flex;
  width: 100px;
  height: 22px;
`;
const Span = styled.span`
  font-size: 1.6rem;
  opacity: ${props => (props.hover || props.open ? 1 : 0)};
  transition: 250ms;
  letter-spacing: 2px;
  color: ${props => (props.open ? "#343434" : "#212121")};
`;
const Hamburger = styled.div`
  position: relative;
  display: inline-block;
  height: 16px;
  width: 25px;
  margin-top: 1px;
  align-self: center;
`;
const Bar = styled.span`
  width: 25px;
  height: 4px;
  left: 0;
  transition: all 0.4s;
  border-radius: 2px;
  display: block;
  position: absolute;
`;
const BarTop = styled(Bar)`
  top: 0;
  ${props => props.open && Line1Active};
  background-color: ${props => (props.open ? "#343434" : "#eb1c24")};
`;
const BarMid = styled(Bar)`
  top: 50%;
  transition: 100ms;
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? "translateX(-16px)" : "none")};
  background-color: ${props => (props.open ? "#fcfcff" : "#1565c0")};
`;
const BarBottom = styled(Bar)`
  top: 100%;
  ${props => props.open && Line2Active};
  background-color: ${props => (props.open ? "#343434" : "#eb1c24")};
`;
const Active = styled.div`
  transition: all 0.3s;
  width: ${props => (props.open && props.hover ? "70px" : "0")};
  background-color: ${props =>
    props.open && props.hover ? "#eb1c24" : "inherit"};
  height: 3px;
  margin-top: 6px;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuButton = ({ open, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <NavWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <Span hover={hover} open={open}>
          {open ? "E" : "M"}
        </Span>
        <Hamburger>
          <BarTop open={open} />
          <BarMid open={open} />
          <BarBottom open={open} />
        </Hamburger>
        <Span hover={hover} open={open}>
          {open ? "I" : "N"}
        </Span>
        <Span hover={hover} open={open}>
          {open ? "T" : "U"}
        </Span>
      </NavWrapper>
      <Active hover={hover} open={open} />
    </Wrapper>
  );
};

export default MenuButton;

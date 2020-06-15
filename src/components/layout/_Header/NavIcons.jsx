import React from "react";
import { bool } from "prop-types";
import styled from "styled-components";
import VisuallyHidden from "@reach/visually-hidden";
import Phone from "../../../assets/phone-solid.svg";
import Email from "../../../assets/envelope-solid.svg";
import Map from "../../../assets/directions-solid.svg";
import { iconEntry } from "../../../utils/keyframes";
import { colors, dimensions, breakpoints } from "../../../utils/styles";

const ExtraNavRoot = styled.div`
  display: flex;
`;

const StyledLinks = styled.a`
  align-items: center;
  transition: all 0.2s ease;
  display: ${({ pin }) => (pin ? "initial" : "none")};

  :hover {
    transform: scale(1.2);
    .fa-phone {
      color: ${colors.blue["900"]};
    }
  }
  background: transparent;
  border: none;
  border-radius: 0;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: center;
  left: 0px;
  padding: 0;
  position: relative;
  top: 0;
  width: ${dimensions.headerHeight};

  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    left: -122px;
  }
  @media (min-width: ${breakpoints.lg}) {
    left: -61px;
  }

  .fa-phone {
    display: ${({ pin }) => (pin ? "initial" : "none")};
    animation: ${iconEntry} 0.75s ease forwards;
    height: 28px;
    margin: 0;
    width: 28px;
    color: ${colors.gray["600"]};
  }
`;
const NavIcons = ({ pin }) => {
  return (
    <ExtraNavRoot>
      <StyledLinks href="#call" pin={pin}>
        <span aria-hidden>
          <VisuallyHidden>Call store</VisuallyHidden>
          <Phone className="fa-phone" title="call store" />
        </span>
      </StyledLinks>
      <StyledLinks href="#email" pin={pin}>
        <span aria-hidden>
          <VisuallyHidden>email store</VisuallyHidden>
          <Email className="fa-phone" title="email store" />
        </span>
      </StyledLinks>
      <StyledLinks href="#direction" pin={pin}>
        <span aria-hidden>
          <VisuallyHidden>directions to store</VisuallyHidden>
          <Map className="fa-phone" title="directions to store" />
        </span>
      </StyledLinks>
    </ExtraNavRoot>
  );
};
NavIcons.defaultProps = {
  pin: true,
};
NavIcons.propTypes = {
  pin: bool,
};

export default NavIcons;

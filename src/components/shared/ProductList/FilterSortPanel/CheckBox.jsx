import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../../../utils/styles";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  pointer-events: auto;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.checked ? props.theme.mainColor1 : "white")};
  transition: all 150ms;
  border: 2px solid ${colors.gray["400"]};
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${(props) => props.theme.newColor4};
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
  :hover {
    border-color: ${colors.gray[700]};
  }
`;

const Checkbox = ({ checked, onChange, ...props }) => (
  <CheckboxContainer onChange={onChange}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;

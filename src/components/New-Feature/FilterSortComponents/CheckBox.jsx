import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors } from "../../../styles/theme.styled";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input`
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
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  width: 30px;
  height: 30px;
  background: ${({ checked }) => (checked ? colors.brandBlue : "white")};
  transition: all 150ms;
  border: 2px solid ${colors.gray["400"]};
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #fbfbff;
  }
  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
  :hover {
    border-color: ${colors.gray[700]};
  }
`;

const Checkbox = ({ disabled, checked, ...props }) => (
  <CheckboxContainer disabled={disabled}>
    {console.log(props)}
    <HiddenCheckbox
      checked={checked}
      disabled={disabled}
      {...props}
      type="checkbox"
    />
    <StyledCheckbox checked={checked} disabled={disabled}>
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

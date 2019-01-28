import React from "react";
import PropTypes from "prop-types";
import { Button, MenuLines, Bar } from "../styles/menuStyles";

const MenuButton = ({ handleMouseDown }) => (
  <Button
    type="button"
    role="presentation"
    aria-label="mobile navigation"
    onMouseUp={handleMouseDown}
  >
    <MenuLines>
      <Bar />
      <Bar />
      <Bar />
    </MenuLines>
  </Button>
);

MenuButton.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
};
export default MenuButton;

import React from "react";
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

export default MenuButton;

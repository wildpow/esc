import React from "react";
import styled from "styled-components";
import MenuItem from "./menuItem";
import { set1, set2, set3, set4 } from "./menuItemsData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewStuff = ({ handleMenuToggle }) => {
  return (
    <Container>
      {set1.map(item => (
        <MenuItem key={item.key} delay={item.delay} onClick={handleMenuToggle}>
          {item.label}
        </MenuItem>
      ))}
      {set2.map(item => (
        <MenuItem key={item.key} delay={item.delay} onClick={handleMenuToggle}>
          {item.label}
        </MenuItem>
      ))}
      {set3.map(item => (
        <MenuItem key={item.key} delay={item.delay} onClick={handleMenuToggle}>
          {item.label}
        </MenuItem>
      ))}
      {set4.map(item => (
        <MenuItem key={item.key} delay={item.delay} onClick={handleMenuToggle}>
          {item.label}
        </MenuItem>
      ))}
    </Container>
  );
};

export default NewStuff;

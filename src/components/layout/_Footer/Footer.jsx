import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../utils/styles";

const FooterRoot = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.white};
  border-top: 10px solid ${colors.red["700"]};
  height: 300px;
  h1 {
    margin: 0;
    font-size: 100px;
  }
`;

const Footer = () => {
  return (
    <FooterRoot>
      <h1>Foooooooooter</h1>
    </FooterRoot>
  );
};

export default Footer;

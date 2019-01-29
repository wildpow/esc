import React from "react";
import { ThemeConsumer } from "styled-components";
import {
  Header,
  Nav,
  StyledLinkLeft,
  StyledLinkRight,
} from "../styles/navStyles";

const Navigation = () => (
  <Header>
    <ThemeConsumer>
      {theme => (
        <>
          <Nav>
            <StyledLinkLeft
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
              to="/brands"
            >
              Brands
            </StyledLinkLeft>
            <StyledLinkLeft
              to="/adjustable"
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Adjustable
            </StyledLinkLeft>
            <StyledLinkLeft
              to="/accessories"
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Accessories
            </StyledLinkLeft>
          </Nav>
          <Nav>
            <StyledLinkRight
              to="/financing"
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Financing
            </StyledLinkRight>
            <StyledLinkRight
              to="/blog"
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Our Blog
            </StyledLinkRight>
            <StyledLinkRight
              to="/about"
              activeStyle={{
                borderBottom: `8px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              About Us
            </StyledLinkRight>
          </Nav>
        </>
      )}
    </ThemeConsumer>
  </Header>
);

export default Navigation;

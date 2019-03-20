import React from "react";
import { ThemeConsumer } from "styled-components";
import { Header, Nav, StyledLink } from "../styles/navStyles";

const Navigation = () => (
  <Header>
    <ThemeConsumer>
      {theme => (
        <>
          <Nav>
            <StyledLink
              left
              partiallyActive
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
              to="/brands"
            >
              Brands
            </StyledLink>
            <StyledLink
              left
              partiallyActive
              to="/adjustable"
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Adjustable
            </StyledLink>
            <StyledLink
              left
              partiallyActive
              to="/accessories"
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Accessories
            </StyledLink>
          </Nav>
          <Nav>
            <StyledLink
              right
              partiallyActive
              to="/financing"
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Financing
            </StyledLink>
            <StyledLink
              right
              partiallyActive
              to="/blog"
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              Our Blog
            </StyledLink>
            <StyledLink
              right
              partiallyActive
              to="/about"
              activeStyle={{
                borderRadius: "1px",
                borderBottom: `5px solid ${theme.mainColor2}`,
                borderTop: `0px solid ${theme.mainColor2}`,
              }}
            >
              About Us
            </StyledLink>
          </Nav>
        </>
      )}
    </ThemeConsumer>
  </Header>
);

export default Navigation;

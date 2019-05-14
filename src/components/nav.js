import React from "react";
import { ThemeConsumer } from "styled-components";
import { Header, Nav, StyledLink } from "../styles/navStyles";

const menuLeft = [
  { name: "Brands", url: "/brands" },
  { name: "Adjustable", url: "/adjustable" },
  { name: "Accessories", url: "/accessories" },
];
const menuRight = [
  { name: "Financing", url: "/financing" },
  { name: "Our Blog", url: "/blog" },
  { name: "About Us", url: "/about" },
];

const Navigation = () => (
  <Header>
    <ThemeConsumer>
      {theme => (
        <>
          <Nav>
            {menuLeft.map(item => (
              <StyledLink
                key={item.name}
                left="left"
                partiallyActive
                activeStyle={{
                  color: "#0d469b",
                  transform: "scale3d(1.05, 1.05, 1)",
                  transition: "all 0.3s ease-in-out",
                  borderRadius: "1px",
                  borderColor: `${theme.mainColor2}`,
                }}
                to={item.url}
              >
                {item.name}
              </StyledLink>
            ))}
          </Nav>
          <Nav>
            {menuRight.map(item => (
              <StyledLink
                key={item.name}
                right="right"
                partiallyActive
                to={item.url}
                activeStyle={{
                  color: "#0d469b",
                  transform: "scale3d(1.05, 1.05, 1)",
                  transition: "all 0.3s ease-in-out",
                  borderRadius: "1px",
                  borderColor: `${theme.mainColor2}`,
                }}
              >
                {item.name}
              </StyledLink>
            ))}
          </Nav>
        </>
      )}
    </ThemeConsumer>
  </Header>
);

export default Navigation;

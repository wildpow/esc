import React from "react";
import { ThemeConsumer } from "styled-components";
import { Header, Nav, StyledLink } from "./nav.styles";

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
                  transition: "all .5s ease-in-out",
                  // textShadow: "2px 2px 4px rgba(52, 52, 52, 0.2)",
                  borderColor: `${theme.mainColor2}`,
                  boxShadow: `0px 6px 6px -6px rgba(52,52,52,0.51)`,
                }}
                to={item.url}
                styles={{ transition: "all .5s ease-in-out" }}
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
                  transition: "all .5s ease-in-out",
                  // textShadow: "2px 2px 4px rgba(52, 52, 52, 0.2)",
                  borderColor: `${theme.mainColor2}`,
                  boxShadow: `0px 6px 6px -6px rgba(52,52,52,0.51)`,
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

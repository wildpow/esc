import React from "react";
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
              borderColor: `#343434`,
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
              borderColor: `#343434`,
              boxShadow: `0px 6px 6px -6px rgba(52,52,52,0.51)`,
            }}
          >
            {item.name}
          </StyledLink>
        ))}
      </Nav>
    </>
  </Header>
);

export default Navigation;

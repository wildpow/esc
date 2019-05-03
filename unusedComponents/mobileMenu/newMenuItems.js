import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SlideIn = keyframes`
  from { transform: translateX(60%); }
  to { transform: translateX(0); }
`;
const Container = styled.div`
  opacity: 0;
  animation: 0.7s ${Appear} forwards;
  animation-delay: ${props => props.delay};
  transition: all 0.5s ease-in-out;
`;

const AnimateWrapper = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  width: 100%;
  cursor: pointer;
  color: #fafafa;
  transition: background-color 0.2s ease-in-out;
  animation: 0.5s ${SlideIn} forwards;
  animation-delay: ${props => props.delay};

  background-color: ${props =>
    props.hover ? "rgba(17, 75, 95, 0.4)" : "inital"};
`;

export const Shrink = keyframes`
  0% {width: 0%; }
  100% { width: 90%; }
`;
const Line = styled.div`
  width: 0%;
  height: 1px;
  background: gray;
  margin: 0 auto;
  animation: 0.8s ${Shrink} forwards;
  animation-delay: ${props => props.delay};
`;

const ShiftTextOnHover = styled.div`
  transition: all 0.5s ease-in-out;
  transform: ${props => (props.hover ? "translateX(10px)" : "none")};
`;

const navItems = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/current-sale",
    label: "Sale",
  },
  {
    to: "/brands",
    label: "Brands",
  },
  {
    to: "/adjustable",
    label: "Adjustable",
  },
  {
    to: "/accessories",
    label: "Accessories",
  },
  {
    to: "/financing",
    label: "Financing",
  },
  {
    to: "/blog",
    label: "Our Blog",
  },
  {
    to: "/about",
    label: "About Us",
  },
  {
    to: "/warranty",
    label: "Warranty",
  },
  {
    to: "/policies",
    label: "Policies",
  },
  {
    to: "/sitemap",
    label: "Site Map",
  },
];

const MenuItems = () => {
  let indexCount = 0;
  const [hover, setHover] = useState(false);
  return (
    <>
      {navItems.map((val, index) => {
        indexCount += 1;
        return (
          <Container
            delay={`${index * 0.05}s`}
            hover={hover}
            key={indexCount * 255}
          >
            <AnimateWrapper
              delay={`${index * 0.05}s`}
              hover={hover}
              // onClick={onClick}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <ShiftTextOnHover hover={hover}>
                <Link to={val.to}>{val.label}</Link>
              </ShiftTextOnHover>
            </AnimateWrapper>
            <Line delay={`${index * 0.05}s`} />
          </Container>
        );
      })}
    </>
  );
};

export default MenuItems;

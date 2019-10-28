import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  overflow: hidden;
  position: relative;
  :hover .overlay {
    opacity: 1;
  }
  :hover .brand {
    transform: translate(-50%, -80%);
  }
`;
const Cover = styled(Img)`
  max-width: 100%;
  height: auto;
`;
const Brand = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  transition: All 0.3s ease-in-out;
  right: 0;
  width: 250px;
  bottom: 10%;
  max-width: 245px;
  z-index: 200;
`;
const Text = styled.p`
  opacity: 0;
  text-align: center;
  background: rgba(20, 20, 40, 0.4);
  position: absolute;
  /* top: 0; */
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in;
`;
const BrandItem = ({ cover, brand, route }) => (
  <StyledLink to={route}>
    <Cover fluid={cover} alt="wefwef" />
    <Brand src={brand} alt="wefwef" className="brand" />
    <Text className="overlay">
      Designed to deliver support where you need it most, Sealy supports you.
    </Text>
  </StyledLink>
);

export default BrandItem;

import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

const BrandLink = styled(Link)`
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

const BgImage = styled(Img)`
  position: absolute;
  /* filter: brightness(75%) saturate(140%);
  filter: brightness(80%) saturate(130%); */
  filter: brightness(85%) saturate(135%);
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const BrandLogo = styled.img`
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
  @media screen and (max-width: 550px) {
    width: 200px;
  }
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  text-align: center;
  background: rgba(20, 20, 40, 0.5);
  bottom: 0;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  align-items: flex-end;
  font-family: ${props => props.theme.MainFont3};
  font-size: 1.1rem;
  line-height: 1.7rem;
  text-shadow: 2px 2px 4px rgba(10, 10, 10, 1);
  h4 {
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    font-weight: 300;
  }
`;

export default {
  BrandLink,
  BgImage,
  BrandLogo,
  Content,
};

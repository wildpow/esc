import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

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
const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
`;

const FakeBgImage = styled(Img)`
  position: absolute;
  filter: brightness(75%) saturate(140%);
  filter: brightness(80%) saturate(130%);
  filter: brightness(85%) saturate(135%);

  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  /* z-index: -1; */

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
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
  }
`;

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
  brand,
}) => (
  <StyledLink to="/bands/sealy">
    <Parent bc={overlayColor}>
      <FakeBgImage
        fluid={fluid}
        title={title}
        height={height}
        mobileHeight={mobileHeight}
      />
      <Brand src={brand} className="brand" />
      <Content className="overlay">
        <h4 style={{ color: "white", fontWeight: "300" }}>{children}</h4>
      </Content>
    </Parent>
  </StyledLink>
);
BgImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
};

export default BgImage;

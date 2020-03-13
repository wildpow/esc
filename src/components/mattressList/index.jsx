import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import BreadCrumbs, { BreadWrapper } from "../breadCrumbs";
import {
  MainWrapper,
  Wrapper,
  // MainTitle,
  Img,
  StearnsImgPlaceHolder,
  SealyImgPlace,
} from "./mattList.styles";
import SealyImg from "../../images/sealyLogo.png";
import StearnsImg from "../../images/stearnsLogo.png";
import TempurImg from "../../images/tempurLogo2.png";
import SertaLogo from "../../images/sertaLogo.png";

const NewThing = styled.header`
  display: flex;
  margin-right: 60px;
  margin-left: 60px;
  border-bottom: 2px solid ${props => props.theme.mainColor1};
  margin-bottom: 20px;
  background-color: ${props => props.theme.newColor1};
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }

  a {
    align-self: flex-end;
    justify-self: flex-end;
    text-decoration: none;
    text-align: center;
    background-color: ${props => props.theme.mainColor1};
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    font-family: ${props => props.theme.MainFont1};
    text-transform: uppercase;
    transform-style: flat;
    transition: all ease 0.3s;
    letter-spacing: 0.18rem;
    font-size: 0.8rem;
    width: 120px;
    padding: 5px;
    &:active {
      box-shadow: 0 3px 0 #ccc;
      top: 3px;
      outline: none;
    }
    &:hover:enabled {
      background-color: ${props => props.theme.mainColor2};
      color: white;
      cursor: pointer !important;
    }
    &:active:enabled {
      background: ${props => props.theme.mainColor1} !important;
      box-shadow: inset 0px 0px 5px #c1c1c1 !important;
      outline: none;
    }
    @media (min-width: 360px) {
      width: 130px;
    }
    @media (orientation: landscape) and (max-width: 568px) {
      width: 160px;
    }
    @media (orientation: landscape) and (min-width: 569px) {
      width: 180px;
      padding: 7px;
    }
    @media screen and (max-width: 1024px) {
      margin-top: 10px;
    }
    @media screen and (max-width: 600px) {
      align-self: center;
      margin-top: 0px;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-family: ${props => props.theme.MainFont3};
    font-weight: 300;
    @media screen and (max-width: 600px) {
      display: none;
    }
    @media screen and (max-width: 768px) {
      margin-top: 0;
      font-size: 1.2rem;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 0;
      margin-top: 15px;
    }
  }
`;

const MattressList = ({
  children,
  seo,
  brandImgAlt,
  headerText,
  brandName,
  landing,
}) => {
  const brandImgTag = name => {
    if (name === "sealy")
      return <SealyImgPlace src={SealyImg} alt={brandImgAlt} />;
    if (name === "stearns")
      return <StearnsImgPlaceHolder src={StearnsImg} alt={brandImgAlt} />;
    if (name === "serta") return <Img src={SertaLogo} alt={brandImgAlt} />;
    return <Img src={TempurImg} alt={brandImgAlt} />;
  };
  return (
    <MainWrapper>
      <HelmetDatoCms seo={seo} />
      <BreadWrapper Brands>
        <BreadCrumbs next="Brands" here={brandName} />
      </BreadWrapper>
      <NewThing>
        {brandImgTag(brandName)}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{headerText}</p>
          {landing && (
            <Link to={`/brands/${brandName}/landing`}>Learn more</Link>
          )}
        </div>
      </NewThing>
      <Wrapper>{children}</Wrapper>
      <BreadWrapper Brands Bottom>
        <BreadCrumbs next="Brands" here={brandName} />
      </BreadWrapper>
    </MainWrapper>
  );
};

MattressList.defaultProps = {
  landing: true,
};

MattressList.propTypes = {
  seo: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
  headerText: PropTypes.string.isRequired,
  brandImgAlt: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  landing: PropTypes.bool,
};

export default MattressList;

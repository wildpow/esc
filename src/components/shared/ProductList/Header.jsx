import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../../utils/styles";

const HeaderWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  display: flex;
  background-color: white;
  flex-direction: column;
  background: white;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.MainFont1};
  a {
    align-self: flex-end;
    justify-self: flex-end;
    text-decoration: none;
    text-align: center;
    background-color: ${(props) => props.theme.mainColor1};
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    font-family: ${(props) => props.theme.MainFont1};
    text-transform: uppercase;
    transform-style: flat;
    transition: all ease 0.3s;
    letter-spacing: 0.18rem;
    font-size: 0.8rem;
    /* width: 120px; */
    padding: 10px;
    &:active {
      box-shadow: 0 3px 0 #ccc;
      top: 3px;
      outline: none;
    }
    &:hover:enabled {
      background-color: ${(props) => props.theme.mainColor2};
      color: white;
      cursor: pointer !important;
    }
    &:active:enabled {
      background: ${(props) => props.theme.mainColor1} !important;
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
      padding: 12px;
      margin-right: 20px;
      margin-bottom: 8px;
    }
    /* @media screen and (max-width: 1024px) {
      margin-top: 10px;
    } */
    @media screen and (max-width: 600px) {
      align-self: center;
      margin-top: 0px;
    }
  }
  .heading__content {
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    /* align-content: space-between; */
  }
  h2 {
    color: ${colors.blue["900"]};
    font-size: 1.35rem;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 10px;
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
    justify-self: flex-start;
    align-self: flex-start;
    padding-left: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    color: ${colors.gray["900"]};
    margin-bottom: 10px;
    margin-top: 10px;
    line-height: 1.25rem;
    font-family: ${(props) => props.theme.MainFont3};
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 360px) {
    h2 {
      font-size: 1.65rem;
    }
  }
  @media screen and (min-width: 730px) {
    background: url(${(props) => props.headerBG}) no-repeat;
    height: 200px;
    background-color: white;
    flex-direction: row;
    margin-bottom: 0px;
    .heading__content {
      max-width: 350px;
    }
    a {
      margin-right: 20px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1000px) {
    .heading__content {
      max-width: 550px;
    }
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-weight: 300;

      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media screen and (min-width: 1300px) {
    .heading__content {
      max-width: 650px;
    }
  }
`;
const Header = ({ description, title, headerBG, landing, brandName }) => {
  return (
    <HeaderWrapper headerBG={headerBG}>
      <div className="heading__content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {landing && <Link to={`/brands/${brandName}/landing`}>Learn more</Link>}
      </div>
    </HeaderWrapper>
  );
};
Header.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerBG: PropTypes.string,
  landing: PropTypes.bool,
  brandName: PropTypes.string,
};

Header.defaultProps = {
  headerBG: "",
  landing: false,
  brandName: "Test",
};

export default Header;

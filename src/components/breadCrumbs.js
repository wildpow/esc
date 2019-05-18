import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const BreadWrapper = styled.div`
  margin-top: ${props => (props.Bottom ? "0px" : "12px")};
  margin-bottom: ${props => (props.Bottom ? "0px" : "10px")};
  font-size: 0.9rem;
  font-weight: 400;
  color: ${props => props.theme.newColor2};
  font-family: ${props => props.theme.MainFont1};
  display: flex;
  margin-right: ${props => (props.Brands ? "15px" : "5px")};
  margin-left: ${props => (props.Brands ? "15px" : "5px")};

  @media (min-width: 568px) {
    font-size: 1rem;
    margin-right: ${props => (props.Brands ? "45px" : "5px")};
    margin-left: ${props => (props.Brands ? "45px" : "5px")};
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.2rem;
    display: ${props => (props.hidenLarge ? "none" : "flex")};
  }
  @media (min-width: 1300px) {
    margin-right: ${props => (props.Brands ? "55px" : "85px")};
    margin-left: ${props => (props.Brands ? "55px" : "85px")};
    margin-right: ${props => (props.Blog ? "220px" : "85px")};
    margin-left: ${props => (props.Blog ? "220px" : "85px")};
  }
  @media print {
    display: none;
  }
`;
const Span = styled.span`
  padding-right: 5px;
  padding-left: 5px;
  @media (min-width: 768px) {
    padding-right: 7px;
    padding-left: 7px;
  }
`;
const Crumbs = styled(Link)`
  color: ${props => props.theme.mainColor1};
  &:hover {
    color: ${props => props.theme.mainColor2};
  }
`;
const Location = styled.div`
  padding-bottom: 1px;
  @media (max-width: 610px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BreadCrumbs = props => {
  const { next, only2Links, only3Links, next2, error, here } = props;
  return (
    <>
      <Crumbs to="/">Home</Crumbs>
      <Span>&gt;</Span>
      {next && (
        <div>
          <Crumbs to={`/${next.toLowerCase()}`}>{next}</Crumbs>
          {!only2Links ? <Span>&gt;</Span> : ""}
        </div>
      )}
      {next2 && (
        <div>
          <Crumbs to={`/${next.toLowerCase()}/${next2.toLowerCase()}`}>
            {capitalizeFirstLetter(next2)}
          </Crumbs>
          {!only3Links ? <Span>&gt;</Span> : ""}
        </div>
      )}
      <Location>
        {error ? (
          <Crumbs
            to={`/${next.toLowerCase()}/${next2.toLowerCase()}/${here.toLowerCase()}`}
          >
            {here}
          </Crumbs>
        ) : (
          here
        )}
      </Location>
    </>
  );
};
BreadCrumbs.defaultProps = {
  next: "",
  next2: "",
  only2Links: "",
  only3Links: "",
  error: "",
};
BreadCrumbs.propTypes = {
  only2Links: PropTypes.string,
  only3Links: PropTypes.string,
  next: PropTypes.string,
  next2: PropTypes.string,
  error: PropTypes.string,
  here: PropTypes.string.isRequired,
};
export default BreadCrumbs;

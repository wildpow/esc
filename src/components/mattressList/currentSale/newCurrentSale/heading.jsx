import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import test from "../../../../images/new/test.jpg";
// import test2 from "../../../../images/new/test2.jpg";
// import test3 from "../../../../images/new/test3.jpg";
import test4 from "../../../../images/new/test4.jpg";
// import test5 from "../../../../images/new/test5.jpg";
// import test6 from "../../../../images/new/test6.jpg";

const HeaderWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  background-color: white;
  flex-direction: column;
  background: white;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  font-family: ${props => props.theme.MainFont1};
  h2 {
    font-size: 1.35rem;
    margin-bottom: 0px;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    justify-self: flex-start;
    align-self: flex-start;
    padding-left: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-bottom: 0px;
    margin-top: 10px;
    line-height: 1.25rem;
    font-family: ${props => props.theme.MainFont3};
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 730px) {
    background: url(${test4}) no-repeat;
    height: 200px;
    background-color: white;
    flex-direction: row;
    margin-bottom: 0px;
    .heading__content {
      max-width: 350px;
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
  @media screen and (min-width: 1000px) {
    .heading__content {
      max-width: 650px;
    }
  }
`;
const Heading = ({ description, title }) => {
  return (
    <HeaderWrapper>
      <div className="heading__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </HeaderWrapper>
  );
};
Heading.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Heading;

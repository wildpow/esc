import React from "react";
import styled from "styled-components";
import test from "../../../../images/new lifestyle/test.jpg";
import test2 from "../../../../images/new lifestyle/test2.jpg";
import test3 from "../../../../images/new lifestyle/test3.jpg";
import test4 from "../../../../images/new lifestyle/test4.jpg";
import test5 from "../../../../images/new lifestyle/test5.jpg";
import test6 from "../../../../images/new lifestyle/test6.jpg";

const HeaderWrapper = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  background: white;
  font-family: ${props => props.theme.MainFont1};
  h2 {
    margin-top: 5px;
    font-size: 1.2rem;
    margin-bottom: 5px;
    border-bottom: 2px solid ${props => props.theme.mainColor2};
    justify-self: flex-start;
    align-self: flex-start;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-bottom: 5px;
    font-size: 0.9rem;
    margin-top: 0px;
    /* line-height: 1.65rem; */
    font-weight: 300;
    font-family: ${props => props.theme.MainFont3};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    h2 {
      border-bottom: 4px solid ${props => props.theme.mainColor2};

      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
const Heading = ({ description, title }) => {
  return (
    <HeaderWrapper>
      <img src={test3} alt="bla" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </HeaderWrapper>
  );
};

export default Heading;

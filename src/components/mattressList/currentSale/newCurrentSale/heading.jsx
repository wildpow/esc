import React from "react";
import styled from "styled-components";
import test from "../../../../images/new lifestyle/test.jpg";
import test2 from "../../../../images/new lifestyle/test2.jpg";
import test3 from "../../../../images/new lifestyle/test3.jpg";
import test4 from "../../../../images/new lifestyle/test4.jpg";
import test5 from "../../../../images/new lifestyle/test5.jpg";
import test6 from "../../../../images/new lifestyle/test6.jpg";

const HeaderWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  font-family: ${props => props.theme.MainFont1};
  img {
    padding: 15px;
  }
  p {
    font-family: ${props => props.theme.MainFont3};
  }
`;
const Heading = ({ description, title }) => {
  return (
    <HeaderWrapper>
      <img src={test5} alt="bla" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </HeaderWrapper>
  );
};

export default Heading;

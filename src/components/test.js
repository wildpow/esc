import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;
const Test = ({ url }) => {
  return (
    <Wrapper>
      <Link to={url}>dfefw</Link>
    </Wrapper>
  );
};

export default Test;

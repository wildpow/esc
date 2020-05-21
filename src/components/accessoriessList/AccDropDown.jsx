import React from "react";
import styled from "styled-components";

const AccWrapper = styled.div`
  border-top: 1px solid #cacaca;
`;
const AccDropDown = ({ product }) => {
  return (
    <AccWrapper>
      {product.variants.length === 1 ? (
        <h1>No variants</h1>
      ) : (
        <h1>more variants</h1>
      )}
    </AccWrapper>
  );
};

export default AccDropDown;

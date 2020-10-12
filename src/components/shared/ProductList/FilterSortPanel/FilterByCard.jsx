import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { colors } from "../../../../utils/styles";

const FilterByCardRoot = styled.div`
  background-color: white;
  font-family: ${(props) => props.theme.MainFont1};
  background-color: white;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${colors.blue["900"]};
    padding-left: 20px;
    font-weight: 400;
    padding-bottom: 10px;
    font-size: 1.3rem;
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
  }
  label {
    padding-left: 20px;
    padding-bottom: 15px;
    color: ${colors.gray["700"]};
    pointer-events: none;
  }
  label:last-child {
    padding-bottom: 20px;
  }
`;

const FilterByCard = ({ children, heading }) => {
  return (
    <FilterByCardRoot>
      <h3>{heading}</h3>
      {children}
    </FilterByCardRoot>
  );
};

const childrenPropTypeLogic = (props, propName, componentName) => {
  const prop = props[propName];
  return (
    React.Children.toArray(prop).find((child) => child.type !== "label") &&
    new Error(`${componentName} only accepts "label" elements`)
  );
};

FilterByCard.defaultProps = {
  heading: "Test",
};

FilterByCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: childrenPropTypeLogic,
  heading: PropTypes.string,
};

export default FilterByCard;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  color: ${props => (props.isActive ? "white" : "#93959b")};
  /* color: #93959b; */
  font-size: 17px;
  padding: 10px 15px;
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  background-color: none;
  background: ${props => (props.isActive ? "#c8645d" : "none")};
  border: none;
  :hover {
    background-color: #c8645d;
    color: white;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;
const Tab = ({ tabID, children, setActiveTab, activeTab }) => {
  const isActive = activeTab === tabID;
  return (
    <Button onClick={() => setActiveTab(tabID)} isActive={isActive}>
      {children}
    </Button>
  );
};

export default Tab;

Tab.propTypes = {
  tabID: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number,
};

Tab.defaultProps = {
  activeTab: 0,
};

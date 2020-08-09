import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../utils/styles";

const Button = styled.button`
  color: ${(props) => (props.isActive ? "white" : colors.gray["700"])};
  font-size: 17px;
  padding: 10px 15px;
  font-family: ${(props) => props.theme.MainFont1};
  text-decoration: none;
  background-color: none;
  background: ${(props) => (props.isActive ? colors.red["800"] : "white")};
  border: none;
  transition: all 0.2s ease;
  :hover {
    background-color: ${colors.red["900"]};
    color: white;
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

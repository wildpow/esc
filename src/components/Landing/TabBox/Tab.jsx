import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, fonts } from "../../../styles/theme.styled";

const Button = styled.button`
  color: ${({ isActive }) => (isActive ? "white" : "#93959b")};
  font-size: 17px;
  padding: 10px 15px;
  font-family: ${fonts.sans};
  text-decoration: none;
  background-color: none;
  background: ${({ isActive }) => (isActive ? colors.red[800] : "none")};
  border: none;
  transition: all 0.2s ease;
  :hover {
    background-color: ${colors.blue[800]};
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

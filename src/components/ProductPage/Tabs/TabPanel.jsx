import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { colors, fonts } from "../../../styles/theme.styled";

const TabPanelWrapper = styled.section`
  background-color: ${colors.white};
  padding: 20px 10px;
  /* display: flex;
  flex-direction: column; */
  position: relative;
  ::after {
    top: 0px;
    left: 0px;
    content: "";
    width: 100%;
    z-index: 1;
    height: 4px;
    position: absolute;
    background-color: ${colors.brandRed};
  }
  .tableFlex {
    /* display: flex; */
    max-width: 600px;
    margin: 0 auto;
  }
  table {
    width: 100%;
    font-family: ${fonts.sans};
    border-collapse: collapse;
    td,
    th {
      padding: 1rem;
      vertical-align: top;
      text-align: start;
    }
    thead {
      border-bottom: 2px solid ${colors.gray[400]};
    }
    tbody tr {
      border-bottom: 2px solid ${colors.gray[900]};
    }
  }
  @media (min-width: 560px) {
    margin-bottom: 10px;
    padding: 20px;
    ::after {
      top: -4px;
      left: 4px;
      height: 4px;
      width: 100%;
      background-color: ${colors.brandRed};
    }
  }
  @media (min-width: 768px) {
    table {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 1022px) {
    table {
      font-size: 1.35rem;
    }
  }
`;
export default function TabPanel({ children, id, tabId, index, selectedTab }) {
  const hidden = selectedTab !== index;
  return (
    <TabPanelWrapper
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
      hidden={selectedTab !== index}
      tabIndex={selectedTab === index ? 0 : -1}
    >
      {children}
    </TabPanelWrapper>
  );
}
TabPanel.defaultProps = {
  selectedTab: 1,
};
TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  selectedTab: PropTypes.number,
  index: PropTypes.number.isRequired,
  tabId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

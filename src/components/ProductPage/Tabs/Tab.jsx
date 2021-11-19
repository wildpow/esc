import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, fonts, rounded } from "../../../styles/theme.styled";

const TabWrapper = styled.li`
  button {
    transition: all 0.2s ease;
    :hover {
      background-color: ${({ selectedTab, index }) =>
        selectedTab === index ? "" : colors.gray[300]};
      color: ${({ selectedTab, index }) =>
        selectedTab === index ? "" : colors.blue[700]};
    }
    position: relative;
    z-index: 10;
    background-color: ${({ selectedTab, index }) =>
      selectedTab === index ? colors.white : colors.gray[200]};
    border: none;
    font-weight: 700;
    padding: 5px 10px 10px 10px;
    color: ${colors.blue["900"]};
    font-family: ${fonts.serif};
    font-size: 0.9rem;
    margin-right: 10px;
    cursor: ${({ selectedTab, index }) =>
      selectedTab === index ? "default" : "pointer"};
    border-left: 4px solid ${colors.brandRed};
    border-right: 4px solid ${colors.brandRed};
    border-top: 4px solid ${colors.brandRed};
    border-top-left-radius: ${rounded.md};
    border-top-right-radius: ${rounded.md};
    ::after {
      transition: all 0.1s ease;

      bottom: 0px;
      left: 0px;
      content: "";
      width: 100%;
      z-index: 1;
      height: 4px;
      position: absolute;
      background-color: ${({ selectedTab, index }) =>
        selectedTab === index ? "transparent" : colors.brandRed};
    }
  }
  @media (min-width: 360px) {
    button {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 550px) {
    button {
      /* font-size: 2rem; */
    }
  }
  @media (min-width: 992px) {
    button {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 1300px) {
    button {
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;
export default function Tab({
  id,
  title,
  selectedTab,
  index,
  tabPanelId,
  handleChange,
  tabRef,
}) {
  const handleClick = () => handleChange(index);
  return (
    <TabWrapper role="presentation" selectedTab={selectedTab} index={index}>
      <button
        type="button"
        role="tab"
        id={id}
        aria-selected={selectedTab === index}
        aria-controls={tabPanelId}
        tabIndex={selectedTab === index ? 0 : -1}
        onClick={handleClick}
        ref={tabRef}
      >
        {title}
      </button>
    </TabWrapper>
  );
}
Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectedTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  tabPanelId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  // tabRef: PropTypes.oneOfType([
  //   PropTypes.func,
  //   PropTypes.shape({ current: PropTypes.instanceOf(Component) }),
  // ]).isRequired,
};

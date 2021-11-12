import PropTypes from "prop-types";

export default function TabPanel({ children, id, tabId, index, selectedTab }) {
  return (
    <>
      <section
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        hidden={selectedTab !== index}
        tabIndex={selectedTab === index ? 0 : -1}
      >
        {children}
      </section>
    </>
  );
}

TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  selectedTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  tabId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

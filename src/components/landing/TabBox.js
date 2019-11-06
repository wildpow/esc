import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";
import TabHero from "./TabHero";
import AnimatedBox from "./AnimatedBox";

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TabBox = ({ tabs, hero, heroText }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Header>
        <TabHero hero={hero} heroText={heroText} />
        <LinkHolder>
          {tabs.map((data, i) => {
            return (
              <Tab
                tabID={i}
                key={data.title}
                setActiveTab={setCurrent}
                activeTab={current}
              >
                {data.title}
              </Tab>
            );
          })}
        </LinkHolder>
      </Header>
      <div style={{ paddingBottom: "0px" }}>
        <AnimatedBox current={current} tabs={tabs} />
      </div>
    </>
  );
};

export default TabBox;

TabBox.propTypes = {
  heroText: PropTypes.string.isRequired,
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
  tabs: PropTypes.shape([
    {
      description: PropTypes.string,
      picture: PropTypes.objectOf(PropTypes.string),
      title: PropTypes.string,
    },
  ]).isRequired,
};

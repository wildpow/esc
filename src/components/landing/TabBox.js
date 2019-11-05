import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";
import TabHero from "./TabHero";

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabImg = styled(Img)`
  width: 50%;
  @media screen and (max-width: 992px) {
    max-width: 528px;
    width: 100%;
  }
`;

const TabContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    max-width: 528px;
    width: 100%;
  }
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TabContainer>
          <TabImg
            fluid={tabs[current].picture.fluid}
            alt={tabs[current].picture.alt}
          />
          <TabContent>
            <h4>{tabs[current].title.toUpperCase()}</h4>
            <div
              dangerouslySetInnerHTML={{ __html: tabs[current].description }}
            />
          </TabContent>
        </TabContainer>
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

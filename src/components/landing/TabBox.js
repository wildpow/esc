import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";
import TabHero from "./TabHero";
import AnimatedBox from "./AnimatedBox";
import { useWindowDimensions } from "../context/WindowDimensions";
import arrowDown from "../../images/whitedownArrow.png";

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Select = styled.select`
  font-weight: 500;
  letter-spacing: 0.1rem;
  background-color: rgb(200, 100, 93);
  color: rgb(255, 255, 255);
  width: 100%;
  margin-bottom: 1em;
  font-size: 18px;
  font-family: ${props => props.theme.MainFont1};
  background-image: url(${arrowDown});
  background-size: 17px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 8px;
  background-position: 97% 50%;
  text-indent: 0.01px;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 0 0;
  appearance: none;
`;
const TabBox = ({ tabs, hero, heroText }) => {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowDimensions();
  return (
    <>
      <Header>
        <TabHero hero={hero} heroText={heroText} />
        <LinkHolder>
          {width > 770 ? (
            <>
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
            </>
          ) : (
            <Select onChange={e => setCurrent(e.target.value)}>
              {tabs.map((data, i) => (
                <option value={i} key={data.title}>
                  {data.title}
                </option>
              ))}
            </Select>
          )}
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

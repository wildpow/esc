import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useWindowSize } from "../../context/WindowSizeContext";
import Tab from "./Tab";
import arrowDown from "../../images/whitedownArrow.png";
import AnimatedBox from "./AnimatedBox";
import { P } from "./Landing.styled";

const TabHeroImg = styled(Img)`
  /* max-width: 100%;
  height: auto;
  vertical-align: middle; */
  max-width: ${(props) => props.width}px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
`;

const Select = styled.select`
  font-weight: 500;
  letter-spacing: 0.1rem;
  background-color: rgb(200, 100, 93);
  color: rgb(255, 255, 255);
  width: 100%;
  margin-bottom: 1em;
  font-size: 18px;
  font-family: ${(props) => props.theme.MainFont1};
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
const Holder = styled.div`
  @media screen and (max-width: 981px) {
    height: 90vh;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 568px) {
    height: initial;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 320px) {
    height: initial;
    margin-bottom: 0px;
  }
  @media screen and (orientation: landscape) {
    height: initial;
  }
`;
const TabBox = ({ tabs, hero, heroText }) => {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowSize();
  return (
    <Holder>
      <header>
        <TabHeroImg
          fluid={hero.fluid}
          alt={hero.alt}
          title={hero.title}
          width={hero.width}
        />
        <P>{heroText}</P>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
            <Select onChange={(e) => setCurrent(e.target.value)}>
              {tabs.map((data, i) => (
                <option value={i} key={data.title}>
                  {data.title}
                </option>
              ))}
            </Select>
          )}
        </div>
      </header>
      <AnimatedBox current={current} tabs={tabs} />
    </Holder>
  );
};

TabBox.propTypes = {
  heroText: PropTypes.string.isRequired,
  hero: PropTypes.shape({
    fluid: PropTypes.instanceOf(Object),
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
  tabs: PropTypes.instanceOf(Array).isRequired,
};

export default TabBox;

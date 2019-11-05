import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
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
  justify-content: center;
  padding-right: 45px;
  padding-left: 45px;
  @media screen and (max-width: 992px) {
    max-width: 528px;
    width: 100%;
  }
  h4 {
    font-family: ${props => props.theme.MainFont3};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  p {
    margin-top: 0;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 300;
    line-height: 1.9rem;
    font-size: 1.2rem;
  }
  ul {
    line-height: 1.6rem;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 400;
    list-style: none;
  }
  ul li {
    margin-bottom: 5px;
    padding-left: 1em;
    position: relative;
    font-weight: 300;
    line-height: 1.9rem;
    font-size: 1.2rem;
    ::after {
      content: "";
      height: 0.3em;
      width: 0.3em;
      background: #00103b;
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 0.4em;
      left: 0;
    }
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Holder = styled.div`
  position: relative;
  height: 316px;
  @media screen and (max-width: 992px) {
    height: 632px;
    height: 452px;
  }
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

      <NodeGroup
        data={[current]}
        keyAccessor={d => d}
        start={() => ({
          opacity: 0,
        })}
        enter={() => ({
          opacity: [1],
          timing: { duration: 300 },
        })}
        update={() => ({
          opacity: [1],
          timing: { duration: 300 },
        })}
        leave={() => ({
          opacity: [0],
          timing: { duration: 300 },
        })}
      >
        {nodes => (
          <Holder>
            {nodes.map(({ key, data, state: { opacity } }) => (
              <TabContainer style={{ position: "absolute", opacity }} key={key}>
                <TabImg
                  fluid={tabs[data].picture.fluid}
                  alt={tabs[data].picture.alt}
                />
                <TabContent>
                  <h4>{tabs[data].title.toUpperCase()}</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: tabs[data].description,
                    }}
                  />
                </TabContent>
              </TabContainer>
            ))}
          </Holder>
        )}
      </NodeGroup>
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

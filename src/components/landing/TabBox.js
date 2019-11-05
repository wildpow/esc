import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";

const LogoContainer = styled.div`
  text-align: center;
  p {
    color: #00103b;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.MainFont3};
  }

  @media only screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;
const Logo = styled(Img)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  max-width: ${props => props.width}px;
  margin: 0 auto;
  text-align: center;
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const Hr = styled.hr`
  border-top: 1px solid #eee;
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`;

const TabContainer = styled.div`
  /* display: "flex", flexDirection: "row", width: "100%" */
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
const TabBox = ({ tabs, hero, heroText }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      {console.log(hero)}
      {/* <div>
        <Hr />
      </div> */}
      <LogoContainer>
        <Logo
          fluid={hero.fluid}
          alt={hero.alt}
          title={hero.title}
          width={hero.width}
        />
        <p>{heroText}</p>
      </LogoContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
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

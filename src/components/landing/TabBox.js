import React, { useState } from "react";
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
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 30px;
  }
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

const TabBox = ({ tabs, hero, heroText }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div>
        <Hr />
      </div>
      <LogoContainer>
        <img src={hero.url} alt={hero.alt} title={hero.title} />
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
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <img src={tabs[current].picture.url} alt="wefewf" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              transition: "all .2s ease",
            }}
          >
            <h4>{tabs[current].title.toUpperCase()}</h4>
            <div
              dangerouslySetInnerHTML={{ __html: tabs[current].description }}
            />
          </div>
        </div>
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

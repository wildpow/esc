import React from "react";
import { NodeGroup } from "react-move";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Holder = styled.div`
  position: relative;
  height: 316px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 90px;
  }
  @media screen and (max-width: 992px) {
    height: 632px;
    height: 452px;
    height: 515px;
    margin-bottom: 130px;
    /* margin-left: 5px;
    margin-right: 5px; */
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 375px) {
    height: 450px;
    /* margin-top: 200px; */
    margin-bottom: 50px;
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
    /* max-width: 528px; */
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
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
    margin-bottom: 0;
    @media screen and (max-width: 375px) {
      font-size: 1rem;
      line-height: 1.7rem;
    }
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

const TabImg = styled(Img)`
  width: 50%;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
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

const AnimatedBox = ({ tabs, current }) => {
  return (
    <Holder>
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
    </Holder>
  );
};

AnimatedBox.propTypes = {
  current: PropTypes.number,
  tabs: PropTypes.shape([
    {
      description: PropTypes.string,
      picture: PropTypes.objectOf(PropTypes.string),
      title: PropTypes.string,
    },
  ]).isRequired,
};

AnimatedBox.defaultProps = {
  current: 0,
};
export default AnimatedBox;

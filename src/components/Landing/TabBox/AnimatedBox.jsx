import { NodeGroup } from "react-move";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { fonts } from "../../../styles/theme.styled";
import ExternalLinkSvg from "../../../svgs/external-link-alt-solid.svg";

const LinkWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    a {
      width: 100%;
    }
  }
  font-family: ${fonts.sans};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00103b;
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.2s ease;
    padding: 10px 25px;

    :hover {
      background: #c8645d;
    }
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    height: 1em;
    margin-left: ${({ iconOnLeft }) => (iconOnLeft ? 0 : "0.5em")};
    margin-right: ${({ iconOnLeft }) => (iconOnLeft ? "0.5em" : 0)};
    width: 1em;
  }
`;
const Holder = styled.div`
  position: relative;
  height: 316px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 90px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 416px;
  }
  @media screen and (min-width: 1024px) and (orientation: portrait) {
    height: 400px;
  }
  @media screen and (max-width: 992px) {
    height: 632px;
    height: 452px;
    height: 515px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 375px) {
    height: 520px;
    margin-bottom: 50px;
    margin-top: 0px;
  }
`;

const TabContent = styled.div`
  .tabContent__lastWrapper {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 45px;
  padding-left: 45px;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
  h4 {
    font-family: ${fonts.serif};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  p {
    margin-top: 0;
    font-family: ${fonts.sans};
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
    font-family: ${fonts.sans};
    font-weight: 400;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }
  ul li {
    margin-bottom: 5px;
    padding-left: 1em;
    position: relative;
    font-weight: 300;
    line-height: 1.9rem;
    font-size: 1.1rem;
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

const TabImg = styled(GatsbyImage)`
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
    height: 570px;
  }
`;

const AnimatedBox = ({ tabs, current }) => (
  <NodeGroup
    data={[current]}
    keyAccessor={(d) => d}
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
    {(nodes) => (
      <Holder>
        {nodes.map(({ key, data, state: { opacity } }) => (
          <TabContainer style={{ position: "absolute", opacity }} key={key}>
            <TabImg
              image={tabs[data].picture.gatsbyImageData}
              alt={tabs[data].picture.alt}
            />
            <TabContent>
              <h4>{tabs[data].title.toUpperCase()}</h4>
              <div
                className="tabContent__lastWrapper"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: tabs[data].description,
                }}
              />
              {tabs[data].buttonUrl && tabs[data].buttonText ? (
                <LinkWrapper iconOnLeft>
                  <a
                    href={tabs[data].buttonUrl}
                    inverse
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkSvg />
                    {tabs[data].buttonText}
                  </a>
                </LinkWrapper>
              ) : null}
            </TabContent>
          </TabContainer>
        ))}
      </Holder>
    )}
  </NodeGroup>
);

AnimatedBox.propTypes = {
  current: PropTypes.number,
  tabs: PropTypes.instanceOf(Array).isRequired,
};

AnimatedBox.defaultProps = {
  current: 0,
};
export default AnimatedBox;

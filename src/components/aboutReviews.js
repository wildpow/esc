import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { NodeGroup } from "react-move";
import TruncateMarkup from "react-truncate-markup";
import star from "../images/stars.svg";
import Loading from "./loading";

const InsideWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 680px;
  height: 300px;
  text-align: center;

  padding-right: 5px;
  padding-left: 5px;
  @media (min-width: 568px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (min-width: 1024px) {
    max-width: 900px;
  }
  @media (min-width: 1366px) {
    max-width: 1100px;
  }
`;
const ReadMore = styled.a`
  color: ${props => props.theme.mainColor1};
  transition: all 250ms ease-in-out;
  text-decoration: none;
  font-family: ${props => props.theme.MainFont1};
  font-weight: 500;
  font-size: 0.9em;
  :hover {
    color: ${props => props.theme.mainColor2};
  }
`;
const Wrap = styled.div`
  /* margin: 50px auto; */
  margin-bottom: 120px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-bottom: 170px;
    margin-top: 20px;
  }
  /* @media (min-width: 1024px) {
    margin-bottom: 170px;
    margin-top: 20px;
  } */
`;
const Name = styled.span`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 700;
  line-height: 21px;
  font-size: 12px;
  color: ${props => props.theme.newColor2};
  text-align: center;
  justify-self: center;

  @media (min-width: 768px) {
    font-size: 15px;
    letter-spacing: 0.05rem;
  }
  @media (min-width: 1024px) {
    font-size: 21px;
    letter-spacing: 0.05rem;
  }
  /* margin-top: 22px !important; */
`;
const Review = styled.p`
  font-family: ${props => props.theme.MainFont3};
  line-height: 1.3em;
  font-size: 14px;
  font-weight: 300;
  color: #2d3e50;
  /* text-align: center; */
  justify-self: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  margin: 14px auto;
  @media (min-width: 768px) {
    margin: 22px auto;
    font-size: 22px;
    line-height: 1.2em;
  }
  @media (min-width: 1024px) {
    /* margin: 22px auto;
    font-size: 22px; */
    line-height: 1.4em;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 22px;
  align-self: center;
  justify-self: center;
  @media (min-width: 768px) {
    height: 30px;
  }
  @media (min-width: 1024px) {
    height: 35px;
  }
  @media (min-width: 1366px) {
    height: 45px;
  }
`;
class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      currentIndex: 1,
      pause: false,
      content: [],
      maxIndex: 0,
    };
    this.loop = this.loop.bind(this);
  }

  componentDidMount() {
    axios
      .get(process.env.GATSBY_REST)
      .then(res => {
        const { data } = res;
        const filteredData = data.filter(val => val.comments !== null);
        const maxIndex = filteredData.length - 1;
        this.setState({
          content: filteredData,
          loading: false,
          maxIndex,
        });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
    this.loop();
  }

  componentDidUpdate() {
    if (
      this.state.maxIndex === this.state.currentIndex &&
      this.state.pause === false
    ) {
      this.setState({ currentIndex: 0 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  loop() {
    setInterval(() => {
      if (!this.state.pause) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      }
    }, 5000);
  }

  render() {
    const { content, error, loading, currentIndex } = this.state;
    const readMore = (
      <span>
        {`  ...`}
        <ReadMore
          target="_blank"
          rel="noopener noreferrer"
          href={
            content[currentIndex]
              ? `https://birdeye.com/esc-mattress-center-154743411347922/review/${
                  content[currentIndex].reviewId
                }`
              : "https://birdeye.com/esc-mattress-center-154743411347922"
          }
        >
          read more
        </ReadMore>
      </span>
    );
    if (loading) return <Loading />;
    if (error) return null;
    return (
      <Wrap
        onMouseEnter={() => this.setState({ pause: true })}
        onMouseLeave={() => this.setState({ pause: false })}
      >
        <Content>
          <Img
            src={star}
            alt="E.S.C mattress centers average review is 5 stars"
          />
          <NodeGroup
            style={{ position: "relative" }}
            data={[currentIndex]}
            keyAccessor={d => d}
            start={() => ({
              opacity: 0,
            })}
            enter={() => ({
              opacity: [1],
              timing: { duration: 1000 },
            })}
            update={() => ({
              opacity: [1],
              timing: { duration: 1000 },
            })}
            leave={() => ({
              opacity: [0],
              timing: { duration: 200 },
            })}
          >
            {nodes => (
              <div style={{ position: "relative" }}>
                {nodes.map(({ key, data, state: { opacity } }) => (
                  <div key={key} style={{ opacity, position: "relative" }}>
                    <InsideWrapper>
                      <TruncateMarkup lines={3} ellipsis={readMore}>
                        <Review>{content[data].comments}</Review>
                      </TruncateMarkup>
                      <Name>
                        {`- ${content[data].reviewer.firstName} `}
                        {`${content[data].reviewer.lastName}`}
                      </Name>
                    </InsideWrapper>
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        </Content>
      </Wrap>
    );
  }
}

export default Reviews;

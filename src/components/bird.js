import React, { PureComponent } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import axios from "axios";
import styled from "styled-components";
import Certified from "../images/badge.png";
import star from "../images/star.png";
import BirdBig from "./birdBig";
import Loading from "./loading";

const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

const BirdLink = styled(OutboundLink)`
  text-decoration: none;
  @media (min-width: 1366px) {
    display: none;
  }
`;

const CertReview = styled.div`
  transition: all 0.25s ease-in;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  width: 145px;
  height: 75px;
  /* width: 270px;
  height: 180px; */
  font-family: ${props => props.theme.MainFont2};
  font-weight: 100;
  box-shadow: ${props => props.theme.BoxShadow};
  background-color: ${props => props.theme.mainColor1};
  display: flex;
  color: white;
  border-radius: 5px;
  justify-content: space-between;
  div h4 {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    line-height: 1.1em;
    letter-spacing: 0.14em;
    height: 90px;
    div h4 {
      font-size: 0.9rem;
    }
  }
  @media print {
    color: black;
    box-shadow: none;
    text-shadow: none;
  }
`;

const Words = styled.div`
  padding: 7px 0 0 9px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-top: 10px;
    padding-left: 10px;
  }
`;
const Cert = styled.img`
  margin-top: -3px;
  margin-right: 7px;
  width: 45px;
  justify-self: start;
  height: 70px;
  transform: scale(0.9);
`;

const Rating = styled.div`
  padding-top: 3px;
  display: flex;
  img {
    width: 15px;
    height: 15px;
  }
  @media (min-width: 768px) {
    padding-top: 5px;
  }
`;

const BigWrapper = styled.div`
  display: none;
  @media (min-width: 1366px) {
    display: initial;
  }
`;

const AvgContainer = styled.div`
  margin-top: 2px;
  font-size: 0.8em;
  margin-left: 4px;
  font-family: ${props => props.theme.MainFont1};
  @media (min-width: 812px) {
    margin-top: 0px;
    font-size: 0.9em;
  }
`;
class Bird extends PureComponent {
  constructor() {
    super();
    this.state = {
      avg: "",
      count: 0,
      errorState: false,
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get(process.env.GATSBY_REST)
      .then(res => {
        const { data } = res;
        const e = data.map(i => i.rating);
        const p = e.filter(val => val !== 0 && val !== null);
        this.setState({ count: data.length, avg: average(p), loading: false });
      })
      .catch(error => {
        this.setState({ errorState: true, loading: false });
        console.log(error);
      });
  }

  render() {
    const { count, avg, loading, errorState } = this.state;
    let content;
    const starsArr = [];
    for (let i = 0; i < Math.round(avg); i += 1) {
      starsArr.push(<img src={star} alt="start for rating" key={i + 200} />);
    }
    if (loading) {
      content = <Loading />;
    } else if (errorState) {
      content = <></>;
    } else {
      content = (
        <>
          <BirdLink
            href="https://birdeye.com/esc-mattress-center-154743411347922"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CertReview>
              <Words>
                <h4>{count}</h4>
                <h4>Certified</h4>
                <h4>Reviews</h4>
                <Rating>
                  {starsArr}
                  <AvgContainer>{Math.round(avg)}</AvgContainer>
                </Rating>
              </Words>
              <Cert alt="BirdEye certified seal" src={Certified} />
            </CertReview>
          </BirdLink>
          <BigWrapper>
            <BirdBig avg={avg} count={count} star={star} />
          </BigWrapper>
        </>
      );
    }
    return <>{content}</>;
  }
}

export default Bird;

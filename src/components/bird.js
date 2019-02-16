import React, { Component } from "react";
import styled from "styled-components";
import Certified from "../images/badge.png";
import star from "../images/star.png";
import BirdBig from "./birdBig";

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

const BirdLink = styled.a`
  text-decoration: none;
  @media (min-width: 1366px) {
    display: none;
  }
`;

const CertReview = styled.div`
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
class Bird extends Component {
  constructor() {
    super();
    this.state = {
      avg: "",
      count: 0,
    };
  }

  componentWillMount() {
    fetch(process.env.GATSBY_REST, {
      headers: { Accept: "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        const e = data.map(i => i.rating);
        const p = e.filter(val => val !== 0);
        this.setState({
          count: data.length,
          avg: average(p),
        });
      });
  }

  render() {
    const { count, avg } = this.state;
    return (
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
                {Array(avg).fill(<img src={star} alt="start for rating" />)}
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
}

export default Bird;

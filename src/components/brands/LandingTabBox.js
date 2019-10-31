import React, { useState } from "react";
import styled from "styled-components";

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
  button {
    color: #93959b;
    font-size: 17px;
    padding: 10px 15px;
    font-family: ${props => props.theme.MainFont1};
    text-decoration: none;
    background-color: none;
    background: none;
    border: none;
    :hover {
      background-color: #c8645d;
      color: white;
    }
  }
`;

const Hr = styled.hr`
  border-top: 1px solid #eee;
  /* border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  z-index: 1000; */
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`;
const Carousel = ({ car, topImg, topP }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      {console.log(car)}
      <div>
        <Hr />
      </div>
      <LogoContainer>
        <img src={topImg} alt="erfewfg" />
        <p>{topP}</p>
      </LogoContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LinkHolder>
          {car.map((c, i) => {
            return (
              <button type="button" key={c.title} onClick={() => setCurrent(i)}>
                {c.title}
              </button>
            );
          })}
        </LinkHolder>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <img src={car[current].picture.url} alt="wefewf" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>{car[current].title.toUpperCase()}</h4>
            <div
              dangerouslySetInnerHTML={{ __html: car[current].description }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

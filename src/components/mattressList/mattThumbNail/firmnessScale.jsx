import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Firmness = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  left: 0;
  /* border: 2px solid black; */
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  div {
    position: relative;
  }
  .firm {
    font-family: ${props => props.theme.MainFont1};
    /* padding-left: 10px; */
    color: black;
    width: 20%;
    text-align: center;
  }
  .soft {
    font-family: ${props => props.theme.MainFont1};
    /* padding-right: 10px; */
    color: black;
    width: 20%;
    text-align: center;
  }
  .scale {
    height: 15px;
    width: 80%;
    position: relative;
    background: #EAEAED;
    display: flex;
    :after {
      content: "";
      width: 30%;
      height: 15px;
      background-image: linear-gradient(to left, #EAEAED 0%, #1565C0 100%); 
    }
    :before {
      content: "";
      background: #1565c0;
      height: 15px;
      width: ${props => props.firmNum};
    }
  }
  /* .number2 {
    font-family: ${props => props.theme.MainFont1};
    left: ${props => props.firmNum};

    width: 35px;
    height: 35px;
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    background: ${props => props.theme.mainColor1};
    color: white;

    background: #fcfcff;
    border: 1px solid ${props => props.theme.mainColor1};
    color: black;
  } */
  /* .poop {
    background: #1565c0;
    height: 15px;
    width: ${props => props.firmNum};
  }
  .number {
    width: 30%;
    height: 15px; */
    
/*   
    background: -moz-linear-gradient(left, #1565c0 0%, #ffffff 100%);
    background: -webkit-linear-gradient(left, #1565c0 0%, #ffffff 100%);
    background: linear-gradient(to right, #1565c0 0%, #ffffff 100%); */

    /* background-image: linear-gradient(to left, #EAEAED 0%, #1565C0 100%);  } */
`;

const FirmnessScale = ({ firmNum }) => {
  const firmnessPosition = num => {
    switch (num) {
      case 1:
        return `0%`;
      case 2:
        return `10%`;
      case 3:
        return `30%`;
      case 4:
        return `55%`;
      case 5:
        return `70%`;
      default:
        return undefined;
    }
  };
  return (
    <Firmness firmNum={firmnessPosition(firmNum)}>
      <div className="firm">Firm</div>
      <div className="scale" />
      <div className="soft">Soft</div>
    </Firmness>
  );
};

FirmnessScale.propTypes = {
  firmNum: PropTypes.number.isRequired,
};

export default FirmnessScale;

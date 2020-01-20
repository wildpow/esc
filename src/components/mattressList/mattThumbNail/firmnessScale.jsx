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
    border: 1px solid #f7d0d1;
    width: 80%;
    position: relative;
    background: ${props => props.theme.newColor4};
  }
  .number {
    font-family: ${props => props.theme.MainFont1};
    left: ${props => props.firmNum};
    /* border-radius: 50%; */
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
  }
`;

const FirmnessScale = ({ firmNum }) => {
  const firmnessPosition = num => {
    switch (num) {
      case 1:
        return `5%`;
      case 2:
        return `20%`;
      case 3:
        return `40%`;
      case 4:
        return `60%`;
      case 5:
        return `76%`;
      default:
        return undefined;
    }
  };
  return (
    <Firmness firmNum={firmnessPosition(firmNum)}>
      <div className="firm">Firm</div>
      <div className="scale">
        <div className="number">{firmNum}</div>
      </div>
      <div className="soft">Soft</div>
    </Firmness>
  );
};

FirmnessScale.propTypes = {
  firmNum: PropTypes.number.isRequired,
};

export default FirmnessScale;

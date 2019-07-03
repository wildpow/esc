import React, { useReducer } from "react";
import styled from "styled-components";
import { FlexCol } from "../styles/mainStyles";

const Wrapper = styled(FlexCol)`
  margin-left: 5px;
  justify-content: center;
  @media (min-width: 1024px) {
    margin-left: 25px;
    margin-top: 10px;
    border-left: ${props => props.theme.Border};
  }
  @media (min-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (min-width: 1300px) {
    margin-top: 0px;
  }
`;

const DropDownWrapper = styled.div`
  align-self: flex-end;
  @media print {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h4 {
    margin-bottom: 2px;
    margin-top: 0px;
    font-family: ${props => props.theme.MainFont2};
    font-size: 0.9rem;
    @media (min-width: 567px) {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1300px) {
      margin-top: 2px;
    }
    @media print {
      font-size: 1.2rem;
    }
  }
`;
export const DropDown = styled.select`
  color: white;
  cursor: pointer;
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont2};
  width: 150px;
  @media (min-width: 360px) {
    width: 160px;
  }
  @media (min-width: 411px) {
    width: 180px;
  }
  @media (min-width: 567px) {
    width: auto;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    padding: 8px;
    border-radius: 0.18rem;
    line-height: 20px;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 20px;
    line-height: 25px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 30px;
    padding: 15px;
    font-size: 1.3rem;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  @media (min-width: 1200px) {
    padding: 20px 20px 20px 20px;
  }
  @media (min-width: 1300px) {
    margin-bottom: 10px;
  }
  @media print {
    border-color: black;
    color: black;
    font-size: 1.2rem;
    width: 220px;
  }
`;
export const DropDownSize = styled(DropDown)`
  @media (min-width: 567px) {
    padding-right: 123px;
  }
  @media (min-width: 768px) {
    padding-right: 143px;
  }
  @media (min-width: 1024px) {
    padding-right: 170px;
  }
`;

const Wrap = styled.div`
  transition: ${props =>
    props.size === ""
      ? `opacity 0ms ease-in-out`
      : `opacity 250ms ease-in-out`};
  opacity: ${props => (props.size === "" ? 0 : 1)};
  @media (min-width: 375px) {
    margin-bottom: 5px;
    margin-top: 10px;
  }
`;

const BeforeSalePrice = styled.h6`
  opacity: ${props => (props.discount > 1 && props.price !== 0 ? 1 : 0)};
  font-family: ${props => props.theme.MainFont2};
  margin-top: 2px;
  margin-bottom: 0px;
  text-decoration: line-through;
  text-decoration-color: ${props => props.theme.mainColor2};
  -webkit-text-decoration-color: ${props => props.theme.mainColor2};
  -moz-text-decoration-color: ${props => props.theme.mainColor2};
  text-align: right;
  @media (min-width: 360px) {
    margin-top: 4px;
  }
  @media (min-width: 567px) {
    margin-top: 8px;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  @media print {
    font-size: 1.3rem;

    margin-top: 20px;
  }
`;

export const Total = styled.h4`
  transition: ${props =>
    props.price === 0
      ? `opacity 0ms ease-in-out`
      : `opacity 250ms ease-in-out`};
  opacity: ${props => (props.price === 0 ? 0 : 1)};
  margin-top: 0px;
  font-family: ${props => props.theme.MainFont2};
  margin-bottom: 2px;
  font-size: 1rem;
  text-align: right;
  @media (min-width: 567px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
  @media print {
    font-size: 1.7rem;
  }
`;
const PriceDropDown = ({ price, discount }) => {
  const initialState = { size: "", price: "" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "twin":
        return { size: "Twin", price: price.twin };
      case "twinxl":
        return { size: "TwinXL", price: price.twinxl };
      case "full":
        return { size: "Full", price: price.full };
      case "queen":
        return { size: "Queen", price: price.queen };
      case "king":
        return { size: "King/Cal. King", price: price.king };
      default:
        return { size: "", price: "" };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Wrapper>
      <DropDownWrapper>
        <h4>{`PRICE: ${state.size}`}</h4>
        <div>
          <DropDownSize onChange={e => dispatch({ type: e.target.value })}>
            <option value="none">Select Size</option>
            <option value="twin">Twin</option>
            <option value="twinxl">Twin Extra Long</option>
            <option value="full">Full</option>
            <option value="queen">Queen</option>
            <option value="king">King/Cal. King</option>
          </DropDownSize>
        </div>
      </DropDownWrapper>
      <Wrap size={state.size}>
        <BeforeSalePrice discount={discount} price={state.price}>
          {discount > 1 && state.price !== 0 ? `$${state.price}` : `Same`}
        </BeforeSalePrice>

        {/* </div> */}
        {state.price === 0 ? (
          <Total>Size is Unavailable</Total>
        ) : (
          <Total price={state.price}>
            {discount > 1
              ? `TOTAL: ${state.price - discount}`
              : `TOTAL: ${state.price}`}
          </Total>
        )}
      </Wrap>
    </Wrapper>
  );
};

export default PriceDropDown;

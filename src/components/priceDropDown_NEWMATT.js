import React, { useReducer } from "react";
import styled from "styled-components";

const Select = styled.select`
  opacity: ${props => (props.index !== "" && props.price !== 0 ? 1 : 0)};
  transition: opacity 250ms ease-in;
`;

const H4 = styled.h4`
  opacity: ${props => (props.index !== "" ? 1 : 0)};
  transition: opacity 250ms ease-in;
`;

function reducer(state, action) {
  switch (action.type) {
    case "twin":
      return { name: "Twin", index: "twin", boxAdded: true };
    case "twinxl":
      return { name: "TwinXL", index: "twinxl", boxAdded: true };
    case "full":
      return { name: "Full", index: "full", boxAdded: true };
    case "queen":
      return { name: "Queen", index: "queen", boxAdded: true };
    case "king":
      return { name: "King/Cal. King", index: "king", boxAdded: true };
    case "noBox":
      return {
        boxAdded: true,
        name: state.name,
        index: state.index,
      };
    case "addBox":
      return {
        name: state.name,
        index: state.index,
        boxAdded: false,
      };

    default:
      return { name: "", index: "", boxAdded: true };
  }
}
const starting = { name: "", index: "", boxAdded: false };
function DropDown({ discount, prices, freeBoxSpring, boxPrices }) {
  const [state, dispatch] = useReducer(reducer, starting);
  return (
    <>
      <div>
        <h4>{`PRICE: ${state.name}`}</h4>
        <div>
          <select onChange={e => dispatch({ type: e.target.value })}>
            <option value="none">Select Size</option>
            <option value="twin">Twin</option>
            <option value="twinxl">Twin Extra Long</option>
            <option value="full">Full</option>
            <option value="queen">Queen</option>
            <option value="king">King/Cal. King</option>
          </select>
        </div>
      </div>
      <div>
        <H4 index={state.index}>
          {prices[state.index] !== 0 ? "Add a Box Spring" : "Size Unavailable"}
        </H4>
        <div>
          <Select
            disabled={state.boxAdded}
            price={prices[state.index]}
            index={state.index}
            onChange={e => dispatch({ type: e.target.value })}
          >
            <option value="noBox">No box</option>
            <option value="addBox">Added box</option>
          </Select>
        </div>
        {console.log(state.boxAdded)}
      </div>
    </>
  );
}

export default DropDown;

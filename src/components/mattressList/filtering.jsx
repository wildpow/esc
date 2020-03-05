import React, { useReducer, useState } from "react";
import MattressThumb from "./mattThumbNail";
import Tester from "./test";

const Filtering = ({ mattresses }) => {
  // const [matts, setMatts] = useState(mattresses);
  const stater = { poop: [...mattresses] };

  function reducer(state, action) {
    // let filtered;
    switch (action.type) {
      case "low-high":
        console.log("swefewfewf");
        // mattresses.map(matt => console.log(matt.priceLow));

        // filtered = state.sort((a, b) => a.priceLow - b.priceLow);
        // filtered.map(matt => console.log(matt.priceLow));
        return { poop: state.poop.sort((a, b) => a.priceLow - b.priceLow) };
      // return setMatts(filtered);
      case "high-low":
        // mattresses.map(matt => console.log(matt.priceLow));
        // console.log("eeeee");
        // filtered = state.sort((a, b) => b.priceLow - a.priceLow);
        // filtered.map(matt => console.log(matt.priceLow));
        return { poop: state.poop.sort((a, b) => b.priceLow - a.priceLow) };
      // return setMatts(filtered);
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, stater);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "low-high" })}>
        low-high
      </button>
      <button type="button" onClick={() => dispatch({ type: "high-low" })}>
        high-low
      </button>
      {/* {console.log(state.poop.map(p => console.log(p.priceLow)))} */}
      {stater.poop.map(p => console.log("starter", p.priceLow))}
      <Tester matt={stater.poop} />
    </div>
  );
};

export default Filtering;

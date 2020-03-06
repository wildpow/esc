import React, { useState, useReducer } from "react";
import {
  MainWrapper,
  Wrapper2,
  P,
  Headline,
  Wrapper,
} from "../mattList.styles";
import MattressThumb from "../mattThumbNail";

const CurrentSale = ({ title, description, mattresses }) => {
  const [firmness, setFirmness] = useState(0);
  function reducer(state, action) {
    switch (action.type) {
      case "low-high":
        return [...state].sort((a, b) => a.priceLow - b.priceLow);
      case "high-low":
        return [...state].sort((a, b) => b.priceLow - a.priceLow);
      case "name a-z":
        return [...state].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? 1 : -1;
        });
      case "name z-a":
        return [...state].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? -1 : 1;
        });
      // case "default":
      //   return mattresses;
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, mattresses);
  return (
    <MainWrapper>
      <Wrapper2>
        <Headline>{title}</Headline>
        <P>{description}</P>
        <div>
          <select
            name="sorting"
            onChange={e => dispatch({ type: e.target.value })}
          >
            <option value="low-high">PRICE (LOW-HIGH)</option>
            <option value="high-low">PRICE (HIGH-LOW)</option>
            <option value="name a-z">NAME (A-Z)</option>
            <option value="name z-a">NAME (Z-A)</option>
            {/* <option value="default">DEFAULT</option> */}
          </select>
          <div>
            <input
              type="range"
              min="0"
              max="5"
              value={firmness}
              onChange={e => setFirmness(e.target.value)}
            />
            <label>{firmness}</label>
          </div>
        </div>
      </Wrapper2>
      <Wrapper>
        {state.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))}
      </Wrapper>
    </MainWrapper>
  );
};

export default CurrentSale;

import React, { useReducer } from "react";
import styled from "styled-components";
import {
  MainWrapper,
  Wrapper2,
  P,
  Headline,
  Wrapper,
} from "../mattList.styles";
import MattressThumb from "../mattThumbNail";

const SortingWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  label {
    display: flex;
    flex-direction: column;
  }
  .scaleLabel {
    display: flex;
    justify-content: space-between;
  }
  #firmness {
    width: 200px;
  }
  .checkbox {
    display: flex;
    flex-direction: row;
  }
`;

const CurrentSale = ({ title, description, mattresses }) => {
  const initalState = {
    mattresses,
    beforeFilter: mattresses,
    checkBoxs: [
      { id: 0, value: "Extra Firm", isChecked: false, firmness: 1 },
      { id: 1, value: "Firm", isChecked: false, firmness: 2 },
      { id: 2, value: "Medium", isChecked: false, firmness: 3 },
      { id: 3, value: "Plush", isChecked: false, firmness: 4 },
      { id: 4, value: "Ultra Plush", isChecked: false, firmness: 5 },
    ],
    firmnessNums: [],
  };

  function reducer(state, action) {
    let newCheckBoxs = state.checkBoxs;
    let newFirmnessNumbs = [];
    switch (action.type) {
      case "low-high":
        return {
          ...state,
          mattresses: [...state.mattresses].sort(
            (a, b) => a.priceLow - b.priceLow,
          ),
          beforeFilter: [...mattresses].sort((a, b) => a.priceLow - b.priceLow),
        };
      case "high-low":
        return {
          ...state,
          mattresses: [...state.mattresses].sort(
            (a, b) => b.priceLow - a.priceLow,
          ),
          beforeFilter: [...mattresses].sort((a, b) => b.priceLow - a.priceLow),
        };
      case "name a-z":
        return {
          ...state,
          mattresses: [...state.mattresses].sort((a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? 1 : -1;
          }),
          beforeFilter: [...mattresses].sort((a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? 1 : -1;
          }),
        };
      case "name z-a":
        return {
          ...state,
          mattresses: [...state.mattresses].sort((a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? -1 : 1;
          }),
          beforeFilter: [...mattresses].sort((a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? -1 : 1;
          }),
        };
      case "check":
        console.log(newFirmnessNumbs);

        newCheckBoxs.forEach(checkBox => {
          if (checkBox.value === action.payload) {
            newCheckBoxs[Number(checkBox.id)].isChecked = !newCheckBoxs[
              Number(checkBox.id)
            ].isChecked;
          }
          if (checkBox.isChecked) newFirmnessNumbs.push(checkBox.firmness);
        });
        newCheckBoxs.map(m => console.log("reducer", m));

        return {
          mattresses: state.beforeFilter.filter(matt =>
            newFirmnessNumbs.includes(matt.firmness),
          ),
          checkBoxs: newCheckBoxs,
          firmnessNums: newFirmnessNumbs,
          beforeFilter: state.beforeFilter,
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <MainWrapper>
      <Wrapper2>
        <Headline>{title}</Headline>
        <P>{description}</P>
        <SortingWrapper>
          <div>
            <label htmlFor="sorting">
              Sort Order
              <select
                name="sorting"
                onChange={e => dispatch({ type: e.target.value })}
                id="sorting"
              >
                <option value="low-high">PRICE (LOW-HIGH)</option>
                <option value="high-low">PRICE (HIGH-LOW)</option>
                <option value="name a-z">NAME (A-Z)</option>
                <option value="name z-a">NAME (Z-A)</option>
                {/* <option value="default">DEFAULT</option> */}
              </select>
            </label>
          </div>
          {console.log(state.firmnessNums, "state")}
          {state.checkBoxs.map(m => console.log("state", m))}
          <div className="checkboxWrapper">
            {state.checkBoxs.map(checkBox => {
              return (
                <label
                  key={checkBox.value}
                  htmlFor={checkBox.value}
                  checked={checkBox.isChecked}
                  className="checkbox"
                >
                  <input
                    type="checkbox"
                    value={checkBox.value}
                    id={checkBox.value}
                    onChange={e =>
                      dispatch({ type: "check", payload: e.target.value })
                    }
                  />
                  {checkBox.value}
                </label>
              );
            })}
          </div>
        </SortingWrapper>
      </Wrapper2>
      <Wrapper>
        {state.mattresses.map(mattress => (
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

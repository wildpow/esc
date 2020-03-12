import React, { useReducer } from "react";
import styled from "styled-components";
import { NodeGroup } from "react-move";
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
      { id: 0, value: "Extra Firm", firmness: 1 },
      { id: 1, value: "Firm", firmness: 2 },
      { id: 2, value: "Medium", firmness: 3 },
      { id: 3, value: "Plush", firmness: 4 },
      { id: 4, value: "Ultra Plush", firmness: 5 },
    ],
    firmnessNums: [],
  };

  function reducer(state, action) {
    let newFirmnessNumbs;
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
        newFirmnessNumbs = [...state.firmnessNums];
        if (newFirmnessNumbs.includes(action.id)) {
          newFirmnessNumbs = newFirmnessNumbs.filter(
            item => item !== action.id,
          );
        } else {
          newFirmnessNumbs.push(action.id);
        }
        return {
          ...state,
          mattresses:
            newFirmnessNumbs.length !== 0
              ? state.beforeFilter.filter(matt =>
                  newFirmnessNumbs.includes(matt.firmness),
                )
              : state.beforeFilter,
          firmnessNums: newFirmnessNumbs,
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
              </select>
            </label>
          </div>
          <div className="checkboxWrapper">
            {state.checkBoxs.map(checkBox => {
              return (
                <label
                  key={checkBox.value}
                  htmlFor={checkBox.value}
                  className="checkbox"
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      dispatch({
                        type: "check",
                        id: checkBox.firmness,
                      });
                    }}
                  />
                  {checkBox.value}
                </label>
              );
            })}
            results:
            {state.firmnessNums.length !== 0 ? state.mattresses.length : null}
          </div>
        </SortingWrapper>
      </Wrapper2>

      {console.log(state.mattresses)}
      <NodeGroup
        data={[...state.mattresses]}
        keyAccessor={d => d.id}
        start={() => ({
          opacity: 0,
        })}
        enter={() => ({
          opacity: [1],
          timing: { duration: 500 },
        })}
        update={() => ({
          opacity: [1],
          timing: { duration: 500 },
        })}
        leave={() => ({
          opacity: [0],
          timing: { duration: 500 },
        })}
      >
        {nodes => (
          <Wrapper>
            {nodes.map(({ key, data, state: { opacity } }) => (
              <div key={key} style={{ opacity }}>
                <MattressThumb
                  key={data.id}
                  mattress={data}
                  url={`/brands/${data.brand.urlName}/${data.slug}`}
                />
              </div>
            ))}
          </Wrapper>
        )}
      </NodeGroup>
      {/* {state.mattresses.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))} */}
    </MainWrapper>
  );
};

export default CurrentSale;

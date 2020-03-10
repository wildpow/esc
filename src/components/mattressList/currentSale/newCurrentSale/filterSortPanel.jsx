import React from "react";
import styled from "styled-components";
import Accordion from "./accordion";
import Chevron from "./chevron";

const SortingWrapper = styled.div`
  display: flex;
  padding-right: 15px;
  /* padding-left: 15px; */
  width: 20%;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
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
  .poop {
    position: relative;
  }
`;
const Select = styled.select`
  color: white;
  cursor: pointer;
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont1};
  width: 100%;
  @media (min-width: 567px) {
    /* width: auto; */
    -moz-appearance: none;
    -webkit-appearance: none;
    /* outline: none; */
    padding: 8px;
    border-radius: 0.18rem;
    line-height: 20px;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 20px;
    line-height: 25px;
    /* width: 100%; */
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
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /* width: 220px; */
  }
  /* option {
    max-width: 100px;
  } */
`;
const FilterSortPanel = ({ dispatch, checkBoxs, length }) => {
  return (
    <SortingWrapper>
      <div className="poop">
        {/* <label htmlFor="sorting">
          Sort Order */}
        <Select
          name="sorting"
          onChange={e => dispatch({ type: e.target.value })}
          id="sorting"
        >
          <option value="" hidden>
            SORT BY
          </option>
          <option value="low-high">PRICE (LOW-HIGH)</option>
          <option value="high-low">PRICE (HIGH-LOW)</option>
          <option value="name a-z">NAME (A-Z)</option>
          <option value="name z-a">NAME (Z-A)</option>
        </Select>
        <Chevron width={10} fill={"#777"} className={``} />
        {/* </label> */}
      </div>
      <Accordion title="COMFORT">
        <div className="checkboxWrapper">
          {checkBoxs.map(checkBox => {
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
          {length !== 0 ? length : null}
        </div>
      </Accordion>
    </SortingWrapper>
  );
};

export default FilterSortPanel;

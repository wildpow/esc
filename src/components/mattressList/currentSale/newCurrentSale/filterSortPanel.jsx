import React from "react";
import styled from "styled-components";
import Accordion from "./accordion";
import Chevron from "./chevron";

const SortingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
  .poop {
    background-color: #eee;
    color: #444;
    cursor: pointer;

    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
    font-family: ${props => props.theme.MainFont1};
    margin-bottom: 10px;
  }
  select {
    width: 100%;
    /* padding: 18px; */
    padding-left: 18px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .checkboxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    height: auto;
    padding: 20px 10px 0;
    margin: 0;
  }
  li {
    font-size: 1.2rem;
    line-height: 1.3125rem;
    margin-bottom: 15px;
  }
  .checkbox {
    margin-right: 9px;
    margin-left: 18px;
  }

  .filter__icon {
    transform: rotate(90deg);
    margin-right: 18px;
    margin-left: auto;
    transition: transform 0.6s ease;
  }
`;

const FilterSortPanel = ({ dispatch, checkBoxs, length }) => {
  return (
    <SortingWrapper>
      <div className="poop">
        {/* <label htmlFor="sorting">
          Sort Order */}
        <select
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
        </select>
        <Chevron width={15} fill={"#777"} className="filter__icon" />
        {/* </label> */}
      </div>
      <Accordion title="COMFORT">
        <ul className="checkboxWrapper">
          {checkBoxs.map(checkBox => {
            return (
              <li key={checkBox.value}>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => {
                    dispatch({
                      type: "check",
                      id: checkBox.firmness,
                    });
                  }}
                />
                {checkBox.value}
              </li>
            );
          })}
          {/* results:
          {length !== 0 ? length : null} */}
        </ul>
      </Accordion>
    </SortingWrapper>
  );
};

export default FilterSortPanel;

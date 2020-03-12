import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import chevron from "../../../../images/new/chevron-down-solid.svg";
import Accordion from "./accordion";

const FilterSort = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
  .filterSort__select {
    display: block;
    font-size: 16px;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url(${props => props.bg}),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    /* background-size: 0.65em auto, 100%; */
    background-size: 1.2em auto, 100%;
  }
  .filterSort__select::-ms-expand {
    display: none;
  }
  .filterSort__select:hover {
    border-color: #888;
  }
  .filterSort__select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .filterSort__select option {
    font-weight: normal;
  }
`;

const FilterSortPanel = ({ dispatch, checkBoxs }) => {
  return (
    <FilterSort bg={chevron}>
      <select
        className="filterSort__select"
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
      <Accordion title="FILTER BY">
        <ul className="filterSort__confort">
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
    </FilterSort>
  );
};

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checkBoxs: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

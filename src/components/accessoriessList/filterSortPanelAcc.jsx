import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import chevron from "../../images/new/chevron-down-solid.svg";
import Accordion from "../mattressList/accordion";
import Checkbox from "../mattressList/checkBox";

const FilterSort = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
  @media screen and (min-width: 768px) {
    padding-left: 0;
    width: 20%;
  }
  .filterSort__select {
    display: block;
    font-size: 16px;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 700;
    color: white;
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
      linear-gradient(to bottom, #0069ed 0%, #0069ed 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 1.2em auto, 100%;
    margin-bottom: 20px;
    padding: 1rem 2rem 1rem 1rem;
    transition: background 250ms ease-in-out, transform 150ms ease;
  }
  /* .filterSort__select:active {
    transform: scale(0.99);
  } */
  .filterSort__select::-ms-expand {
    display: none;
  }
  .filterSort__select:hover {
    background-image: url(${props => props.bg}),
      linear-gradient(to bottom, #0053ba 0%, #0053ba 100%);
  }
  .filterSort__select:focus {
    background-image: url(${props => props.bg}),
      linear-gradient(to bottom, #0053ba 0%, #0053ba 100%);
    border-color: white;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: white;
    outline: none;
  }
  .filterSort__select option {
    font-weight: normal;
  }
  .filterSort__confort {
    background-color: white;
    font-family: ${props => props.theme.MainFont1};
    background-color: white;
    display: flex;
    flex-direction: column;
    h3 {
      padding-left: 20px;
      font-weight: 400;
      padding-bottom: 10px;
      font-size: 1.3rem;
      border-bottom: 4px solid ${props => props.theme.mainColor2};
    }
    label {
      padding-left: 20px;
      padding-bottom: 15px;
    }
    label:last-child {
      padding-bottom: 20px;
    }
  }
`;

const FilterSortPanel = ({ dispatch, types }) => {
  const toggleCheck = (e, index, value) => {
    // const newChecked = checked;
    // newChecked[index].checked = e.target.checked;
    // setChecked([...newChecked]);
    dispatch({
      type: "type",
      index,
      value,
      checked: e.target.checked,
    });
  };
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
        <div className="filterSort__confort">
          <h3>Type</h3>
          {types.map((type, index) => {
            return (
              <label htmlFor={type.value} key={type.value}>
                <Checkbox
                  id={type.value}
                  checked={type.checked}
                  onChange={e => toggleCheck(e, index, type.value)}
                />
                <span style={{ marginLeft: 8 }}>{type.value}</span>
              </label>
            );
          })}
        </div>
      </Accordion>
    </FilterSort>
  );
};

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checkBoxs: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

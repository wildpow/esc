import React from "react";
import styled from "styled-components";
import Accordion from "./accordion";

const SortingWrapper = styled.div`
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
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
`;

const FilterSortPanel = ({ dispatch, checkBoxs, length }) => {
  return (
    <SortingWrapper>
      <div>
        {/* <label htmlFor="sorting">
          Sort Order */}
        <select
          name="sorting"
          onChange={e => dispatch({ type: e.target.value })}
          id="sorting"
        >
          <option value="none">SORT BY</option>
          <option value="low-high">PRICE (LOW-HIGH)</option>
          <option value="high-low">PRICE (HIGH-LOW)</option>
          <option value="name a-z">NAME (A-Z)</option>
          <option value="name z-a">NAME (Z-A)</option>
        </select>
        {/* </label> */}
      </div>
      <Accordion
        title="COMFORT"
        content="<p>dlkgjnsekjfakljfwjenfkljwenfkljewfnwefbnewkjfnjklwefnwekljfnklwefnweklfnkwefnwef</p>"
      />
      {/* <div className="checkboxWrapper">
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
      </div> */}
    </SortingWrapper>
  );
};

export default FilterSortPanel;

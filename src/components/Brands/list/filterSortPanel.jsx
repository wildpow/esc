import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FilterByCard,
  SortBy,
  FilterSortRoot,
  Accordion,
  Checkbox,
} from "../../shared/ProductList/FilterSortPanel";

const FilterSortPanel = ({ dispatch, comfortCheckBoxes, brandCheckBoxes }) => {
  const [checked, setChecked] = useState([
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
  ]);

  const toggleCheck = (e, index, firmness) => {
    const newChecked = checked;
    newChecked[index].checked = e.target.checked;
    setChecked([...newChecked]);
    dispatch({
      type: "check",
      id: firmness,
    });
  };
  return (
    <FilterSortRoot>
      {console.log(comfortCheckBoxes, brandCheckBoxes)}
      <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
      <Accordion title="FILTER BY">
        <FilterByCard heading="Brand">
          {brandCheckBoxes.map((type, index) => {
            return (
              <label htmlFor={type.displayName} key={type.displayName}>
                <Checkbox
                  id={type.urlParam}
                  checked={type.checked}
                  onChange={(e) => toggleCheck(e, index, type.value)}
                />
                <span style={{ marginLeft: 8 }}>{type.displayName}</span>
              </label>
            );
          })}
        </FilterByCard>
        <FilterByCard heading="Comfort">
          {comfortCheckBoxes.map((checkBox) => {
            return (
              <label htmlFor={checkBox.displayName} key={checkBox.urlParam}>
                <Checkbox
                  id={checkBox.urlParam}
                  checked={checkBox.checked}
                  firmness={checkBox.firmness}
                  onChange={(e) =>
                    toggleCheck(e, checkBox.id, checkBox.firmness)
                  }
                />
                <span style={{ marginLeft: 8 }}>{checkBox.displayName}</span>
              </label>
            );
          })}
        </FilterByCard>
      </Accordion>
    </FilterSortRoot>
  );
};

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comfortCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  brandCheckBoxes: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

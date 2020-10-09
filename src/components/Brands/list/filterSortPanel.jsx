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
  const [brandCheck, setBrandCheck] = useState([
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
  ]);
  const toggleBrand = (e, index, value) => {
    e.stopPropagation();
    dispatch({
      type: "brand",
      index,
      value,
      checked: e.target.checked,
    });
  };
  const toggleCheck = (e, index, firmness) => {
    e.stopPropagation();
    const newChecked = checked;
    newChecked[index].checked = e.target.checked;
    setChecked([...newChecked]);
    dispatch({
      type: "comfort",
      id: firmness,
    });
  };
  return (
    <FilterSortRoot>
      <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
      <Accordion title="FILTER BY">
        <FilterByCard heading="Brand">
          {brandCheckBoxes.map((brandBox, index) => {
            return (
              <label htmlFor={brandBox.displayName} key={brandBox.displayName}>
                <Checkbox
                  id={brandBox.displayName}
                  checked={brandBox.checked}
                  onChange={(e) => toggleBrand(e, index, brandBox.urlParam)}
                />
                <span style={{ marginLeft: 8 }}>{brandBox.displayName}</span>
              </label>
            );
          })}
        </FilterByCard>
        <FilterByCard heading="Comfort">
          {comfortCheckBoxes.map((checkBox) => {
            return (
              <label htmlFor={checkBox.displayName} key={checkBox.displayName}>
                <Checkbox
                  id={checkBox.displayName}
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

import { useState } from "react";
import PropTypes from "prop-types";
import {
  FilterByCard,
  SortBy,
  FilterSortRoot,
  Accordion,
  Checkbox,
} from "../FilterSortPanel";

const FilterSortPanel = ({ dispatch, checkBoxs }) => {
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
      <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
      <Accordion title="FILTER BY">
        <FilterByCard heading="Comfort">
          {checkBoxs.map((checkBox) => (
            <label htmlFor={checkBox.value} key={checkBox.value}>
              <Checkbox
                key={checkBox.value}
                id={checkBox.value}
                checked={checked[checkBox.id].checked}
                firmness={checkBox.firmness}
                onChange={(e) => toggleCheck(e, checkBox.id, checkBox.firmness)}
              />
              <span style={{ marginLeft: 8 }}>{checkBox.value}</span>
            </label>
          ))}
        </FilterByCard>
      </Accordion>
    </FilterSortRoot>
  );
};

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checkBoxs: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

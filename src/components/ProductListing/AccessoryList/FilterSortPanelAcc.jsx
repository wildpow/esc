import PropTypes from "prop-types";
import {
  FilterByCard,
  SortBy,
  FilterSortRoot,
  Accordion,
  Checkbox,
} from "../FilterSortPanel";

const FilterSortPanel = ({ dispatch, typeCheckBoxs }) => {
  const toggleCheck = (e, index, value) => {
    dispatch({
      type: "type",
      index,
      value,
      checked: e.target.checked,
    });
  };
  return (
    <FilterSortRoot>
      <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
      <Accordion title="FILTER BY">
        <FilterByCard heading="Type">
          {typeCheckBoxs.map((type, index) => (
            <label htmlFor={type.value} key={type.value}>
              <Checkbox
                id={type.value}
                checked={type.checked}
                onChange={(e) => toggleCheck(e, index, type.value)}
              />
              <span style={{ marginLeft: 8 }}>{type.displayName}</span>
            </label>
          ))}
        </FilterByCard>
      </Accordion>
    </FilterSortRoot>
  );
};

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  typeCheckBoxs: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

/* eslint-disable react/jsx-curly-newline */
import PropTypes from "prop-types";
import {
  FilterByCard,
  SortBy,
  FilterSortRoot,
  Accordion,
  Checkbox,
} from "../FilterSortPanel";

const FilterSortPanel = ({ dispatch, comfortCheckBoxes, brandCheckBoxes }) => (
  <FilterSortRoot>
    <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
    <Accordion title="FILTER BY">
      <FilterByCard heading="Brand">
        {brandCheckBoxes.map((brandBox, index) => (
          <label htmlFor={brandBox.displayName} key={brandBox.displayName}>
            <Checkbox
              id={brandBox.displayName}
              checked={brandBox.checked}
              onChange={(e) =>
                dispatch({
                  type: "brand",
                  index,
                  value: brandBox.urlParam,
                  checked: e.target.checked,
                })
              }
            />
            <span style={{ marginLeft: 8 }}>{brandBox.displayName}</span>
          </label>
        ))}
      </FilterByCard>
      <FilterByCard heading="Comfort">
        {comfortCheckBoxes.map((checkBox) => (
          <label htmlFor={checkBox.displayName} key={checkBox.displayName}>
            <Checkbox
              id={checkBox.displayName}
              checked={checkBox.checked}
              firmness={checkBox.firmness}
              onChange={(e) =>
                dispatch({
                  type: "comfort",
                  index: checkBox.id,
                  id: checkBox.firmness,
                  checked: e.target.checked,
                })
              }
            />
            <span style={{ marginLeft: 8 }}>{checkBox.displayName}</span>
          </label>
        ))}
      </FilterByCard>
    </Accordion>
  </FilterSortRoot>
);

FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comfortCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  brandCheckBoxes: PropTypes.instanceOf(Object).isRequired,
};
export default FilterSortPanel;

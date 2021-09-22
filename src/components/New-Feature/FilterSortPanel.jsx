import PropTypes from "prop-types";
import {
  FilterSortRoot,
  SortBy,
  Accordion,
  Checkbox,
} from "./FilterSortComponents";

export default function FilterSortPanel({
  dispatch,
  comfortCheckBoxes,
  brandCheckBoxes,
  typeCheckBoxes,
}) {
  return (
    <FilterSortRoot>
      <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
      <Accordion title="Brands">
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
      </Accordion>
      bla bla
    </FilterSortRoot>
  );
}
FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comfortCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  brandCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  typeCheckBoxes: PropTypes.instanceOf(Object).isRequired,
};

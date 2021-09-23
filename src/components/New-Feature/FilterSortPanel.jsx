import PropTypes from "prop-types";
import {
  FilterSortRoot,
  SortBy,
  Accordion,
  Checkbox,
} from "./FilterSortComponents";
import ClientOnly from "./ClientOnlyCheck";

export default function FilterSortPanel({
  dispatch,
  comfortCheckBoxes,
  brandCheckBoxes,
  typeCheckBoxes,
}) {
  return (
    <FilterSortRoot>
      {/* <SortBy onChange={(e) => dispatch({ type: e.target.value })} /> */}
      <ClientOnly>
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
      </ClientOnly>
      <ClientOnly>
        <Accordion title="Comfort">
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
        </Accordion>
      </ClientOnly>
      <ClientOnly>
        <Accordion title="Type">
          {typeCheckBoxes.map((type, index) => (
            <label htmlFor={type.displayName} key={type.displayName}>
              <Checkbox
                id={type.displayName}
                checked={type.checked}
                onChange={(e) =>
                  dispatch({
                    type: "type",
                    index,
                    value: type.urlParam,
                    checked: e.target.checked,
                  })
                }
              />
              <span style={{ marginLeft: 8 }}>{type.displayName}</span>
            </label>
          ))}
        </Accordion>
      </ClientOnly>
    </FilterSortRoot>
  );
}
FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comfortCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  brandCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  typeCheckBoxes: PropTypes.instanceOf(Object).isRequired,
};

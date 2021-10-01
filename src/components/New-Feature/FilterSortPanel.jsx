import PropTypes from "prop-types";
import { FilterSortRoot, Accordion, Checkbox } from "./FilterSortComponents";
import ClientOnly from "./ClientOnlyCheck";

export default function FilterSortPanel({
  dispatch,
  comfortCheckBoxes,
  brandCheckBoxes,
  typeCheckBoxes,
  allActive,
  bannerCheckBoxes,
}) {
  return (
    <FilterSortRoot>
      <ClientOnly>
        <Accordion title="Brands" allActive={allActive}>
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
        <Accordion title="Comfort" allActive={allActive}>
          {comfortCheckBoxes.map((checkBox, index) => (
            <label htmlFor={checkBox.displayName} key={checkBox.displayName}>
              <Checkbox
                id={checkBox.displayName}
                checked={checkBox.checked}
                firmness={checkBox.firmness}
                onChange={(e) =>
                  dispatch({
                    type: "comfort",
                    index,
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
        <Accordion title="Type" allActive={allActive}>
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
      <ClientOnly>
        <Accordion title="Sale Banner" allActive={allActive}>
          {bannerCheckBoxes.map((banner, index) => (
            <label htmlFor={banner.displayName} key={banner.displayName}>
              <Checkbox
                id={banner.displayName}
                checked={banner.checked}
                onChange={(e) =>
                  dispatch({
                    type: "banner",
                    index,
                    value: banner.urlParam,
                    checked: e.target.checked,
                  })
                }
              />
              <span style={{ marginLeft: 8 }}>{banner.displayName}</span>
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
  bannerCheckBoxes: PropTypes.instanceOf(Object).isRequired,
};

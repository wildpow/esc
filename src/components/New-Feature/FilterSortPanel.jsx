import PropTypes from "prop-types";
import { FilterSortRoot, Accordion, Checkbox } from "./FilterSortComponents";
import ClientOnly from "../FinalFeature/ClientOnlyCheck";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  // console.log(condition);
  condition ? wrapper(children) : children;
export default function FilterSortPanel({
  dispatch,
  comfortCheckBoxes,
  brandCheckBoxes,
  typeCheckBoxes,
  allActive,
  bannerCheckBoxes,
  queryString,
}) {
  return (
    <FilterSortRoot>
      <ConditionalWrapper
        condition={queryString === undefined}
        wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
      >
        <Accordion title="Brands" allActive={allActive}>
          {brandCheckBoxes.map((brandBox, index) => (
            <label htmlFor={brandBox.displayName} key={brandBox.displayName}>
              <Checkbox
                id={brandBox.displayName}
                checked={brandBox.checked}
                disabled={brandBox.disabled}
                onChange={(e) =>
                  dispatch({
                    type: "brand",
                    index,
                    value: brandBox.urlParam,
                    checked: e.target.checked,
                  })
                }
              />
              <span
                style={{ marginLeft: 8, opacity: brandBox.disabled ? 0.3 : 1 }}
              >
                {brandBox.displayName}
              </span>
            </label>
          ))}
        </Accordion>
      </ConditionalWrapper>

      <ConditionalWrapper
        condition={queryString === undefined}
        wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
      >
        <Accordion title="Comfort" allActive={allActive}>
          {comfortCheckBoxes.map((checkBox, index) => (
            <label htmlFor={checkBox.displayName} key={checkBox.displayName}>
              <Checkbox
                id={checkBox.displayName}
                checked={checkBox.checked}
                firmness={checkBox.firmness}
                disabled={checkBox.disabled}
                onChange={(e) =>
                  dispatch({
                    type: "comfort",
                    index,
                    id: checkBox.firmness,
                    checked: e.target.checked,
                  })
                }
              />
              <span
                style={{ marginLeft: 8, opacity: checkBox.disabled ? 0.3 : 1 }}
              >
                {checkBox.displayName}
              </span>
            </label>
          ))}
        </Accordion>
      </ConditionalWrapper>
      <ConditionalWrapper
        condition={queryString === undefined}
        wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
      >
        <Accordion title="Type" allActive={allActive}>
          {typeCheckBoxes.map((type, index) => (
            <label htmlFor={type.displayName} key={type.displayName}>
              <Checkbox
                id={type.displayName}
                checked={type.checked}
                disabled={type.disabled}
                onChange={(e) =>
                  dispatch({
                    type: "type",
                    index,
                    value: type.urlParam,
                    checked: e.target.checked,
                  })
                }
              />
              <span style={{ marginLeft: 8, opacity: type.disabled ? 0.3 : 1 }}>
                {type.displayName}
              </span>
            </label>
          ))}
        </Accordion>
      </ConditionalWrapper>
      {bannerCheckBoxes && (
        <ConditionalWrapper
          condition={queryString === undefined}
          wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
        >
          <Accordion title="Special Offers" allActive={allActive}>
            {bannerCheckBoxes.map((banner, index) => (
              <label htmlFor={banner.displayName} key={banner.displayName}>
                <Checkbox
                  id={banner.displayName}
                  checked={banner.checked}
                  disabled={banner.disabled}
                  onChange={(e) =>
                    dispatch({
                      type: "banner",
                      index,
                      // value: banner.urlParam,
                      checked: e.target.checked,
                    })
                  }
                />
                <span
                  style={{ marginLeft: 8, opacity: banner.disabled ? 0.3 : 1 }}
                >
                  {banner.displayName}
                </span>
              </label>
            ))}
          </Accordion>
        </ConditionalWrapper>
      )}
    </FilterSortRoot>
  );
}
FilterSortPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comfortCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  brandCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  typeCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  bannerCheckBoxes: PropTypes.instanceOf(Object).isRequired,
  allActive: PropTypes.bool.isRequired,
};

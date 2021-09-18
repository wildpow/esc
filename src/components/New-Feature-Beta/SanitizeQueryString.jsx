import { Location } from "@reach/router";
import queryString from "query-string";
import getMattressTypes from "../New-Feature/mattressType.query";
import getMattressBrands from "../New-Feature/mattressBrand.query";

// Component sanitizes location.search parsed by queryString package.
// If query string exists, compare it to materList object. If
// one of the masterList -> queryKeys exists compare keys value to same key for
// instance brand exists compare brand value to brand in masterList.
// remove any bad keys or values and pass down sanitized search object.
const filterBadQueryInputs = (originalQuery, keys) => {
  const results = [];
  const isQueryAnArray =
    typeof originalQuery === "string" ? [originalQuery] : originalQuery;
  isQueryAnArray.forEach((a) =>
    keys.forEach((b) => {
      if (a === b) results.push(b);
    })
  );
  const dedup = results.filter(
    (item, index, self) => self.indexOf(item) === index
  );
  return dedup;
};
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
const updateInitialState = (master, queryArr, state) => {
  const newState = state;
  queryArr.forEach((q) => {
    newState[master.indexOf(q)].checked = true;
  });
  return newState;
};
const SanitizeQueryStringAndGenerateFilters = (ComponentToWrap) => (props) => {
  let didQueryKeyFail = false;
  let didQueryValueFail = false;
  const mattressTypes = getMattressTypes();
  const mattressBrands = getMattressBrands();
  // Initial State of mattress filters
  const initialFilterState = {
    comfort: {
      selectedComfortCheckBoxes: [],
      comfortCheckBoxes: [
        {
          id: 0,
          displayName: "Extra Firm",
          firmness: 1,
          urlParam: "extrafirm",
          checked: false,
        },
        {
          id: 1,
          displayName: "Firm",
          firmness: 2,
          urlParam: "firm",
          checked: false,
        },
        {
          id: 2,
          displayName: "Medium",
          firmness: 3,
          urlParam: "medium",
          checked: false,
        },
        {
          id: 3,
          displayName: "Plush",
          firmness: 4,
          urlParam: "plush",
          checked: false,
        },
        {
          id: 4,
          displayName: "Ultra Plush",
          firmness: 5,
          urlParam: "ultraplush",
          checked: false,
        },
      ],
    },
    type: {
      selectedTypeCheckBoxes: [],
      typeCheckBoxes: mattressTypes.typeCheckBoxes,
    },
    brand: {
      selectedBrandCheckBoxes: [],
      brandCheckBoxes: mattressBrands.brandState.brandCheckBoxes,
    },
  };
  // -------------------
  const masterSanitizeList = {
    queryKeys: ["brand", "type", "comfort"],
    comfort: ["1", "2", "3", "4", "5"],
    type: mattressTypes.typeKeyList,
    brand: mattressBrands.brandNames,
  };

  return (
    <Location>
      {({ location, navigate }) => {
        let search = false;
        if (Object.keys(location.search).length !== 0) {
          search = queryString.parse(location.search.toLocaleLowerCase(), {
            arrayFormat: "comma",
          });
          const searchKeys = Object.keys(search);
          searchKeys.forEach((k) => {
            if (masterSanitizeList.queryKeys.includes(k)) {
              const filter = filterBadQueryInputs(
                search[k],
                masterSanitizeList[k]
              );
              if (filter.length === 0) {
                didQueryKeyFail = true;
                delete search[k];
              } else if (
                filter.length !== search[k].length ||
                filter.length === search[k].length
              ) {
                didQueryValueFail = true;
                search[k] = filter;
                // Generate initial filter state
                initialFilterState[k][
                  `selected${capitalizeFirstLetter(k)}CheckBoxes`
                ] = [...filter];
                initialFilterState[k][`${k}CheckBoxes`] = updateInitialState(
                  masterSanitizeList[k],
                  filter,
                  initialFilterState[k][`${k}CheckBoxes`]
                );
                // ---------------
              }
            } else {
              didQueryKeyFail = true;
              delete search[k];
            }
          });

          if (didQueryValueFail || didQueryKeyFail) {
            if (Object.keys(search).length === 0) {
              if (typeof window !== `undefined`) {
                window.history.replaceState({}, "", `${location.pathname}`);
              }
            } else {
              window.history.replaceState(
                {},
                "",
                `/brands/newer-list?${queryString.stringify(search, {
                  arrayFormat: "comma",
                })}`
              );
            }
          }
        }
        return (
          <ComponentToWrap
            {...props}
            location={location}
            navigate={navigate}
            search={search}
            initialFilterState={initialFilterState}
          />
        );
      }}
    </Location>
  );
};

export default SanitizeQueryStringAndGenerateFilters;

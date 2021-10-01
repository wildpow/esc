import { Location } from "@reach/router";
import queryString from "query-string";
import { capitalizeFirstLetter } from "./helperFunctions";
import getMattressTypes from "./Queries/getMattressTypes.query";
import getMattressBrands from "./Queries/getMattressBrands.query";
import getBanners from "./Queries/getBanners.query";
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

const updateInitialState = (master, queryArr, state) => {
  const newState = state;
  queryArr.forEach((q) => {
    newState[master.indexOf(q)].checked = true;
  });
  return newState;
};
const GenerateQueryAndInitialFilters = (ComponentToWrap) => (props) => {
  let didQueryKeyFail = false;
  let didQueryValueFail = false;
  const mattressTypes = getMattressTypes();
  const mattressBrands = getMattressBrands();
  const banners = getBanners();
  // Initial State of mattress filters
  const initialFilterState = {
    comfort: {
      selectedComfortCheckBoxes: [],
      comfortCheckBoxes: [
        {
          displayName: "Extra Firm",
          firmness: 1,
          urlParam: "extrafirm",
          checked: false,
        },
        {
          displayName: "Firm",
          firmness: 2,
          urlParam: "firm",
          checked: false,
        },
        {
          displayName: "Medium",
          firmness: 3,
          urlParam: "medium",
          checked: false,
        },
        {
          displayName: "Plush",
          firmness: 4,
          urlParam: "plush",
          checked: false,
        },
        {
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
    banner: {
      selectedBannerCheckBoxes: [],
      bannerCheckBoxes: banners.bannerCheckBoxes,
      currentSaleBannerKeyList: banners.currentSaleBannerKeyList,
    },
  };
  // -------------------
  const masterSanitizeList = {
    queryKeys: ["brand", "type", "comfort", "banner"],
    comfort: ["1", "2", "3", "4", "5"],
    type: mattressTypes.typeKeyList,
    brand: mattressBrands.brandNames,
    banner: [banners.bannerCheckBoxes[0].urlParam, ...banners.bannerKeyList],
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
          searchKeys.forEach((key) => {
            if (masterSanitizeList.queryKeys.includes(key)) {
              const filter = filterBadQueryInputs(
                search[key],
                masterSanitizeList[key]
              );
              if (filter.length === 0) {
                didQueryKeyFail = true;
                delete search[key];
              } else if (
                filter.length !== search[key].length ||
                filter.length === search[key].length
              ) {
                didQueryValueFail = true;
                search[key] = filter;
                // Generate initial filter state
                initialFilterState[key][
                  `selected${capitalizeFirstLetter(key)}CheckBoxes`
                ] = [...filter];
                initialFilterState[key][`${key}CheckBoxes`] =
                  updateInitialState(
                    masterSanitizeList[key],
                    filter,
                    initialFilterState[key][`${key}CheckBoxes`]
                  );
                // ---------------
              }
            } else {
              didQueryKeyFail = true;
              delete search[key];
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
                `/brands/new-list?${queryString.stringify(search, {
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

export default GenerateQueryAndInitialFilters;

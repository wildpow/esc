import { Location } from "@reach/router";
import queryString from "query-string";
import getBrands from "../../QueryHooks/Mattresses/Filters/getBrands.query";
import getBanners from "../../QueryHooks/Mattresses/Filters/getBanners.query";
import getTypes from "../../QueryHooks/Mattresses/Filters/getTypes.query";
import getComfort from "../../QueryHooks/Mattresses/Filters/getComfort";
import {
  capitalizeFirstLetter,
  filterBadQueryInputs,
  updateFilter,
} from "../helperFunctions";

const filterStateAndMasterList = (brands, types, comfort, banners) => ({
  masterSanitizeList: {
    queryKeys: ["brand", "type", "comfort", "banner"],
    comfort: comfort.comfortKeys,
    type: types.typeKeyList,
    brand: brands.brandNames,
    banner: Object.keys(banners.bannerQueryStringKeys),
  },
  initialFilters: {
    type: {
      selectedTypeCheckBoxes: [],
      typeCheckBoxes: types.typeCheckBoxes,
    },
    brand: {
      selectedBrandCheckBoxes: [],
      brandCheckBoxes: brands.brandState.brandCheckBoxes,
    },
    comfort: {
      selectedComfortCheckBoxes: [],
      comfortCheckBoxes: comfort.comfortCheckBoxes,
    },
    banner: {
      selectedBannerCheckBoxes: [],
      bannerCheckBoxes: banners.bannerCheckBoxes,
      currentSaleBannerKeyList: banners.currentSaleBannerKeyList,
      bannerMasterKeyList: banners.bannerMasterKeyList,
    },
  },
});

const MattressListInit = (ComponentToWrap) => (props) => {
  const banners = getBanners();
  const types = getTypes();
  const brands = getBrands();
  const comfort = getComfort();
  const { masterSanitizeList, initialFilters } = filterStateAndMasterList(
    brands,
    types,
    comfort,
    banners
  );
  let didQueryKeyFail = false;
  let didQueryValueFail = false;
  return (
    <Location>
      {({ location }) => {
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
              const searchArr =
                typeof search[key] === "string" ? [search[key]] : search[key];
              if (filter.length === 0) {
                didQueryKeyFail = true;
                delete search[key];
              } else if (filter.length !== searchArr.length) {
                didQueryValueFail = true;
                search[key] = filter;
              }

              initialFilters[key][
                `selected${capitalizeFirstLetter(key)}CheckBoxes`
              ] = [...filter];
              initialFilters[key][`${key}CheckBoxes`] = updateFilter(
                masterSanitizeList[key],
                filter,
                initialFilters[key][`${key}CheckBoxes`]
              );
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
              /* should get /brand/list from location.pathname
              to make this component more universal. */

              window.history.replaceState(
                {},
                "",
                `/brands/list?${queryString.stringify(search, {
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
            search={search}
            initialFilterState={initialFilters}
          />
        );
      }}
    </Location>
  );
};

export default MattressListInit;

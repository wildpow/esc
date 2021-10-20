import { Location } from "@reach/router";
import queryString from "query-string";
import {
  capitalizeFirstLetter,
  filterBadQueryInputs,
  updateFilter,
} from "../helperFunctions";

const AccessoryListInit = (ComponentToWrap) => (props) => {
  const masterSanitizeList = {
    type: ["sheets", "pillow", "protector", "foundation"],
    queryKeys: ["type"],
  };
  const initialFilters = {};
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
            } else {
              didQueryKeyFail = true;
              delete search[key];
            }
          });
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

export default AccessoryListInit;

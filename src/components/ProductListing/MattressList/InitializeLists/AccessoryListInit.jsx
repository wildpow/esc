import { Location } from "@reach/router";
import queryString from "query-string";

const AccessoryListInit = (ComponentToWrap) => (props) => {
  const masterSanitizeList = {
    type: ["sheets", "pillow", "protector", "foundation"],
  };
  const initialFilters = {};
  const didQueryKeyFail = false;
  const didQueryValueFail = false;

  return (
    <Location>
      {({ location }) => {
        let search = false;
        if (Object.keys(location.search).length !== 0) {
          search = queryString.parse(location.search.toLocaleLowerCase(), {
            arrayFormat: "comma",
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

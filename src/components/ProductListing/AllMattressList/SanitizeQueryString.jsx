import { Location } from "@reach/router";
import queryString from "query-string";
import getMattressTypes from "./mattressType.query";
import getMattressBrands from "./mattressBrand.query";

const filterBadQueryInputs = (originalQuery, keys) => {
  const results = [];
  const isQueryAnArray =
    typeof originalQuery === "string" ? [originalQuery] : originalQuery;
  isQueryAnArray.forEach((a) =>
    keys.forEach((b) => {
      if (a === b) results.push(b);
    })
  );
  return results;
};
const SanitizeQueryString = (ComponentToWrap) => (props) => {
  const didQueryKeyFail = false;
  const didQueryValueFail = false;
  const mattressTypes = getMattressTypes();
  const mattressBrands = getMattressBrands();
  const masterList = {
    queryKeys: ["brand", "type", "comfort"],
    comfort: ["1", "2", "3", "4", "5"],
    type: mattressTypes.typeKeyList,
    brand: mattressBrands.brandNames,
  };
  return (
    <Location>
      {({ location, navigate }) => {
        let search = false;
        const newSearchObj = {};
        if (Object.keys(location.search).length !== 0) {
          search = queryString.parse(location.search.toLocaleLowerCase(), {
            arrayFormat: "comma",
          });
          const searchKeys = Object.keys(search);
          searchKeys.forEach((k) => {
            if (masterList.queryKeys.includes(k)) {
              const filter = filterBadQueryInputs(search[k], masterList[k]);
              if (filter.length === 0) {
                console.log("filter.length === 0", search[k]);
                delete search[k];
              } else if (filter.length !== search[k].length) {
                search[k] = filter;
              }
            } else {
              delete search[k];
              console.log("FALES");
            }
          });
          if (Object.keys(search).length !== searchKeys.length) {
            if (Object.keys(search).length === 0) {
              console.log("search.length === 0", search);

              if (typeof window !== `undefined`) {
                window.history.replaceState({}, "", `${location.pathname}`);
              }
            } else if (typeof window !== `undefined`) {
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
            navigate={navigate}
            search={search}
          />
        );
      }}
    </Location>
  );
};

export default SanitizeQueryString;

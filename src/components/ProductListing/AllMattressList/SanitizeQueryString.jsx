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
  const dedup = results.filter(
    (item, index, self) => self.indexOf(item) === index
  );
  return dedup;
};
const SanitizeQueryString = (ComponentToWrap) => (props) => {
  let didQueryKeyFail = false;
  let didQueryValueFail = false;
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
        if (Object.keys(location.search).length !== 0) {
          search = queryString.parse(location.search.toLocaleLowerCase(), {
            arrayFormat: "comma",
          });
          const searchKeys = Object.keys(search);
          searchKeys.forEach((k) => {
            if (masterList.queryKeys.includes(k)) {
              const filter = filterBadQueryInputs(search[k], masterList[k]);
              if (filter.length === 0) {
                didQueryKeyFail = true;
                delete search[k];
              } else if (filter.length !== search[k].length) {
                didQueryValueFail = true;
                search[k] = filter;
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
          />
        );
      }}
    </Location>
  );
};

export default SanitizeQueryString;

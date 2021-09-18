import queryString from "query-string";

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

const sanitizeSearch = ({ location, masterSanitizeList }) => {
  const newSearch = false;
  let didQueryKeyFail = false;
  let didQueryValueFail = false;

  const searchKeys = Object.keys(location.search);
  searchKeys.forEach((k) => {
    if (masterSanitizeList.queryKeys.includes(k)) {
      const filter = filterBadQueryInputs(newSearch[k], masterSanitizeList[k]);
      if (filter.length === 0) {
        didQueryKeyFail = true;
        delete newSearch[k];
      } else if (
        filter.length !== newSearch[k].length ||
        filter.length === newSearch[k].length
      ) {
        didQueryValueFail = true;
        newSearch[k] = filter;
      }
    } else {
      didQueryKeyFail = true;
      delete newSearch[k];
    }
  });
  if (didQueryValueFail || didQueryKeyFail) {
    if (Object.keys(newSearch).length === 0) {
      if (typeof window !== `undefined`) {
        window.history.replaceState({}, "", `${location.pathname}`);
      }
    } else {
      window.history.replaceState(
        {},
        "",
        `/brands/newer-list?${queryString.stringify(newSearch, {
          arrayFormat: "comma",
        })}`
      );
    }
  }
};

export default sanitizeSearch;

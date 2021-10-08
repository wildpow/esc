/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import queryString from "query-string";
import { capitalizeFirstLetter } from "../New-Feature/helperFunctions";

const filterBadQueryInputs = (originalQuery, keys) => {
  const results = [];
  const isQueryAnArray =
    typeof originalQuery === "string" || originalQuery === null
      ? [originalQuery]
      : originalQuery;
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

const updateInitialState = (
  master,
  queryArr,
  state,
  propertyToUpdate = "checked"
) => {
  const newState = state;
  queryArr.forEach((q) => {
    newState[master.indexOf(q)][propertyToUpdate] = true;
  });
  console.log(master, queryArr, state);
  return newState;
};

const QueryStringChecker = ({ location, render, filterState, masterList }) => {
  const [finalFilterState, setFinalFilterState] = useState(null);
  useEffect(() => {
    if (Object.keys(location.search).length === 0) {
      setFinalFilterState(filterState);
    } else {
      const newSearch = queryString.parse(location.search.toLocaleLowerCase(), {
        arrayFormat: "comma",
      });
      const newFilterState = { ...filterState };
      const searchKeys = Object.keys(newSearch);
      let didQueryKeyFail = false;
      let didQueryValueFail = false;
      searchKeys.forEach((key) => {
        if (masterList.queryKeys.includes(key)) {
          const filter = filterBadQueryInputs(newSearch[key], masterList[key]);
          const searchArr =
            typeof newSearch[key] === "string"
              ? [newSearch[key]]
              : newSearch[key];
          if (filter.length === 0) {
            didQueryKeyFail = true;
            delete newSearch[key];
          } else if (filter.length !== searchArr.length) {
            didQueryValueFail = true;
            newSearch[key] = filter;
          } else {
            console.log(
              "Comfort is not working!!!!!!!!!!!! http://localhost:8000/brands/list?banner=0,1,2&brand=sealy&comfort=1"
            );

            newFilterState[key][
              `selected${capitalizeFirstLetter(key)}CheckBoxes`
            ] = [...filter];
            newFilterState[key][`${key}CheckBoxes`] = updateInitialState(
              masterList[key],
              filter,
              newFilterState[key][`${key}CheckBoxes`]
            );
          }
        } else {
          didQueryKeyFail = true;
          delete newSearch[key];
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
            `/brands/list?${queryString.stringify(newSearch, {
              arrayFormat: "comma",
            })}`
          );
        }
      }
      setFinalFilterState(newFilterState);
    }
  }, []);
  return render(finalFilterState);
};

export default QueryStringChecker;

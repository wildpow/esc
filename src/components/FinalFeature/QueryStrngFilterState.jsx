import { Location } from "@reach/router";
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
  return newState;
};

const QueryStringFilterState = ()
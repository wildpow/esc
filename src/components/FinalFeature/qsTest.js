import { useEffect, useState } from "react";
import queryString from "query-string";

const QueryStringChecker = ({ location, render }) => {
  const [updatedQS, setUpdatedQS] = useState(null);
  useEffect(() => {
    setUpdatedQS(
      queryString.parse(location.search.toLocaleLowerCase(), {
        arrayFormat: "comma",
      })
    );
    window.history.replaceState(
      {},
      "",
      `${location.pathname}?${queryString.stringify(updatedQS, {
        arrayFormat: "comma",
      })}`
    );
  }, []);

  return render(updatedQS);
};

export default QueryStringChecker;

// Render Props

// <QueryStringChecker
// location={location}
// render={(updatedQS) => <List queryString={updatedQS} />}
// />

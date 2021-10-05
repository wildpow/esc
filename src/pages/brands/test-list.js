import { useEffect, useState } from "react";
import queryString from "query-string";
import Layout from "../../components/Layout";

export default function TestList({ location }) {
  const [search, setSearch] = useState(null);
  useEffect(() => {
    setSearch(
      queryString.parse(location.search.toLocaleLowerCase(), {
        arrayFormat: "comma",
      })
    );
    window.history.replaceState(
      {},
      "",
      `/brands/test-list?${queryString.stringify(search, {
        arrayFormat: "comma",
      })}`
    );
  }, []);
  return (
    <Layout>
      <QueryStringChecker
        location={location}
        render={(updatedQS) => <List queryString={updatedQS} />}
      />
      <h2>New Test List</h2>
    </Layout>
  );
}
const List = ({ queryString }) => <>{console.log(queryString)}</>;
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

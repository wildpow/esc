import Layout from "../../components/Layout";
import SanitizeQueryString from "../../components/ProductListing/AllMattressList/SanitizeQueryString";

const NewerList = ({ search }) => (
  <Layout>
    <h1>Newer List</h1>
    {console.log("SEARCH", search)}
  </Layout>
);

export default SanitizeQueryString(NewerList);

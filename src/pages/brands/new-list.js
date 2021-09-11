import Layout from "../../components/Layout";
import withLocation from "../../components/ProductListing/AllMattressList/withLocation";

const NewList = ({ search, typeState, brandState, comfortState }) => (
  <Layout>
    <h1>New list</h1>
    {console.log(typeState, "typeState")}
    {console.log(comfortState, "comfortState")}
    {console.log(brandState, "brandState")}, brandState, comfortState
  </Layout>
);

export default withLocation(NewList);

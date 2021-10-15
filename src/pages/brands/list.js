import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import QueryStringFilterState from "../../components/ProductListing/Mattresses/QueryStringFilterState";
import ProductList from "../../components/ProductListing/ProductList";
import getMattresses from "../../components/ProductListing/QueryHooks/Mattresses/Content/getAll.query";
import getHeaders from "../../components/ProductListing/QueryHooks/Mattresses/Content/getHeaders.query";

const List = ({ location, data, initialFilterState }) => {
  const headers = getHeaders();
  const mattresses = getMattresses();
  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <ProductList
        queryString
        multipleHeaders
        headers={headers}
        products={mattresses}
        initialFilterState={initialFilterState}
        breadCrumbSettings={{
          here: (title) => (title === "AllMattressSort" ? "All" : title),
          next: "Brands",
          extraFeatures: { hiddenLarge: false },
        }}
      />
    </Layout>
  );
};

export const list = graphql`
  query allMattresses {
    seo: datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

List.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  location: propTypes.instanceOf(Object).isRequired,
  initialFilterState: propTypes.instanceOf(Object).isRequired,
};
export default QueryStringFilterState(List);

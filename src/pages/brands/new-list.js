import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import getAllMattressesQuery from "../../components/New-Feature/Queries/getAllMattresses.query";
import getHeadersQuery from "../../components/New-Feature/Queries/getHeaders.query";
import GenerateQueryAndInitialFilters from "../../components/New-Feature/GenerateQueryAndInitialFilters";
import GenerateInitialState from "../../components/New-Feature/generateInitialState";

const NewList = ({ location, data, search, initialFilterState }) => {
  const mattresses = getAllMattressesQuery();
  const headers = getHeadersQuery();
  const initialState = GenerateInitialState(
    initialFilterState,
    headers,
    mattresses
  );
  return (
    <Layout>
      {console.log(search)}
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <h2>New List</h2>
    </Layout>
  );
};

export default GenerateQueryAndInitialFilters(NewList);

export const brandSEO = graphql`
  query brandSEO {
    seo: datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

NewList.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  location: propTypes.instanceOf(Object).isRequired,
  search: propTypes.oneOfType([propTypes.bool, propTypes.instanceof(Object)])
    .isRequired,
  initialFilterState: propTypes.instanceOf(Object).isRequired,
};

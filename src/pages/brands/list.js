import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import getAllMattressesQuery from "../../components/New-Feature/Queries/getAllMattresses.query";
import getHeadersQuery from "../../components/New-Feature/Queries/getHeaders.query";
import getMattressTypes from "../../components/New-Feature/Queries/getMattressTypes.query";
import getMattressBrands from "../../components/New-Feature/Queries/getMattressBrands.query";
import getBannersQuery from "../../components/New-Feature/Queries/getBanners.query";
import QueryStringChecker from "../../components/FinalFeature/QueryStringChecker";
import MattressListInit from "../../components/FinalFeature/mattressListInit";
import getComfortFilter from "../../components/FinalFeature/getComfortFilter";

const Tester = ({ queryString }) => <div>{console.log(queryString)}</div>;
const List = ({ location, data }) => {
  const banners = getBannersQuery();
  const types = getMattressTypes();
  const brands = getMattressBrands();
  const comfort = getComfortFilter();
  const headers = getHeadersQuery();
  const mattresses = getAllMattressesQuery();

  const initialStateAndMasterKeys = MattressListInit(
    brands,
    types,
    comfort,
    banners
  );
  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <QueryStringChecker
        data={initialStateAndMasterKeys}
        location={location}
        render={(updatedQS) => <Tester queryString={updatedQS} />}
      />
      <h2>All Mattress List</h2>
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
};
export default List;

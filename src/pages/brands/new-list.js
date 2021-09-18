import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import queryString from "query-string";
import sanitizeSearch from "../../components/New-Feature/Filters";
import Layout from "../../components/Layout";
import getAllMattressesQuery from "../../components/New-Feature/Queries/getAllMattresses.query";
import getHeadersQuery from "../../components/New-Feature/Queries/getHeaders.query";
import getMattressBrandsQuery from "../../components/New-Feature/Queries/getMattressBrands.query";
import getMattressTypesQuery from "../../components/New-Feature/Queries/getMattressTypes.query";

export default function NewList({ location, data }) {
  const mattresses = getAllMattressesQuery();
  const headers = getHeadersQuery();
  const mattressTypes = getMattressTypesQuery();
  const mattressBrands = getMattressBrandsQuery();
  const masterSanitizeList = {
    queryKeys: ["brand", "type", "comfort"],
    comfort: ["1", "2", "3", "4", "5"],
    type: mattressTypes.typeKeyList,
    brand: mattressBrands.brandNames,
  };
  let search = false;
  if (Object.keys(location.search).length !== 0) {
    search = sanitizeSearch(
      queryString.parse(location.search.toLocaleLowerCase(), {
        arrayFormat: "comma",
      }),
      masterSanitizeList
    );
  }
  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <h2>New List</h2>
    </Layout>
  );
}

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
};

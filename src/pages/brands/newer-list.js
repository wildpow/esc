import { graphql } from "gatsby";
import propTypes from "prop-types";
import { useReducer } from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../components/Layout";
import SanitizeQueryStringAndGenerateFilters from "../../components/ProductListing/AllMattressList/SanitizeQueryString";
import getHeaders from "../../components/ProductListing/AllMattressList/getHeaders.query";
import GenerateInitialState from "../../components/ProductListing/AllMattressList/newGenerateInitialState";
import reducer from "../../components/ProductListing/AllMattressList/allMattress.reducer";

const NewerList = ({ search, data, initialFilterState }) => {
  const headers = getHeaders();
  const initialState = GenerateInitialState(
    search,
    initialFilterState,
    headers,
    data.allMattresses
  );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <h1>Newer List</h1>
      {console.log(state, "state")}
    </Layout>
  );
};
export const newerList = graphql`
  query allNewMattresses {
    seo: datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allMattresses: allDatoCmsNewMattress {
      nodes {
        ...newMattressList
      }
    }
  }
`;

NewerList.propTypes = { data: propTypes.instanceOf(Object).isRequired };

export default SanitizeQueryStringAndGenerateFilters(NewerList);

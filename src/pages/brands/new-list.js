import { useReducer } from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import getAllMattressesQuery from "../../components/New-Feature/Queries/getAllMattresses.query";
import getHeadersQuery from "../../components/New-Feature/Queries/getHeaders.query";
import GenerateQueryAndInitialFilters from "../../components/New-Feature/GenerateQueryAndInitialFilters";
import GenerateInitialState from "../../components/New-Feature/generateInitialState";
import reducer from "../../components/New-Feature/mattresses.reducer";
import BreadCrumbs from "../../components/BreadCrumbs";
import Header from "../../components/ProductListing/ProductListingHeader";
import {
  NewBread,
  MattListWrapper,
} from "../../components/ProductListing/productListing.styled";
import ProductThumbnail from "../../components/ProductListing/ProductThumbnail";
import FilterSortPanel from "../../components/New-Feature/FilterSortPanel";
import ClientOnly from "../../components/New-Feature/ClientOnlyCheck";

const createButton = (checkBoxs) => {
  if (
    checkBoxs.length === 0 ||
    checkBoxs.length > 1 ||
    checkBoxs[0] === "serta"
  ) {
    return null;
  }
  return {
    label: "Learn More",
    url: `/brands/${checkBoxs[0]}/landing`,
  };
};

const NewList = ({ location, data, search, initialFilterState }) => {
  const mattresses = getAllMattressesQuery();
  const headers = getHeadersQuery();
  const initialState = GenerateInitialState(
    initialFilterState,
    headers,
    mattresses
  );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs
            next="Brands"
            here={
              state.currentHeader.title === "AllMattressSort"
                ? "All"
                : state.currentHeader.title
            }
          />
        </NewBread>
        <ClientOnly location={location}>
          <Header
            title={state.currentHeader.title}
            description={state.currentHeader.tagLine}
            headerBG={state.currentHeader.bgImg.url}
            button={createButton(state.selectedBrandCheckBoxes)}
          />
        </ClientOnly>
        <div className="mattList__flex">
          <FilterSortPanel
            dispatch={dispatch}
            comfortCheckBoxes={state.comfortCheckBoxes}
            brandCheckBoxes={state.brandCheckBoxes}
            typeCheckBoxes={state.typeCheckBoxes}
          />

          {state.currentMattresses.length > 0 ? (
            <div className="mattList__grid">
              {state.currentMattresses.map((mattress) => (
                <ClientOnly>
                  <ProductThumbnail
                    key={mattress.id}
                    product={mattress}
                    mattress
                    url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
                  />
                </ClientOnly>
              ))}
            </div>
          ) : (
            <div className="noFilter">
              <h3>No products match these filters</h3>
            </div>
          )}
        </div>
        <NewBread Brands>
          <BreadCrumbs
            next="Mattresses"
            here={
              state.currentHeader.title === "AllMattressSort"
                ? "All"
                : state.currentHeader.title
            }
          />
        </NewBread>
      </MattListWrapper>
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
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  initialFilterState: PropTypes.instanceOf(Object).isRequired,
};

import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../ProductListingHeader";
import ProductThumbnail from "../ProductThumbnail";
import { NewBread, MattListWrapper } from "../productListing.styled";
import GenerateInitialState from "./generateInitialState";
import reducer from "./mattress.reducer";
import FilterSortPanel from "./FilterSortPanel";
import { SortBy } from "./FilterSortComponents";
import CollapseAllIcon from "../../../svgs/sort-solid.svg";
import { ConditionalClientOnly, ClientOnly } from "./ClientOnly";

export default function ProductList({
  queryString,
  multipleHeaders,
  headers,
  products,
  initialFilterState,
  breadCrumbSettings,
}) {
  const { next, here, extraFeatures } = breadCrumbSettings;
  const initialState = GenerateInitialState(
    queryString,
    multipleHeaders,
    products,
    headers,
    initialFilterState
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allActive, setAllActive] = useState(true);
  return (
    <MattListWrapper>
      <NewBread hiddenLarge={extraFeatures.hiddenLarge}>
        <BreadCrumbs
          next={next.length === 0 ? null : next}
          here={here(state.currentHeader.title)}
        />
      </NewBread>
      <ConditionalClientOnly
        condition={queryString}
        wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
      >
        <Header
          headerData={state.currentHeader}
          allBtnOption={state.multipleHeaders === false}
        />
      </ConditionalClientOnly>
      <div className="mattList__flex">
        <FilterSortPanel
          queryString={queryString}
          allActive={allActive}
          dispatch={dispatch}
          comfortCheckBoxes={state.comfortCheckBoxes}
          brandCheckBoxes={state.brandCheckBoxes}
          typeCheckBoxes={state.typeCheckBoxes}
          bannerCheckBoxes={state.bannerCheckBoxes}
        />
        <div className="mattList__container">
          <div className="mattList__sortResults">
            <div className="collapseAll">
              <button
                type="button"
                title="Collapse All Filters"
                onClick={() => setAllActive(!allActive)}
              >
                <CollapseAllIcon />
              </button>
              <SortBy onChange={(e) => dispatch({ type: e.target.value })} />
            </div>
            <h4>{state.currentMattresses.length} results</h4>
          </div>
          {state.currentMattresses.length > 0 ? (
            <div className="mattList__grid">
              {state.currentMattresses.map((mattress) => (
                <ConditionalClientOnly
                  condition={queryString}
                  wrapper={(children) => <ClientOnly>{children}</ClientOnly>}
                >
                  <ProductThumbnail
                    key={mattress.id}
                    product={mattress}
                    mattress
                    url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
                  />
                </ConditionalClientOnly>
              ))}
            </div>
          ) : (
            <div className="noFilter">
              <h3>No products match these filters</h3>
            </div>
          )}
        </div>
      </div>
      <NewBread hiddenLarge={extraFeatures.hiddenLarge}>
        <BreadCrumbs
          next={next.length === 0 ? null : next}
          here={here(state.currentHeader.title)}
        />
      </NewBread>
    </MattListWrapper>
  );
}

ProductList.defaultProps = {
  queryString: false,
  multipleHeaders: false,
};
ProductList.propTypes = {
  queryString: PropTypes.bool,
  multipleHeaders: PropTypes.bool,
  headers: PropTypes.instanceOf(Object).isRequired,
  products: PropTypes.instanceOf(Object).isRequired,
  initialFilterState: PropTypes.instanceOf(Object).isRequired,
  breadCrumbSettings: PropTypes.instanceOf(Object).isRequired,
};

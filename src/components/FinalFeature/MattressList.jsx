import { useReducer, useState } from "react";
import reducer from "./mattress.reducer";
import Header from "../ProductListing/ProductListingHeader";
import { SortBy } from "../New-Feature/FilterSortComponents";
import ProductThumbnail from "../ProductListing/ProductThumbnail";
import FilterSortPanel from "../New-Feature/FilterSortPanel";
import CollapseAllIcon from "../../svgs/sort-solid.svg";
import {
  NewBread,
  MattListWrapper,
} from "../New-Feature/productListing.styled";

const GenerateInitialState = (
  initialFilterState,
  headers,
  allMattresses,
  queryString,
  multipleHeaders
) => ({
  beforeFilterMattresses: allMattresses,
  currentMattresses: queryString ? allMattresses : allMattresses,
  ...initialFilterState.banner,
  ...initialFilterState.brand,
  ...initialFilterState.type,
  ...initialFilterState.comfort,
  headers: multipleHeaders ? headers.brandHeaders : headers,
  currentHeader: multipleHeaders ? headers : headers,
  queryString,
  multipleHeaders,
});

export default function MattressList({
  queryString,
  mattresses,
  initialFilterState,
  headers,
  multipleHeaders,
}) {
  const initialState = GenerateInitialState(
    initialFilterState,
    headers,
    mattresses,
    queryString,
    multipleHeaders
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allActive, setAllActive] = useState(true);
  return (
    <MattListWrapper>
      <Header
        headerData={state.currentHeader}
        allBtnOption={!state.multipleHeaders}
      />
      {console.log(state)}
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
                <ProductThumbnail
                  key={mattress.id}
                  product={mattress}
                  mattress
                  url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="noFilter">
              <h3>No products match these filters</h3>
            </div>
          )}
        </div>
      </div>
    </MattListWrapper>
  );
}

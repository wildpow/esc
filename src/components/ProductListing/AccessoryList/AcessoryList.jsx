import { useReducer } from "react";
import propTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../ProductListingHeader";
import { NewBread, MattListWrapper } from "../productListing.styled";
import filterSortAcc from "./accessory.reducer";
import FilterSortPanel from "./FilterSortPanelAcc";
import GenerateInitialState from "./generateInitialState";
import ProductThumbnail from "../ProductThumbnail";
import {
  getPillows,
  getProtectors,
  getSheets,
  getHeaders,
  getFoundation,
} from "./QueryHooks";

const AccessoryList = ({ location }) => {
  const protectors = getProtectors();
  const sheets = getSheets();
  const pillows = getPillows();
  const foundations = getFoundation();
  const headers = getHeaders();
  const initialState = GenerateInitialState(
    location,
    pillows,
    sheets,
    protectors,
    headers,
    foundations
  );
  const [state, dispatch] = useReducer(filterSortAcc, initialState);
  return (
    <MattListWrapper>
      <NewBread Brands>
        <BreadCrumbs
          next="Accessories"
          here={
            state.selectedAccInfo.title === "Accessories"
              ? "All"
              : state.selectedAccInfo.title
          }
        />
      </NewBread>
      <Header headerData={state.selectedAccInfo} />
      <div className="mattList__flex">
        <FilterSortPanel
          dispatch={dispatch}
          typeCheckBoxs={state.typeCheckBoxs}
        />
        <div className="mattList__grid">
          {state.acc
            ? state.acc.map((acc) => (
                // eslint-disable-next-line react/jsx-indent
                <ProductThumbnail
                  product={acc}
                  key={acc.id}
                  url={`/accessories/${acc.slug}`}
                />
              ))
            : null}
        </div>
      </div>
      <NewBread Brands Bottom>
        <BreadCrumbs
          next="Accessories"
          here={
            state.selectedAccInfo.title === "Accessories"
              ? "All"
              : state.selectedAccInfo.title
          }
        />
      </NewBread>
    </MattListWrapper>
  );
};

AccessoryList.propTypes = {
  location: propTypes.instanceOf(Object).isRequired,
};
export default AccessoryList;

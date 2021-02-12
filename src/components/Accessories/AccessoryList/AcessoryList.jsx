import { useReducer } from "react";
import propTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../../shared/ProductList/Header";
import {
  NewBread,
  MattListWrapper,
} from "../../shared/ProductList/ProductList.styled";
import filterSortAcc from "./FilterSortAcc";
import FilterSortPanel from "./FilterSortPanelAcc";
// import AccThumb from "./AccThumb";
import useProtector from "../Hooks/use-protector";
import useSheets from "../Hooks/use-sheets";
import usePillows from "../Hooks/use-pillows";
import GenerateInitialState from "./Utils/generateInitialState";
import useHeaders from "../Hooks/use-headers";
import ProductThumbnail from "../../shared/ProductList/ProductThumbnail";
import useFoundations from "../Hooks/use-foundation";

const AccessoryList = ({ location }) => {
  const protectors = useProtector();
  const sheets = useSheets();
  const pillows = usePillows();
  const foundations = useFoundations();
  const headers = useHeaders();
  const initialState = GenerateInitialState(
    location,
    pillows,
    sheets,
    protectors,
    headers,
    foundations,
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
      <Header
        title={state.selectedAccInfo.title}
        description={state.selectedAccInfo.tagLine}
        headerBG={state.selectedAccInfo.bgImg.url}
      />
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

import React, { useReducer } from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../../shared/ProductList/Header";
import {
  NewBread,
  MattListWrapper,
} from "../../shared/ProductList/ProductList.styled";
import GenerateInitialState from "./generateInitialState";
import reducer from "./reducer";
import ProductThumbnail from "../../shared/ProductList/ProductThumbnail";
import FilterSortPanel from "./filterSortPanel";

const MattressList = ({ location, data }) => {
  const initialState = GenerateInitialState(location, data);
  const [state, dispatch] = useReducer(reducer, initialState);
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
  return (
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
      <Header
        title={state.currentHeader.title}
        description={state.currentHeader.tagLine}
        headerBG={state.currentHeader.bgImg.url}
        button={createButton(state.selectedBrandCheckBoxes)}
      />
      <div className="mattList__flex">
        <FilterSortPanel
          dispatch={dispatch}
          comfortCheckBoxes={state.comfortCheckBoxes}
          brandCheckBoxes={state.brandCheckBoxes}
        />
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
  );
};
MattressList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
export default MattressList;

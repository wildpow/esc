import React, { useReducer } from "react";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../../shared/ProductList/Header";
import {
  NewBread,
  MattListWrapper,
} from "../../MattressList/MattressList.styled";
import GenerateInitialState from "./generateInitialState";
import reducer from "./reducer";
import MattressThumbnail from "../../MattressList/MattressThumbnail";
import FilterSortPanel from "./filterSortPanel";

const MattressList = ({ location, data }) => {
  const initialState = GenerateInitialState(location, data);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MattListWrapper>
      {console.log(initialState)}
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
      />
      <div className="mattList__flex">
        <FilterSortPanel
          dispatch={dispatch}
          comfortCheckBoxes={state.comfortCheckBoxes}
          brandCheckBoxes={state.brandCheckBoxes}
        />
        <div className="mattList__grid">
          {state.currentMattresses.map((mattress) => (
            <MattressThumbnail
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </div>
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

export default MattressList;

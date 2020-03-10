import React, { useReducer } from "react";
import styled from "styled-components";
import FilterSortPanel from "./filterSortPanel";
import Heading from "./heading";
import MattressThumb from "../../mattThumbNail";
import filterSortReducer from "./filterSortReducer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .MattListGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 1rem;
    margin-left: 7px;
    margin-right: 7px;
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 80%;
    }
  }
  .mainFlexView {
    border-top: 8px solid ${props => props.theme.mainColor1};
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const CurrentSale = ({ mattresses, title, description }) => {
  const initalState = {
    mattresses,
    beforeFilter: mattresses,
    checkBoxs: [
      { id: 0, value: "Extra Firm", firmness: 1 },
      { id: 1, value: "Firm", firmness: 2 },
      { id: 2, value: "Medium", firmness: 3 },
      { id: 3, value: "Plush", firmness: 4 },
      { id: 4, value: "Ultra Plush", firmness: 5 },
    ],
    firmnessNums: [],
  };

  const [state, dispatch] = useReducer(filterSortReducer, initalState);
  return (
    <MainWrapper>
      <Heading title={title} description={description} />
      <div className="mainFlexView">
        <FilterSortPanel
          dispatch={dispatch}
          checkBoxs={state.checkBoxs}
          length={state.mattresses.length}
        />
        <div className="MattListGrid">
          {state.mattresses.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default CurrentSale;

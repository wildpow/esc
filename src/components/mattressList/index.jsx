import React, { useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import MattressThumb from "./mattThumbNail";
import FilterSortPanel from "./FilterSortPanel";
import filterSortReducer from "./filterSortReducer";
import BreadCrumbs, { BreadWrapper } from "../breadCrumbs";

export const NewBread = styled(BreadWrapper)`
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 568px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1022px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1300px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const MattListWrapper = styled.div`
  padding-top: ${(props) => (!props.breadCrumbs ? "20px" : "0px")};
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  .mattList__flex {
    border-top: 8px solid ${(props) => props.theme.mainColor1};
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .mattList__grid {
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
`;

const MattList = ({
  mattresses,
  title,
  description,
  breadCrumbs,
  brandName,
  headerBG,
  landing,
}) => {
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
    <MattListWrapper breadCrumbs={breadCrumbs}>
      {breadCrumbs && (
        <NewBread Brands>
          <BreadCrumbs next="Brands" here={brandName} />
        </NewBread>
      )}
      <Header
        title={title}
        description={description}
        headerBG={headerBG}
        landing={landing}
        brandName={brandName}
      />

      <div className="mattList__flex">
        <FilterSortPanel
          dispatch={dispatch}
          checkBoxs={state.checkBoxs}
          length={state.mattresses.length}
        />
        <div className="mattList__grid">
          {state.mattresses.map((mattress) => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </div>
      </div>
      {breadCrumbs && (
        <NewBread Brands Bottom>
          <BreadCrumbs next="Brands" here={brandName} />
        </NewBread>
      )}
    </MattListWrapper>
  );
};

MattList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mattresses: PropTypes.instanceOf(Object).isRequired,
  breadCrumbs: PropTypes.bool,
  brandName: PropTypes.string,
};

MattList.defaultProps = {
  breadCrumbs: false,
  brandName: "Nothing",
};

export default MattList;

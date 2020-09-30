import React, { useReducer } from "react";
import PropTypes from "prop-types";
import Header from "../shared/ProductList/Header";
import MattressThumbnail from "./MattressThumbnail";
import FilterSortPanel from "./FilterSortPanelMatt";
import filterSortReducer from "./FilterSortReducer";
import BreadCrumbs from "../BreadCrumbs";
import { NewBread, MattListWrapper } from "./MattressList.styled";

const MattressList = ({
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
        <NewBread>
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
            <MattressThumbnail
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

MattressList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mattresses: PropTypes.instanceOf(Object).isRequired,
  breadCrumbs: PropTypes.bool,
  brandName: PropTypes.string,
};

MattressList.defaultProps = {
  breadCrumbs: false,
  brandName: "Nothing",
};

export default MattressList;

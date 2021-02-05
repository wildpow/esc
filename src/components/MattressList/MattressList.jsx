import React, { useReducer } from "react";
import PropTypes from "prop-types";
import Header from "../shared/ProductList/Header";
import FilterSortPanel from "./FilterSortPanelMatt";
import filterSortReducer from "./FilterSortReducer";
import BreadCrumbs from "../BreadCrumbs";
import {
  NewBread,
  MattListWrapper,
} from "../shared/ProductList/ProductList.styled";
import ProductThumbnail from "../shared/ProductList/ProductThumbnail";

const MattressList = ({
  mattresses,
  title,
  description,
  breadCrumbs,
  brandName,
  headerBG,
  button,
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
        brandName={brandName}
        button={button}
      />

      <div className="mattList__flex">
        <FilterSortPanel
          dispatch={dispatch}
          checkBoxs={state.checkBoxs}
          length={state.mattresses.length}
        />
        {state.mattresses.length > 0 ? (
          <div className="mattList__grid">
            {state.mattresses.map((mattress) => (
              <ProductThumbnail
                mattress
                key={mattress.id}
                product={mattress}
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
  button: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
  headerBG: PropTypes.string,
};

MattressList.defaultProps = {
  breadCrumbs: false,
  brandName: "Nothing",
  headerBG: "",
  button: null,
};

export default MattressList;

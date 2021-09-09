import { useReducer } from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../ProductListingHeader";
import { NewBread, MattListWrapper } from "../productListing.styled";
import GenerateInitialState from "./generateInitialState";
import reducer from "./allMattress.reducer";
import ProductThumbnail from "../ProductThumbnail";
import FilterSortPanel from "./FilterSortPanel";
import getMattressTypes from "./mattressType.query";
import getMattressBrands from "./mattressBrand.query";

const MattressList = ({ location, data }) => {
  const mattressTypes = getMattressTypes();
  const mattressBrands = getMattressBrands();
  const initialState = GenerateInitialState(
    location,
    data,
    mattressTypes,
    mattressBrands
  );
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
          typeCheckBoxes={state.typeCheckBoxes}
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

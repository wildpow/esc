import { useReducer } from "react";
import styled from "@emotion/styled";
import propTypes from "prop-types";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../ProductListingHeader";
import { NewBread } from "../productListing.styled";
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
} from "../QueryHooks/Accessories/Content";
import {
  colors,
  fonts,
  boxShadow,
  FadeInAnimation,
} from "../../../styles/theme.styled";

const MattListWrapper = styled.div`
  ${FadeInAnimation}
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  .mattList__flex {
    border-top: 8px solid ${colors.brandBlue};
    padding-top: 20px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .mattList__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-auto-rows: minmax(300px, 427px);
    grid-gap: 1rem;
    margin-left: 7px;
    margin-right: 7px;
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 70%;
    }
    @media screen and (min-width: 1024px) {
      width: 80%;
    }
  }
  .noFilter {
    background-color: ${colors.white};
    box-shadow: ${boxShadow.md};
    font-family: ${fonts.sans};
    margin-left: 7px;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      border-bottom: 4px solid ${colors.red[800]};
    }
    border-bottom: 4px solid ${colors.red[800]};
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 70%;
    }
    @media screen and (min-width: 1024px) {
      width: 80%;
    }
  }
`;

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

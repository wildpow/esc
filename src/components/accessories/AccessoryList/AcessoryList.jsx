import React, { useReducer } from "react";
import propTypes from "prop-types";
import Layout from "../../layout";
import BreadCrumbs from "../../breadCrumbs";
import Header from "../../mattressList/Header";
import { NewBread, MattListWrapper } from "../../mattressList";
import filterSortAcc from "./filterSortAcc";
import FilterSortPanel from "./filterSortPanelAcc";
import AccThumb from "./accThumb";
import useProtector from "../Hooks/use-protector";
import useSheets from "../Hooks/use-sheets";
import usePillows from "../Hooks/use-pillows";
import GenerateInitialState from "./utils/generateInitialState";
import useHeaders from "../Hooks/use-headers";

const AccessoryList = ({ location }) => {
  const protectors = useProtector();
  const sheets = useSheets();
  const pillows = usePillows();
  const headers = useHeaders();
  const initialState = GenerateInitialState(
    location,
    pillows,
    sheets,
    protectors,
    headers,
  );
  const [state, dispatch] = useReducer(filterSortAcc, initialState);
  return (
    <Layout>
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs next="Accessories" here={state.selectedAccInfo.title} />
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
            {state.acc.map((acc) => (
              <AccThumb acc={acc} key={acc.shopifyId} />
            ))}
          </div>
        </div>
        <NewBread Brands Bottom>
          <BreadCrumbs next="Accessories" here={state.selectedAccInfo.title} />
        </NewBread>
      </MattListWrapper>
    </Layout>
  );
};

AccessoryList.propTypes = {
  location: propTypes.instanceOf(Object).isRequired,
};
export default AccessoryList;

import React, { useReducer } from "react";
import BreadCrumbs from "../../BreadCrumbs";
import {
  NewBread,
  MattListWrapper,
} from "../../MattressList/MattressList.styled";
import GenerateInitialState from "./generateInitialState";

const MattressList = ({ location, data }) => {
  const initialState = GenerateInitialState(location, data);
  return (
    <MattListWrapper>
      {/* {console.log(initialState)} */}
      <NewBread Brands>jdjd</NewBread>
    </MattListWrapper>
  );
};

export default MattressList;

import React from "react";
import Layout from "../../Layout";
import BreadCrumbs from "../../BreadCrumbs";
import Header from "../../MattressList/Header";
import {
  NewBread,
  MattListWrapper,
} from "../../MattressList/MattressList.styled";

const MattressList = ({ location }) => {
  return (
    <Layout>
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs
            next="Accessories"
            here={
              // state.selectedAccInfo.title === "Accessories"
              //   ? "All"
              //   : state.selectedAccInfo.title
            }
          />
        </NewBread>
      </MattListWrapper>
    </Layout>
  );
};

export default MattressList;

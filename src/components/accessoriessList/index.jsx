import React from "react";
import styled from "styled-components";
import BreadCrumbs, { BreadWrapper } from "../breadCrumbs";

const NewBread = styled(BreadWrapper)`
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

const MattListWrapper = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  .mattList__flex {
    border-top: 8px solid ${props => props.theme.mainColor1};
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

const AccList = props => {
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default AccList;
